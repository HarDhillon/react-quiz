import { useState } from "react";
import { GoCheckCircle, GoXCircle } from "react-icons/go";

function Question({ question, shuffledChoices }) {

    const [selectedChoice, setSelectedChoice] = useState(false)
    const [userCorrect, setUserCorrect] = useState(false)

    const handleClick = (choice) => {

        if (selectedChoice === true) {
            return
        }
        if (choice === question.correct_answer) {
            setUserCorrect(true)
        }
        setSelectedChoice(true)

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
        <div>
            <div className="flex my-5" >
                <h1 className="mr-2">Category: {question.category}</h1>
                <h3>Difficulty {question.difficulty}</h3>
            </div>
            <div className="flex">
                <h5>{question.question}</h5>
                <p className="ml-2">{userCorrect && selectedChoice ? 'Correct' : ""}{selectedChoice && !userCorrect ? "Wrong" : ''} </p>
            </div>
            <div>{renderedChoices} </div>
        </div>
    )


}

export default Question