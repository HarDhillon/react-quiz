import QuizOptions from "../components/QuizOptions";
import { useSelector } from "react-redux"
import QuestionList from "../components/QuestionList";


function QuizPage() {


    const showQuiz = useSelector((state) => {
        return state.config.submitted
    })

    const complete = useSelector((state) => {
        return state.questions.complete
    })

    const totalQuestion = useSelector((state) => {
        return state.config.amount
    })

    const userScore = useSelector((state) => {
        return state.quiz.userScore
    })


    return (
        <>
            <QuizOptions />
            <div> {userScore} / {totalQuestion}</div>
            {showQuiz ? <QuestionList /> : ''}
        </>
    )
}

export default QuizPage