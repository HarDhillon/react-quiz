import HighScoreTable from "../components/HighScoreTable"
import { useFetchHighScoresQuery } from "../store"

function HighScorePage() {

    const { data, isFetching, error } = useFetchHighScoresQuery()

    let scores

    if (error) {
        console.log(error)
        scores = <div>Error loading Data :( </div>
    }
    else if (isFetching) {
        scores = <div>Loading....</div>
    }
    else {
        console.log(data)
        scores = <HighScoreTable users={data.easy} />
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