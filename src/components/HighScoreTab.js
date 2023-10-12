import { useFetchHighScoresQuery } from "../store"
import Tabs from "./Tabs"

function HighScoreTab() {

    const { data, isFetching, error } = useFetchHighScoresQuery()


    const items = [
        {
            label: 'any',
            content: error ? 'Error loading data' : isFetching ? 'Loading...' : data.any
        },
        {
            label: 'easy',
            content: error ? 'Error loading data' : isFetching ? 'Loading...' : data.easy
        },
        {
            label: 'medium',
            content: error ? 'Error loading data' : isFetching ? 'Loading...' : data.medium
        },
        {
            label: 'hard',
            content: error ? 'Error loading data' : isFetching ? 'Loading...' : data.hard
        }
    ]

    return <Tabs items={items} />
}

export default HighScoreTab