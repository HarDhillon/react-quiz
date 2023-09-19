import { useEffect, useState } from "react"
import { useFetchQuestionsQuery } from "../store";
import SelectList from "../components/SelectList";
import Question from "../components/Question"
import Button from "../components/Button";

function QuizPage() {

    const [numberOfQuestions, setNumberOfQuestions] = useState(1)
    const [error, setError] = useState("hi")

    const handleOnChange = event => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setNumberOfQuestions(event.target.value)
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (event.target.number.value > 50 || event.target.number.value <= 0) {
            setError("Please choose a number between 1 and 50")
        }

        console.log(event.target.number.value)
        // const { data, error, isFetching } = useFetchQuestionsQuery(options)
    }

    const questionsCategory = {
        label: "Category",
        values: [
            { value: 'any', label: 'Any Category' },
            { value: '9', label: 'General Knowledge' },
            { value: '10', label: 'Entertainment: Books' },
            { value: '11', label: 'Entertainment: Film' },
            { value: '12', label: 'Entertainment: Music' },
            { value: '13', label: 'Entertainment: Musicals &amp; Theatres' },
            { value: '14', label: 'Entertainment: Television' },
            { value: '15', label: 'Entertainment: Video Games' },
            { value: '16', label: 'Entertainment: Board Games' },
            { value: '17', label: 'Science &amp; Nature' },
            { value: '18', label: 'Science: Computers' },
            { value: '19', label: 'Science: Mathematics' },
            { value: '20', label: 'Mythology' },
            { value: '21', label: 'Sports' },
            { value: '22', label: 'Geography' },
            { value: '23', label: 'History' },
            { value: '24', label: 'Politics' },
            { value: '25', label: 'Art' },
            { value: '26', label: 'Celebrities' },
            { value: '27', label: 'Animals' },
            { value: '28', label: 'Vehicles' },
            { value: '29', label: 'Entertainment: Comics' },
            { value: '30', label: 'Science: Gadgets' },
            { value: '31', label: 'Entertainment: Japanese Anime &amp; Manga' },
            { value: '32', label: 'Entertainment: Cartoon &amp; Animations' }
        ]
    }

    const questionsDifficulty = {
        label: "Difficulty",
        values: [
            { value: "any", label: "Any" }, { value: "easy", label: "Easy" }, { value: "medium", label: "Medium" }, { value: "hard", label: "Hard" }
        ]
    }

    const questionsType = {
        label: "Type of Question",
        values: [
            { value: "any", label: "Any" }, { value: "multiple", label: "Multiple Choice" }, { value: "boolean", label: "True / False" }
        ]
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Number of Questions:</label>
                {error}
                <input name="number" onChange={handleOnChange} min={1} max={50} value={numberOfQuestions || ""}></input>
                <SelectList config={questionsCategory} ></SelectList>
                <SelectList config={questionsDifficulty}></SelectList>
                <SelectList config={questionsType}></SelectList>

                <Button>Generate Questions</Button>
            </form>
        </div>
    )
}

export default QuizPage