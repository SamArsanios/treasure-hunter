import BootScene from '../Scenes/boot-scene';

describe('Boot', () => {
  test('Game has a constructor', () => {
    expect(BootScene.prototype.constructor).not.toBe(false);
  });

  test('Scene is created correctly', () => {
    const scene = new BootScene({
      active: true,
    });
    expect(scene.sys.config).toBe('Boot');
  });

  test('BootScene to be a function', () => {
    expect(typeof BootScene).toBe('function');
  });

  test('BootScene to not be undefined', () => {
    expect(typeof BootScene).not.toBe('undefined');
  });
});
