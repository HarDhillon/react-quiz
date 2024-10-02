import { useDispatch, useSelector } from "react-redux";
import { changeAmount, changeCategory, changeDifficulty, changeQuestionsAnswered, changeSubmitted, changeType, changeUserScore } from "../store";
import { optionsCategory, optionsDifficulty, optionsType } from '../config/quizOptions'
import Button from "./Button";
import Panel from "./Panel";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { useState } from "react";


function QuizForm() {
    const dispatch = useDispatch();
    const amount = useSelector((state) => state.config.amount);

    const [isExpanded, setIsExpanded] = useState(true);

    const handleClick = () => setIsExpanded(!isExpanded);

    const resetQuiz = () => {
        dispatch(changeSubmitted(false));
        dispatch(changeQuestionsAnswered(0));
        dispatch(changeUserScore(0));
    };

    const handleInputChange = (actionCreator) => (e) => {
        dispatch(actionCreator(e.target.value));
        resetQuiz();
    };

    const handleNumberChange = (e) => {
        const number = parseInt(e.target.value);
        if (isNaN(number)) {
            dispatch(changeAmount(1));
        } else if (number > 0 && number <= 50) {
            dispatch(changeAmount(number));
        }
        resetQuiz();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeSubmitted(true));
        setIsExpanded(false);
    };

    const renderOptions = (options) =>
        options.map(({ value, label }) => (
            <option key={value} value={value}>
                {label}
            </option>
        ));

    const icon = (
        <span className="text-2xl">
            {isExpanded ? <GoArrowUp /> : <GoArrowDown />}
        </span>
    );

    return (
        <Panel className="p-5 relative">
            <form className={`quiz-form ${isExpanded ? "open" : "closed"}`} onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-between mb-4">
                    <div className="form-field">
                        <label>Number of Questions (1 - 50)</label>
                        <input
                            className="p-1 border-2 border-gray-500 focus:outline-none focus:border-black"
                            value={amount || 1}
                            onChange={handleNumberChange}
                        />
                    </div>

                    <div className="form-field">
                        <label>Category</label>
                        <select className="p-3" onChange={handleInputChange(changeCategory)}>
                            {renderOptions(optionsCategory)}
                        </select>
                    </div>

                    <div className="form-field">
                        <label>Difficulty</label>
                        <select className="p-3" onChange={handleInputChange(changeDifficulty)}>
                            {renderOptions(optionsDifficulty)}
                        </select>
                    </div>

                    <div className="form-field">
                        <label>Type</label>
                        <select className="p-3" onChange={handleInputChange(changeType)}>
                            {renderOptions(optionsType)}
                        </select>
                    </div>
                </div>

                <Button className="hover:bg-gray-200 transition-colors">Generate Questions</Button>
            </form>

            <div
                onClick={handleClick}
                className="toggler bg-gray-100 hover:bg-gray-300 hover:cursor-pointer absolute bottom-0 p-1 rounded-full border border-black left-1/2 -translate-x-1/2 translate-y-1/2"
            >
                {icon}
            </div>
        </Panel>
    );
}

export default QuizForm;
