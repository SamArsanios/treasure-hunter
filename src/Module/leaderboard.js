import 'regenerator-runtime/runtime';

const leaderboard = (() => {
  const compare = (a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  };
  const saveScore = async (name, score) => {
    const result = { user: name, score };
    console.log(result);
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eUhVLoaqyu6pliIQN9Ii/scores', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(result),
    }).then((response) => { response.json(); }).then((response) => { console.log(response); });
  };
  const receiveScore = async () => {
    const scores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eUhVLoaqyu6pliIQN9Ii/scores', {
      mode: 'cors',
    });
    return scores.json();
  };
  const displayScore = async (scene) => {
    const scores = await receiveScore();
    const scoreList = scores.result;
    scoreList.sort(compare);
    const size = scoreList.length > 18 ? 18 : scoreList.length;
    for (let i = 0; i < size; i += 1) {
      scene.add.text(640, 24 * i + 45, `${scoreList[i].user} : ${scoreList[i].score}`, { fontSize: 20 }).setOrigin(0.5);
    }
  };
  return { saveScore, receiveScore, displayScore };
})();

export default leaderboard;