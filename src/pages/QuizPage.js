import { useEffect } from "react"
import { useFetchQuestionsQuery } from "../store";
import SelectList from "../components/SelectList";
import Question from "../components/Question"

function QuizPage() {
    
    // const { data, error, isFetching } = useFetchQuestionsQuery(options)

    const questionsMax = 50

    const questionsCategory = [
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

    const questionsDifficulty = [
        { value: "any", label: "Any" }, { value: "easy", label: "Easy" }, { value: "medium", label: "Medium" }, { value: "hard", label: "Hard" }
    ]

    const questionsType = [
        {value: "any" , label: "Any" }, {value: "multiple" , label: "Multiple Choice" }, {value: "boolean" , label: "True / False" }
    ]



    return (
        <div>
            <SelectList options={questionsCategory} ></SelectList>
            <SelectList options={questionsDifficulty}></SelectList>
            <SelectList options={questionsType}></SelectList>
        </div>
    )
}

export default QuizPage