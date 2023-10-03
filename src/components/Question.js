import { GoCheckCircle, GoXCircle } from "react-icons/go";

import { useSelector } from "react-redux";
import QuestionTimer from "./QuestionTimer";

function Question({ question, shuffledChoices, selectedChoice, userCorrect, handleChoiceClick }) {

    const timeLeft = useSelector((state) => state.quiz.questionTimeLeft);


    const handleClick = (choice) => {
        if (timeLeft > 0) {
            handleChoiceClick(choice); // Call the callback defined in QuestionList
        }
    }


    const renderedChoices = shuffledChoices.map((choice, index) => {
        // Determine if this choice is the correct answer or not
        const isCorrect = choice === question.correct_answer;


        return <div
            className={`hover:cursor-pointer hover:bg-gray-300 ${isCorrect && selectedChoice ? 'correct' : ''}${selectedChoice && !isCorrect ? 'incorrect' : ''}`}
            onClick={() => handleClick(choice)} key={index}>{choice}
        </div>
    })

    return (
        <div className="text-center rounded shadow-lg p-5">

            {timeLeft !== 0 ? <QuestionTimer /> : <div><h1>Times Up!</h1></div>}

            <div className="flex my-5 justify-center" >
                <h1 className="mr-2">Category: {question.category}</h1>
                <h3>Difficulty {question.difficulty}</h3>
            </div>
            <div className="flex mb-3">
                <h5 className="text-lg font-bold">{question.question}</h5>
                <p className="ml-2">{userCorrect && selectedChoice ? <GoCheckCircle className="text-2xl text-green-600" /> : ""}{selectedChoice && !userCorrect ? <GoXCircle className="text-2xl text-red-600" /> : ''} </p>
            </div>
            <div>{renderedChoices} </div>


        </div>
    )


}

export default Question