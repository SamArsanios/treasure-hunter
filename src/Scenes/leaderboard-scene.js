import Phaser from 'phaser';
import form from '../Objects/PlayerForm';
import leaderboard from '../Module/leaderboard';
import Button from '../Objects/Button';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    form.removeForm(this);
    leaderboard.displayScore(this);
    this.add.text(640, 5, 'Scoreboard', {
      fontSize: 40,
      color: '#000',
      fontStyle: 'bold',
      padding: 10,
    }).setOrigin(0.5);

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}