import HighScoreTable from "../components/HighScoreTable"
import { useFetchHighScoresQuery } from "../store"

function HighScorePage() {

    // TODO Tabs for Any, Easy, Medium, Hard which fetch scores for that difficulty

    const difficulty = "easy"

    const { data, isFetching, error } = useFetchHighScoresQuery(difficulty)

    let scores

    if (error) {
        console.log(error)
        scores = <div>Error loading Data :( </div>
    }
    else if (isFetching) {
        scores = <div>Loading....</div>
    }
    else {
        scores = <HighScoreTable users={data} />
    }

    return (
        <div>High Score Page
            <div>{scores}</div>
        </div>
    )
}

export default HighScorePage