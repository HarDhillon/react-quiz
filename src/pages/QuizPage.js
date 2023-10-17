import QuizOptions from "../components/QuizOptions";
import { useSelector } from "react-redux"
import QuestionList from "../components/QuestionList";
import HighScoreForm from "../components/HighScoreForm";
import HighScoreSection from "../components/HighScoreSection";


function QuizPage() {


    const showQuiz = useSelector((state) => {
        return state.config.submitted
    })

    const totalQuestions = useSelector((state) => {
        return state.config.amount
    })

    // Quiz is complete when user has answered all question
    const complete = useSelector((state => {
        // console.log(state.quiz.questionsAnswered)
        return state.quiz.questionsAnswered === totalQuestions
    }))

    const userScore = useSelector((state) => {
        return state.quiz.userScore
    })

    let content

    if (showQuiz && !complete) {
        content = <QuestionList />
    }
    else if (complete) {
        content = <div>
            <div className="mt-5">Total Score: {userScore} / {totalQuestions}  </div>
            <HighScoreForm />

            <HighScoreSection />
        </div>
    }

    return (
        <>
            <QuizOptions />

            {content}
        </>
    )
}

export default QuizPage