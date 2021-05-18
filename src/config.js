// import Phaser from 'phaser';
import 'phaser';
import BootScene from "./Scenes/boot-scene"
import TitleScene from "./Scenes/title-scene"
import PreloaderScene from "./Scenes/preloader-scene"
import GameplayScene from "./Scenes/gameplay-scene"
import GameoverScene from "./Scenes/gameover-scene"

export default {
    type: Phaser.AUTO,
    parent: "game",
    width: 1280,
    height: 600,
    backgroundColor: "#5DACD8",
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: [BootScene, TitleScene, PreloaderScene, GameplayScene, GameoverScene]
}