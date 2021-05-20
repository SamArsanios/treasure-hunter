// import Phaser from 'phaser';
import Phaser from 'phaser';
import BootScene from './Scenes/boot-scene';
import PreloaderScene from './Scenes/preloader-scene';
import TitleScene from './Scenes/title-scene';// eslint-disable-line
import OptionsScene from './Scenes/options-scene';
import LeaderboardScene from './Scenes/leaderboard-scene';
import CreditsScene from './Scenes/credits-scene';// eslint-disable-line
import GameplayScene from './Scenes/gameplay-scene';
import GameoverScene from './Scenes/gameover-scene';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  width: 1280,
  height: 600,
  backgroundColor: '#5DACD8',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene:
    [
      BootScene,
      TitleScene,
      PreloaderScene,
      OptionsScene,
      LeaderboardScene,
      CreditsScene,
      GameplayScene,
      GameoverScene,
    ],
};
