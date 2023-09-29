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
        <div>
            <h1>Countdown Timer: {timeLeft}</h1>
        </div>
    );
}

export default QuestionTimer;
