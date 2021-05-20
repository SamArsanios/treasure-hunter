import PreloaderScene from '../Scenes/preloader-scene';

describe('PreloaderScene', () => {
  test('Scene is created correctly', () => {
    const scene = new PreloaderScene({
      active: true,
    });
    expect(scene.sys.config).toBe('Preloader');
  });

  test('PreloaderScene to be a function', () => {
    expect(typeof PreloaderScene).toBe('function');
  });

  test('PreloaderScene to not be undefined', () => {
    expect(typeof PreloaderScene).not.toBe('undefined');
  });
});