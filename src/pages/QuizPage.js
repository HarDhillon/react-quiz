import QuizOptions from "../components/QuizOptions";
import { useSelector } from "react-redux"
import Question from "../components/Question";


function QuizPage() {


    const showQuiz = useSelector((state) => {
        return state.config.submitted
    })

    return (
        <>
            <QuizOptions />
            {showQuiz ? <Question /> : ''}
        </>
    )
}

export default QuizPage