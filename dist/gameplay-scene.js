// var GameplayScene = new Phaser.Class({
//   Extends: Phaser.Scene,
//   initialize: function () {
//     Phaser.Scene.call(this, { key: "GameplayScene" });
//   },

//   init: function () {
//     this.positionsY = [125, 300, 475];
//     this.isCoinPoolItem = true;
//   },

//   preload: function () {
//     this.load.image("clouds-blue", "..src/assets/blue.png");
//     this.load.image("clouds-white", "..src/assets/white-clouds-1.png");
//     this.load.image("clouds-white-small", "..src/assets/white-clouds-small.png");
//     this.load.atlas("plane", "..src/assets/plane.png", "..src/assets/plane.json");
//     // this.load.json("sprites", "./assets/sprite-physics.json");
//     this.load.image("coin", "..src/assets/coin.png");
//     this.load.image("obstacle", "..src/assets/obstacle.png");
//   },


//   create: function () {
//     this.cloudsBlue = this.add.image(640, 360, "clouds-blue");
//     this.cloudsWhite = this.add.tileSprite(640, 360, 1280, 720, "clouds-white");
//     this.cloudsWhiteSmall = this.add.tileSprite(640, 360, 1280, 720, "clouds-white-small");

//     this.scoreText = this.add.text(
//       10, 10,
//       "SCORE: 0",
//       {
//         fontSize: 30,
//         color: "#000000",
//         fontStyle: "bold",
//         // backgroundColor: "#eeeeee",
//         // padding: (-100, 1)
//       }
//     );
//     this.scoreText.setDepth(1);

//     this.anims.create({
//       key: "fly",
//       frameRate: 7,
//       frames: this.anims.generateFrameNames("plane", {
//         prefix: "plane-",
//         suffix: ".png",
//         start: 1,
//         end: 4,
//         zeroPad: 1
//       }),
//       repeat: -1
//     });

//     this.anims.create({
//       key: "explosion",
//       frameRate: 7,
//       frames: this.anims.generateFrameNames("plane", {
//         prefix: "smoke-",
//         suffix: ".png",
//         start: 1,
//         end: 4,
//         zeroPad: 1
//       }),
//       repeat: 2
//     });

//     this.plane = this.physics.add.sprite(100, 300, "plane");
//     this.plane.setDepth(1);
//     this.plane.setScale(0.25);
//     this.plane.setData("score", 0);
//     this.plane.setData("position", 1);
//     this.plane.play("fly");

//     this.coinGroup = this.physics.add.group({
//       defaultKey: "coin",
//       maxSize: 10,
//       visible: false,
//       active: false
//     });

//     this.obstacleGroup = this.physics.add.group({
//       defaultKey: "obstacle",
//       maxSize: 10,
//       visible: false,
//       active: false
//     });

//     this.time.addEvent({
//       delay: 1000,
//       loop: true,
//       callback: () => {
//         let coinPosition = Math.floor(Math.random() * 3);

//         if (this.isCoinPoolItem) {
//           this.coinGroup.get(1300, this.positionsY[coinPosition])
//             .setActive(true)
//             .setVisible(true)
//             .setScale(0.15);
//         } else {
//           let obstacleCount = Math.floor(Math.random() * 2) + 1;
//           for (let i = 0; i < obstacleCount; i++) {
//             let obstaclePosition = Math.floor(Math.random() * 3);
//             this.obstacleGroup.get(1300, this.positionsY[obstaclePosition])
//               .setActive(true)
//               .setVisible(true)
//               .setScale(0.3);
//           }
//         }
//         this.isCoinPoolItem = !this.isCoinPoolItem
//       }
//     });

//     //Physics Collider: Plane against Coin
//     this.physics.add.collider(this.plane, this.coinGroup, function (plane, coin) {
//       // coin.x = 1400;
//       if (coin.active && plane.anims.getName() != "explosion") {
//         this.coinGroup.killAndHide(coin);
//         // let score = plane.getData("score");
//         // score++;
//         // plane.setData("score", score);
//         plane.incData("score", 1);
//         this.scoreText.setText("SCORE: " + plane.getData("score"));
//       }
//     }, null, this);

//     //Physics Collider: Plane against Obstacle
//     this.physics.add.collider(this.plane, this.obstacleGroup, function (plane, obstacle) {
//       if (plane.anims.getName() != "explosion") {
//         plane.play("explosion");
//         plane.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
//           plane.destroy();
//           this.scene.restart();
//         });
//       }
//     }, null, this);
//   },

//   update: function () {
//     this.cloudsWhite.tilePositionX += 0.5;
//     this.cloudsWhiteSmall.tilePositionX += 0.25;
//     this.coinGroup.incX(-4);// coin.x -= 4;
//     this.obstacleGroup.incX(-4);

//     this.coinGroup.getChildren().forEach(coin => {
//       if (coin.active && coin.x < 0) {
//         this.coinGroup.killAndHide(coin);
//       }
//     });

//     this.obstacleGroup.getChildren().forEach(obstacle => {
//       if (obstacle.active && obstacle.x < 0) {
//         this.obstacleGroup.killAndHide(obstacle);
//       }
//     });

//     if (this.input.activePointer.isDown) {
//       let position = this.input.activePointer.position;
//       let distancesY = this.positionsY.map(positionY => {
//         return Math.abs(positionY - position.y);
//       });
//       console.log(distancesY);

//       let smallestArrayValue = function (array) {
//         let index = 0, value = 999999
//         for (let i = 0; i < array.length; i++) {
//           if (array[i] < value) {
//             value = array[i];
//             index = i
//           }
//         }
//         return index;
//       };
//       this.plane.setData("position", smallestArrayValue(distancesY));
//     }

//     if (this.plane.y > this.positionsY[this.plane.getData("position")]) {
//       this.plane.y -= 6;
//     } else if (this.plane.y < this.positionsY[this.plane.getData("position")]) {
//       this.plane.y += 6;
//     }
//     if (Math.abs(this.plane.y - this.positionsY[this.plane.getData("position")]) <= 10) {
//       this.plane.y = this.positionsY[this.plane.getData("position")];
//     }
//   }
// });

