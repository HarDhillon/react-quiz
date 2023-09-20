import { useFetchQuestionsQuery } from "../store"
import { useSelector } from "react-redux"

function Question() {

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

    const options = { category, difficulty, type, amount }

    const { data, isFetching, error } = useFetchQuestionsQuery(options)

    let content

    if (error) {
        content = <div>Error fetching Questions</div>;
        console.log(error)
    }
    if (isFetching) {
        content = <div>Loading Questions...</div>
    }
    else {
        console.log(data.results)
        content = data.results.map((question, index) => {

            const choices = [
                question.correct_answer,
                ...question.incorrect_answers
            ];

            const renderedChoices = choices.map((choice) => {
                return <div>{choice}</div>
            })

            return <div key={index}>
                <div className="flex my-5" >
                    <h1 className="mr-2">Category: {question.category}</h1>
                    <h3>Difficulty {question.difficulty}</h3>

                </div>
                <h5>{question.question}</h5>
                <div>{renderedChoices} </div>
            </div>
        })
    }

    return <div>{content}</div>
}

export default Question