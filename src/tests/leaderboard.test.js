import leaderboard from '../Module/leaderboard';
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

describe('receiveScore', () => {
  it('Receives/Loads the scores', async () => {
    const scores = await leaderboard.receiveScore();
    expect(scores.result).toBeTruthy();
  });
});