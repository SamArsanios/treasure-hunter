import Phaser from 'phaser';
import form from '../Objects/PlayerForm';
import leaderboard from '../Module/leaderboard';

export default class GameplayScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.positionsY = [125, 300, 475];
    this.isCoinPoolItem = true;
  }

  preload() {
    this.load.image('clouds-blue', 'assets/blue.png');
    this.load.image('clouds-white', 'assets/white-clouds-1.png');
    this.load.image('clouds-white-small', 'assets/white-clouds-small.png');
    this.load.atlas('plane', 'assets/plane.png', 'assets/plane.json');
    this.load.image('coin', 'assets/coin.png');
    this.load.image('obstacle', 'assets/obstacle.png');
    this.load.audio('ding', ['assets/ding.wav']);
    this.load.audio('explosion', ['assets/explosion.wav']);
    this.load.audio('gameMusic', ['assets/autumn.mp3']);
  }

  create() {
    form.removeForm(this);
    this.sys.game.globals.bgMusic.stop();
    this.cloudsBlue = this.add.image(640, 360, 'clouds-blue');
    this.cloudsWhite = this.add.tileSprite(640, 360, 1280, 720, 'clouds-white');
    this.cloudsWhiteSmall = this.add.tileSprite(640, 360, 1280, 720, 'clouds-white-small');

    this.ding = this.sound.add('ding', { loop: false });
    this.explosion = this.sound.add('explosion', { loop: false });
    this.gameMusic = this.sound.add('gameMusic', { loop: true });
    this.gameMusic.play();

    this.scoreText = this.add.text(
      10, 10,
      'SCORE: 0',
      {
        fontSize: 30,
        color: '#000000',
        fontStyle: 'bold',
      },
    );

    this.scoreText.setDepth(1);

    this.anims.create({
      key: 'fly',
      frameRate: 7,
      frames: this.anims.generateFrameNames('plane', {
        prefix: 'plane-',
        suffix: '.png',
        start: 1,
        end: 4,
        zeroPad: 1,
      }),
      repeat: -1,
    });

    this.anims.create({
      key: 'explosion',
      frameRate: 7,
      frames: this.anims.generateFrameNames('plane', {
        prefix: 'smoke-',
        suffix: '.png',
        start: 1,
        end: 4,
        zeroPad: 1,
      }),
      repeat: 2,
    });

    this.plane = this.physics.add.sprite(100, 300, 'plane');
    this.plane.setDepth(1);
    this.plane.setScale(0.25);
    this.plane.setData('score', 0);
    this.plane.setData('position', 1);
    this.plane.play('fly');

    this.coinGroup = this.physics.add.group({
      defaultKey: 'coin',
      maxSize: 10,
      visible: false,
      active: false,
    });

    this.obstacleGroup = this.physics.add.group({
      defaultKey: 'obstacle',
      maxSize: 10,
      visible: false,
      active: false,
    });

    this.time.addEvent({
      delay: 1000,
      loop: true,
      callback: () => {
        const coinPosition = Math.floor(Math.random() * 3);

        if (this.isCoinPoolItem) {
          this.coinGroup.get(1300, this.positionsY[coinPosition])
            .setActive(true)
            .setVisible(true)
            .setScale(0.1);
        } else {
          const obstacleCount = Math.floor(Math.random() * 2) + 1;
          for (let i = 0; i < obstacleCount; i += 1) {
            const obstaclePosition = Math.floor(Math.random() * 3);
            this.obstacleGroup.get(1300, this.positionsY[obstaclePosition])
              .setActive(true)
              .setVisible(true)
              .setScale(0.2);
          }
        }
        this.isCoinPoolItem = !this.isCoinPoolItem;
      },
    });

    // Physics Collider: Plane against Coin
    this.physics.add.collider(this.plane, this.coinGroup, (plane, coin) => {
      if (coin.active && plane.anims.getName() !== 'explosion') {
        this.ding.play();
        this.coinGroup.killAndHide(coin);
        plane.incData('score', 1);
        this.scoreText.setText(`SCORE: ${plane.getData('score')}`);
      }
    }, null, this);

    // Physics Collider: Plane against Obstacle
    this.physics.add.collider(this.plane, this.obstacleGroup, (plane) => {
      if (plane.anims.getName() !== 'explosion') {
        this.explosion.play();
        this.gameMusic.stop();
        plane.play('explosion');
        plane.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
          const { playerName } = this.sys.game.globals;
          const finalScore = plane.getData('score');
          console.log(finalScore);
          leaderboard.saveScore(playerName, finalScore);
          this.scene.start('GameoverScene', { score: plane.getData('score') });
          plane.destroy();
        });
      }
    }, null, this);
  }

  update() {
    this.cloudsWhite.tilePositionX += 0.5;
    this.cloudsWhiteSmall.tilePositionX += 0.25;
    this.coinGroup.incX(-4);
    this.obstacleGroup.incX(-4);

    this.coinGroup.getChildren().forEach((coin) => {
      if (coin.active && coin.x < 0) {
        this.coinGroup.killAndHide(coin);
      }
    });

    this.obstacleGroup.getChildren().forEach((obstacle) => {
      if (obstacle.active && obstacle.x < 0) {
        this.obstacleGroup.killAndHide(obstacle);
      }
    });

    if (this.input.activePointer.isDown) {
      const { position } = this.input.activePointer;
      const distancesY = this.positionsY.map((positionY) => Math.abs(positionY - position.y));

      const smallestArrayValue = (array) => {
        let index = 0;
        let value = 999999;
        for (let i = 0; i < array.length; i += 1) {
          if (array[i] < value) {
            value = array[i];
            index = i;
          }
        }
        return index;
      };
      this.plane.setData('position', smallestArrayValue(distancesY));
    }

    if (this.plane.y > this.positionsY[this.plane.getData('position')]) {
      this.plane.y -= 6;
    } else if (this.plane.y < this.positionsY[this.plane.getData('position')]) {
      this.plane.y += 6;
    }
    if (Math.abs(this.plane.y - this.positionsY[this.plane.getData('position')]) <= 10) {
      this.plane.y = this.positionsY[this.plane.getData('position')];
    }
  }
}
