import HighScoreTable from "../components/HighScoreTable"
import { useFetchHighScoresQuery } from "../store"

function HighScorePage() {

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

    // TODO
    // <TabsContainer>
    //  <TabItem title={"easy"}> <HighScoreTable users={}></HighScoreTable> </TabItem>
    //  <TabItem title={"medium"}> <HighScoreTable users={}></HighScoreTable> </TabItem>
    // </TabsContainer >

    return (
        <div>
            High Score Page
            <div>{scores}</div>
        </div>
    )
}

export default HighScorePage