import { GoCheckCircle, GoXCircle } from "react-icons/go";
import { changeUserScore, changeQuestionsAnswered } from "../store";
import { useDispatch } from "react-redux";

function Question({ question, shuffledChoices, selectedChoice, setSelectedChoice, userCorrect, setUserCorrect, timeLeft }) {



    const dispatch = useDispatch()

    const handleClick = (choice) => {
        // Return if question is already answered
        if (selectedChoice === true) {
            return
        }
        // If correct answer
        if (choice === question.correct_answer) {
            setUserCorrect(true)
            // Add to user score
            dispatch(changeUserScore())
        }
        // Once user answered question 
        setSelectedChoice(true)
        // Wait 2 seconds then show next question
        setTimeout(function () {
            dispatch(changeQuestionsAnswered())
        }, 2000);

    }

    // TODO figure out why shuffledchoices is going to the next one when timer runs out but not when clicking

    if (timeLeft === 0) {
        // Once user answered question 
        setSelectedChoice(true)
        // Wait 2 seconds then show next question
        setTimeout(function () {
            dispatch(changeQuestionsAnswered())
        }, 2000);
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
                <p className="ml-2">{userCorrect && selectedChoice ? <GoCheckCircle className="text-2xl text-green-600" /> : ""}{selectedChoice && !userCorrect ? <GoXCircle className="text-2xl text-red-600" /> : ''} </p>
            </div>
            <div>{renderedChoices} </div>
        </div>
    )


}

export default Question