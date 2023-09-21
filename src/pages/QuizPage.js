import QuizOptions from "../components/QuizOptions";
import { useSelector } from "react-redux"
import Question from "../components/Question";
import QuestionList from "../components/QuestionList";


function QuizPage() {


    const showQuiz = useSelector((state) => {
        return state.config.submitted
    })

    return (
        <>
            <QuizOptions />
            {showQuiz ? <QuestionList /> : ''}
        </>
    )
}

export default QuizPage