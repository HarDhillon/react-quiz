import { useEffect } from "react"
import { useFetchQuestionsQuery } from "../store";
import SelectList from "../components/SelectList";
import Question from "../components/Question"
import getOptions from "../hooks/getOptions";

function QuizPage() {
    
    // const { data, error, isFetching } = useFetchQuestionsQuery(options)

    useEffect(() => {
        getOptions()
    }, [])

    return (
        <div>
            <SelectList options={options}></SelectList>
        </div>
    )
}

export default QuizPage