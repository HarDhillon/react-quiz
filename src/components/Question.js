import { GoCheckCircle, GoXCircle } from "react-icons/go";
import Card from "./Card";

import { useSelector } from "react-redux";
import QuestionTimer from "./QuestionTimer";

function Question({ question, shuffledChoices, selectedChoice, userCorrect, handleChoiceClick, questionNumber }) {

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

    const cardClass = userCorrect && selectedChoice ? 'bg-green-100' : selectedChoice && !userCorrect ? 'bg-red-100' : '';

    return (
        <div>
            <div className="flex justify-between mt-5 mb-5" >
                <h3 className="text-lg">{question.category}</h3>
                <h3 className={`text-lg capitalize ${question.difficulty}`}>{question.difficulty}</h3>
            </div>


            <Card className={cardClass} userCorrect={userCorrect} selectedChoice={selectedChoice}>
                <div className="flex justify-between">
                    {selectedChoice && timeLeft !== 0 ? <div></div> : timeLeft !== 0 ? <QuestionTimer /> : <h3 className="font-bold text-left">Times Up!</h3>}
                    <div className="border border-black rounded py-1.5 px-4">
                        {questionNumber}
                    </div>
                </div>
                <div className="flex mb-5 mt-5 justify-center">
                    <h5 className="text-lg font-bold">{question.question}</h5>
                    <p className="ml-2">{userCorrect && selectedChoice ? <GoCheckCircle className="text-2xl text-green-600" /> : ""}{selectedChoice && !userCorrect ? <GoXCircle className="text-2xl text-red-600" /> : ''} </p>
                </div>
                <div>{renderedChoices} </div>


            </Card>
        </div>
    )


}

export default Question