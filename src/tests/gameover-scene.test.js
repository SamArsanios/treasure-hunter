import Phaser from 'phaser';
import GameOverScene from '../Scenes/gameover-scene';

test('Game Over scene is a function', () => {
  expect(typeof GameOverScene).toBe('function');
});

test('Game Over scene is a subclass of scene', () => {
  expect(GameOverScene.prototype instanceof Phaser.Scene).toBe(true);
});