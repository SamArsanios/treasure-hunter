import 'phaser';
import config from './config';
import GameplayScene from "./Scenes/gameplay-scene"
import GameoverScene from "./Scenes/gameover-scene"
import BootScene from "./Scenes/boot-scene";

class Game extends Phaser.Game {
    constructor() {
        super(config);
        // this.scene.add('Game', GameplayScene);
        // this.scene.add('Game', GameoverScene);
        // this.scene.add('Boot', BootScene);
        this.scene.start('Game');
    }
}
window.game = new Game()

// window.game = new Game(phaserConfig)
