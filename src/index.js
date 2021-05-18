import 'phaser';
import config from './config';
import GameplayScene from "./Scenes/gameplay-scene"
import GameoverScene from "./Scenes/gameover-scene"

class Game extends Phaser.Game {
    constructor() {
        super(config);
        // this.scene.add('Game', GameplayScene);
        // this.scene.add('Game', GameoverScene);
        this.scene.start('Game');
    }
}
window.game = new Game()

// window.game = new Game(phaserConfig)
