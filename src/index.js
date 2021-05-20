import 'phaser';
import config from './config';

import BootScene from './Scenes/boot-scene';
import PreloaderScene from './Scenes/preloader-scene';
import TitleScene from './Scenes/title-scene';
import OptionsScene from './Scenes/options-scene';
import CreditsScene from './Scenes/credits-scene';
import GameplayScene from './Scenes/gameplay-scene';
import GameoverScene from './Scenes/gameover-scene';
import Model from './Model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    const playerName = 'Guest';
    this.globals = { model, playerName, bgMusic: null };
    // this.scene.add('Boot', BootScene);
    // this.scene.add('Preloader', PreloaderScene);
    // this.scene.add('Title', TitleScene)
    // this.scene.add('Options', OptionsScene);
    // this.scene.add('Credits', CreditsScene);
    // this.scene.add('Game', GameplayScene);
    // this.scene.add('Gameover', GameoverScene);
    this.scene.start('Boot');
  }
}
window.game = new Game();

// window.game = new Game(phaserConfig)
