export default class GameoverScene extends Phaser.Scene {
    constructor() {
        super('GameoverScene');

    }

    init() {

    }

    preload() {

    }

    create() {
        this.add.text(640, 300, "GAME OVER").setOrigin(0.5);
    }
}