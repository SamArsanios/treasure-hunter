import GameplayScene from '../Scenes/gameplay-scene';

describe('GamePlayScene', () => {
  test('Game has a constructor', () => {
    expect(GameplayScene.prototype.constructor).not.toBe(false);
  });

  test('Scene is created correctly', () => {
    const scene = new GameplayScene({
      active: true,
    });
    expect(scene.sys.config).toBe('Game');
  });

  test('GamePlayscene to be a funtion', () => {
    expect(typeof GameplayScene).toBe('function');
  });

  test('GameScene to not be undefined', () => {
    expect(typeof GameplayScene).not.toBe('undefined');
  });

  // test('Returns smallest Value', () => {
  //   const array = [5, 6, 7]
  //   const value = GameplayScene.update.smallestArrayValue(array);

  //   expect(value).toBe(array);
  // })
});