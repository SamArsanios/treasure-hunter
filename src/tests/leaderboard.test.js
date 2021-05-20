import leaderboard from '../Module/leaderboard';
import LeaderboardScene from '../Scenes/leaderboard-scene';
import 'regenerator-runtime/runtime';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    result: [
      {
        user: 'Sam',
        score: 10,
      },
      {
        user: 'Guest',
        score: 15,
      },
    ],
  }),
}));

describe('Leaderboard', () => {
  test('Leaderboard has a constructor', () => {
    expect(LeaderboardScene.prototype.constructor).not.toBe(false);
  });

  test('Scene is created correctly', () => {
    const scene = new LeaderboardScene({
      active: true,
    });
    expect(scene.sys.config).toBe('Leaderboard');
  });

  test('Leaderboard scene is a function', () => {
    expect(typeof LeaderboardScene).toBe('function');
  });

  test('Leaderboard to not be undefined', () => {
    expect(typeof LeaderboardScene).not.toBe('undefined');
  });

  test('Receives/Loads the scores', async () => {
    const scores = await leaderboard.receiveScore();
    expect(scores.result).toBeTruthy();
  });
});
