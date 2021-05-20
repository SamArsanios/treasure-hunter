import Phaser from 'phaser';
import GameOverScene from '../Scenes/gameover-scene';

describe('GamePlayScene', () => {
  test('GameOver has a constructor', () => {
    expect(GameOverScene.prototype.constructor).not.toBe(false);
  });

  test('Game Over scene is a function', () => {
    expect(typeof GameOverScene).toBe('function');
  });

  test('Game Over scene is a subclass of scene', () => {
    expect(GameOverScene.prototype instanceof Phaser.Scene).toBe(true);
  });
});