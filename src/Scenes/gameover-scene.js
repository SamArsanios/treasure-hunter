import Phaser from 'phaser';
import Button from '../Objects/Button';

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
    }).setOrigin(0.5, 0.5);

    this.add.text(
      640, 30,
      `SCORE: ${this.score}`,
      {
        fontSize: 45,
        color: '#000000',
        fontStyle: 'bold',
      },
    ).setOrigin(0.5, 0.5);

    this.retryButton = this.add.text(640, 300, 'RETRY', {
      fontSize: 45,
      color: '#000',
      fontStyle: 'bold',
    }).setOrigin(0.5, 0.5);

    this.retryButton.setInteractive();

    this.retryButton.on('pointerdown', () => {
      this.scene.start('Game');
    });

    this.menuButton = new Button(this, 640, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}
