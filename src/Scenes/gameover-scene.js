export default class GameoverScene extends Phaser.Scene {
    constructor() {
        super('GameoverScene');

    }

    init(data) {
        this.score = data.score;
    }

    preload() {

    }

    create() {
        this.add.text(640, 200, "GAME OVER", {
            fontSize: 60,
            color: "#000",
            fontStyle: "bold",
            padding: 10
        }).setOrigin(0.5);

        this.add.text(
            10, -170,
            "SCORE: " + this.score,
            {
                fontSize: 30,
                color: "#000000",
                fontStyle: "bold",
            }
        );

        this.retryButton = this.add.text(1125, 200, "RETRY", {
            fontSize: 40,
            color: "#000",
            fontStyle: "bold",
        });

        this.retryButton.setInteractive();

        this.retryButton.on("pointerdown", () => {
            this.scene.start("Game");
        })
    }
}