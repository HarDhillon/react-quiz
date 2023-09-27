import QuizOptions from "../components/QuizOptions";
import { useSelector } from "react-redux"
import QuestionList from "../components/QuestionList";


function QuizPage() {


    const showQuiz = useSelector((state) => {
        return state.config.submitted
    })

    const totalQuestions = useSelector((state) => {
        return state.config.amount
    })

    // Quiz is complete when user has answered all question
    const complete = useSelector((state => {
        return state.quiz.questionsAnswered === totalQuestions
    }))

    const userScore = useSelector((state) => {
        return state.quiz.userScore
    })


    return (
        <>
            <QuizOptions />
            {showQuiz && !complete && <QuestionList />}

            {complete && <div>Total Score: {complete ? `${userScore} / ${totalQuestions}` : ''}  </div>}
        </>
    )
}

export default QuizPage