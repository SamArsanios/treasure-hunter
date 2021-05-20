import Phaser from 'phaser';
import config from '../config';// eslint-disable-line
import Button from '../Objects/Button';
import form from '../Objects/PlayerForm';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.add.image(400, 200, 'boot');
  }

  create() {
    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // LeaderBoard
    this.leaderboardButton = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Scoreboard', 'Leaderboard');

    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 200, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    // Player Form
    form.showForm();

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  // centerButtonText(gameText, gameButton) {
  //   Phaser.Display.Align.In.Center(
  //     gameText,
  //     gameButton
  //   );
  // }
}

/// /////// Phaser Part 1

// import 'phaser';

// export default class TitleScene extends Phaser.Scene {
//   constructor() {
//     super('Title');
//   }

//   preload() {
//     let width = this.cameras.main.width;
//     let height = this.cameras.main.height;
//     var assetText = this.make.text({
//       x: width / 2,
//       y: height / 2 + 50,
//       text: 'Title Scene',
//       style: {
//         font: '18px monospace',
//         fill: '#ffffff'
//       }
//     });
//     assetText.setOrigin(0.5, 0.5);
//   }

//   create() {
//     this.scene.start('Game');
//   }
// };
