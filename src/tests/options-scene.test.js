import Phaser from 'phaser';
import OptionsScene from '../Scenes/options-scene';

describe('Options', () => {
  test('Game has a constructor', () => {
    expect(OptionsScene.prototype.constructor).not.toBe(false);
  });

  test('Scene is created correctly', () => {
    const scene = new OptionsScene({
      active: true,
    });
    expect(scene.sys.config).toBe('Options');
  });

  test('OptionsScene to be a function', () => {
    expect(typeof OptionsScene).toBe('function');
  });

  test('OptionsScene scene is a subclass of scene', () => {
    expect(OptionsScene.prototype instanceof Phaser.Scene).toBe(true);
  });

  test('OptionsScene to not be undefined', () => {
    expect(typeof OptionsScene).not.toBe('undefined');
  });
});
