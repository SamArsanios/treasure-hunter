import GameplayScene from '../Scenes/gameplay-scene';

describe('GamePlayScene', () => {
  test('Scene is created correctly', () => {
    const scene = new GameplayScene({
      active: true,
    });
    expect(scene.sys.config).toBe('Game');
  });

  test('Gamescene to be a funtion', () => {
    expect(typeof GameplayScene).toBe('function');
  });

  test('GameScene to not be undefined', () => {
    expect(typeof GameplayScene).not.toBe('undefined');
  });
});