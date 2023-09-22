import { useFetchQuestionsQuery } from "../store"
import { useSelector } from "react-redux"
import Question from "./Question"

function QuestionList() {

    // Shuffle array method
    const shuffleArray = (array) => {
        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }



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
        content = data.results.map((question, index) => {

            // Create an array of choices and shuffle them
            const choices = [
                question.correct_answer,
                ...question.incorrect_answers
            ];
            const shuffledChoices = shuffleArray(choices)

            return <Question key={index} shuffledChoices={shuffledChoices} question={question}></Question>
        })
    }

    return <div>{content}</div>
}

export default QuestionList