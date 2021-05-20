import Phaser from 'phaser';
import config from './config';
import Model from './Model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    const playerName = 'Guest';
    this.globals = { model, playerName, bgMusic: null };

    this.scene.start('Boot');
  }
}
window.game = new Game();
