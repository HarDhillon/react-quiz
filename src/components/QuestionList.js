import Question from "./Question";
import CountdownTimer from "./CountdownTimer";
import shuffleArray from "../hooks/shuffleArray";
import { useFetchQuestionsQuery } from "../store";
import { useSelector } from "react-redux";
import { useMemo, useState, useEffect } from "react";

function QuestionList() {

    const [selectedChoice, setSelectedChoice] = useState(false)
    const [userCorrect, setUserCorrect] = useState(false)

    // Grab our Quiz Config State and fetch questions with our API
    const { amount, category, difficulty, type } = useSelector((state) => state.config);
    const { data, isFetching, error } = useFetchQuestionsQuery({ amount, category, difficulty, type });

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
    }, [questionDetails]);



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

                    {/* Using key to re-render component when question changes, this resets timer */}
                    <CountdownTimer key={questionDetails.question.question} countdownStart={10} />

                    <Question
                        shuffledChoices={questionDetails.shuffledChoices}
                        question={questionDetails.question}
                        selectedChoice={selectedChoice}
                        setSelectedChoice={setSelectedChoice}
                        userCorrect={userCorrect}
                        setUserCorrect={setUserCorrect}

                    ></Question>
                </div>
            )}
        </div>
    );
}

export default QuestionList;
