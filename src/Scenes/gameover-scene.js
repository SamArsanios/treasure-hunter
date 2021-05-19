export default class GameoverScene extends Phaser.Scene {
  constructor() {
    super('GameoverScene');

  }

  init(data) {
    this.score = data.score;
  }

  // preload() {
  //   let assetText = this.make.text({
  //     x: this.cameras.main.width / 2,
  //     y: this.cameras.main.height / 2 + 50,
  //     text: "GAME OVER",
  //     style: {
  //       fontSize: 60,
  //       color: "#000",
  //       fontStyle: "bold",
  //       padding: 10,
  //       fill: '#ffffff',
  //     }
  //   }).setOrigin(0.5);
  //   assetText.setOrigin(0.5, 0.5);

  //   let scoreText = this.make.text({
  //     text: "SCORE: " + this.score,
  //     x: 400,
  //     y: 20,
  //     style: {
  //       fontSize: 30,
  //       color: "#000000",
  //       fontStyle: "bold",
  //       fill: '#ffffff',
  //     }
  //   });
  //   scoreText.setOrigin(0.5, 0.5);

  create() {
    this.add.text(640, 170, "GAME OVER", {
      fontSize: 60,
      color: "#000",
      fontStyle: "bold",
      padding: 10
    }).setOrigin(0.5);

    this.add.text(
      560, -100,
      "SCORE: " + this.score,
      {
        fontSize: 45,
        color: "#000000",
        fontStyle: "bold",
      }
    );

    // this.retryButton = this.make.text(640, 200, "RETRY", {
    //   fontSize: 40,
    //   color: "#000",
    //   fontStyle: "bold",
    // });
    this.retryButton = this.add.text(580, 170, "RETRY", {
      fontSize: 45,
      color: "#000",
      fontStyle: "bold",
    });

    this.retryButton.setInteractive();

    this.retryButton.on("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
