import Question from "./Question";
import shuffleArray from "../hooks/shuffleArray";
import { useFetchQuestionsQuery } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState, useEffect } from "react";
import { changeQuestionTimeLeft, changeUserScore, changeQuestionsAnswered } from "../store";

function QuestionList() {

    const [selectedChoice, setSelectedChoice] = useState(false)
    const [userCorrect, setUserCorrect] = useState(false)
    const timeLeftStore = useSelector((state) => state.quiz.questionTimeLeft);

    const dispatch = useDispatch()

    // If timeLeft reaches 0 and no choice is selected, proceed to the next question
    useEffect(() => {
        if (timeLeftStore === 0 && !selectedChoice) {
            setUserCorrect(false);   // Reset userCorrect
            setSelectedChoice(true); // Reset selectedChoice

            setTimeout(() => {
                dispatch(changeQuestionsAnswered());
                dispatch(changeQuestionTimeLeft(15));
            }, 2000);
        }
    }, [timeLeftStore, selectedChoice]);

    // Grab our Quiz Config State and fetch questions with our API
    const { amount, category, difficulty, type } = useSelector((state) => state.config);
    const { data, isFetching, error } = useFetchQuestionsQuery({ amount, category, difficulty, type });

    const handleChoiceClick = (choice) => {
        if (selectedChoice === false) {
            setSelectedChoice(true);

            if (choice === questionDetails.question.correct_answer) {
                setUserCorrect(true);
                dispatch(changeUserScore());
            }

            // 2 seconds after user clicked, reset choices
            setTimeout(() => {
                dispatch(changeQuestionsAnswered());
                setSelectedChoice(false); // Reset selectedChoice
                setUserCorrect(false);   // Reset userCorrect
                dispatch(changeQuestionTimeLeft(15));
            }, 2000);
        }
    };

    // Calculate shuffledChoices for each question using useMemo to ensure choices are not shuffled when component re-renders
    const questionsWithShuffledChoices = useMemo(() => {
        if (error) {
            console.log(error);
            return [];
        } else if (isFetching) {
            return [];
        } else {
            // For each object shuffle the choices and return and object with the question and shuffled choices
            return data.results.map((question) => {
                const choices = [question.correct_answer, ...question.incorrect_answers];
                const shuffledChoices = shuffleArray(choices);

                return {
                    question,
                    shuffledChoices,
                };
            });
        }
    }, [data, error, isFetching]);

    const questionsAnswered = useSelector((state) => {
        return state.quiz.questionsAnswered
    })
    // We can make use of questionsAnswered to pass Question a different item from the shuffled choices array
    // We don't need to account for going outside the range as in QuizPage once the quiz is complete we will not render this component anymore
    const questionDetails = questionsWithShuffledChoices[questionsAnswered]
    // When questionDetails is updated to the next question we want to reset our states back to their original


    useEffect(() => {
        setSelectedChoice(false);
        setUserCorrect(false)
        dispatch(changeQuestionTimeLeft(15));
    }, [questionDetails, dispatch]);



    return (
        <div>
            {/* Display error message if there is an error */}
            {error && <div>Error loading data</div>}
            {/* Display "Loading..." text while isFetching is true */}
            {isFetching && <div>Loading...</div>}
            {/* Render questions if there are no errors and not loading */}
            {!error && !isFetching && (
                <div>
                    Question {questionsAnswered + 1} / {amount}



                    <Question
                        shuffledChoices={questionDetails.shuffledChoices}
                        question={questionDetails.question}
                        selectedChoice={selectedChoice}
                        userCorrect={userCorrect}
                        handleChoiceClick={handleChoiceClick}

                    ></Question>
                </div>
            )}
        </div>
    );
}

export default QuestionList;
