import { useFetchHighScoresQuery } from "../store"
import Tabs from "./Tabs"

function HighScoreTab({ children }) {

    const { data, isFetching, error } = useFetchHighScoresQuery()

    const items = [
        {
            label: 'any',
            content: ''
        },
        {
            label: 'easy',
            content: ''
        },
        {
            label: 'medium',
            content: ''
        },
        {
            label: 'hard',
            content: ''
        }
    ]

    return <Tabs items={items} />
}

export default HighScoreTab