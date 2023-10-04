import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuestionTimeLeft } from "../store";

function QuestionTimer() {
    const dispatch = useDispatch();

    // Initialize the timeLeft state with the value from the Redux store
    const initialTimeLeft = useSelector((state) => state.quiz.questionTimeLeft);
    const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

    useEffect(() => {
        setTimeLeft(initialTimeLeft); // Update the local state with the Redux value if it changes
    }, [initialTimeLeft]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        // When timeLeft changes we dispatch
        dispatch(changeQuestionTimeLeft(timeLeft));
    }, [timeLeft, dispatch]);

    return (
        <div className="flex relative">
            <h3 className="w-[20px]">{timeLeft}</h3>
            <svg className="timer w-[40px] h-[40px] absolute left-[-10px] top-[-8px]">
                <circle strokeWidth={"2px"} stroke="black" fill="transparent" r="18" cx="20" cy="20"></circle>
            </svg>
        </div >
    );
}

export default QuestionTimer;
