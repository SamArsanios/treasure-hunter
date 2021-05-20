import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('boot', 'assets/boot-image2.jpg');
  }

  create() {
    this.scene.start('Preloader');
  }
}