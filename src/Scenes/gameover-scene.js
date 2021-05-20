import Phaser from 'phaser';

export default class GameoverScene extends Phaser.Scene {
  constructor() {
    super('GameoverScene');
  }

  init(data) {
    this.score = data.score;
  }

  create() {
    this.add.text(640, 170, 'GAME OVER', {
      fontSize: 60,
      color: '#000',
      fontStyle: 'bold',
      padding: 10,
    }).setOrigin(0.5);

    this.add.text(
      560, -100,
      `SCORE: ${this.score}`,
      {
        fontSize: 45,
        color: '#000000',
        fontStyle: 'bold',
      },
    );

    this.retryButton = this.add.text(580, 170, 'RETRY', {
      fontSize: 45,
      color: '#000',
      fontStyle: 'bold',
    });

    this.retryButton.setInteractive();

    this.retryButton.on('pointerdown', () => {
      this.scene.start('Game');
    });
  }
}
