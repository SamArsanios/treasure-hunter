export default class GameoverScene extends Phaser.Scene {
    constructor() {
        super('GameoverScene');

    }

    init() {

    }

    preload() {

    }

    create() {
        this.add.text(640, 200, "GAME OVER", {
            fontSize: 60,
            color: "#000",
            fontStyle: "bold",
            backgroundColor: "#FFF",
            padding: 10
        }).setOrigin(0.5);

        this.add.text(
            10, 10,
            "SCORE: 0",
            {
                fontSize: 30,
                color: "#000000",
                fontStyle: "bold",
                // backgroundColor: "#eeeeee",
                // padding: 0
            }
        );

        this.retryButton = this.add.text(1125, 475, "RETRY", {
            fontSize: 40,
            color: "#000",
            fontStyle: "bold",
            backgroundColor: "#FFF",
            // padding: 10
        });
    }
}