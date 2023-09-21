import { useFetchQuestionsQuery } from "../store"
import { useSelector } from "react-redux"
import Question from "./Question"

function QuestionList() {

    // Grab our state
    const amount = useSelector((state) => {
        return state.config.amount
    })
    const category = useSelector((state) => {
        return state.config.category
    })
    const difficulty = useSelector((state) => {
        return state.config.difficulty
    })
    const type = useSelector((state) => {
        return state.config.type
    })


    // Get our form options state and fetch from the API
    const options = { category, difficulty, type, amount }
    const { data, isFetching, error } = useFetchQuestionsQuery(options)

    let content

    // Determine what the API call returned
    if (error) {
        console.log(error)
        content = <div>Error loading data</div>
    }
    else if (isFetching) {
        content = <div>Loading...</div>
    }
    // If call was successfull pass Question each question and render it
    else {
        content = data.results.map((question) => {
            return <Question question={question}></Question>
        })
    }

    return <div>{content}</div>
}

export default QuestionList