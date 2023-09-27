import { useFetchQuestionsQuery } from "../store";
import { useSelector } from "react-redux";
import Question from "./Question";
import { useMemo, useState, useEffect } from "react";

function QuestionList() {

    const [selectedChoice, setSelectedChoice] = useState(false)

    // Shuffle array method
    const shuffleArray = (array) => {
        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    };

    const questionsAnswered = useSelector((state) => {
        return state.quiz.questionsAnswered
    })

    // Grab our Quiz Config State
    const amount = useSelector((state) => {
        return state.config.amount;
    });
    const category = useSelector((state) => {
        return state.config.category;
    });
    const difficulty = useSelector((state) => {
        return state.config.difficulty;
    });
    const type = useSelector((state) => {
        return state.config.type;
    });

    // Get our form options state and fetch from the API
    const options = { category, difficulty, type, amount };
    const { data, isFetching, error } = useFetchQuestionsQuery(options);

    // Calculate shuffledChoices for each question using useMemo to ensure choices are not shuffled when component re-renders
    const questionsWithShuffledChoices = useMemo(() => {
        if (error) {
            console.log(error);
            return [];
        } else if (isFetching) {
            return [];
        } else {
            // for each object shuffle the choices and return and object with the question and shuffled choices
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

    const questionDetails = questionsWithShuffledChoices[questionsAnswered]

    // When questionDetails is updated we want to reset setSelectedChoice back to false
    useEffect(() => {
        setSelectedChoice(false);
    }, [questionDetails]);

    return (
        <div>
            {/* Display error message if there is an error */}
            {error && <div>Error loading data</div>}
            {/* Display "Loading..." text while isFetching is true */}
            {isFetching && <div>Loading...</div>}
            {/* Render questions if there are no errors and not loading */}
            {!error && !isFetching && (
                <Question
                    shuffledChoices={questionDetails.shuffledChoices}
                    question={questionDetails.question}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                ></Question>
            )}
        </div>
    );
}

export default QuestionList;
