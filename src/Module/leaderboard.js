const leaderboard = (() => {

    const saveScore = async (name, score) => {
        const result = { user: name, score: score }
        console.log(result)
        fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eUhVLoaqyu6pliIQN9Ii/scores", {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(result)
        }).then((response) => { response.json() }).then((response) => { console.log(response) });
    }

    const receiveScore = async () => {
        const scores = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eUhVLoaqyu6pliIQN9Ii/scores", {
            mode: "cors"
        })
        return scores.json();
    }

    const displayScore = async (scene) => {
        const scores = await receiveScore()
        // console.log(scores);
        const scoreList = scores.result;

        for (let i = 0; i < scoreList.length; i++) {
            scene.add.text(10, 30 * i - 100, `${scoreList[i].user} : ${scoreList[i].score}`)
        }
    }

    return { saveScore, receiveScore, displayScore }
})()

export default leaderboard;