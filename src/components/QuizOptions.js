import { useDispatch, useSelector } from "react-redux"
import { changeAmount, changeCategory, changeDifficulty, changeQuestionsAnswered, changeSubmitted, changeType, changeUserScore } from '../store'
import Button from "./Button"
import Panel from "./Panel"


function SelectList() {

    const optionsCategory = [
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


    const optionsDifficulty = [
        { value: "any", label: "Any" }, { value: "easy", label: "Easy" }, { value: "medium", label: "Medium" }, { value: "hard", label: "Hard" }
    ]


    const optionsType = [
        { value: "any", label: "Any" }, { value: "multiple", label: "Multiple Choice" }, { value: "boolean", label: "True / False" }
    ]


    const dispatch = useDispatch()

    const amount = useSelector((state) => {
        return state.config.amount
    })

    const resetQuiz = () => {
        dispatch(changeSubmitted(false))
        dispatch(changeQuestionsAnswered(0))
        dispatch(changeUserScore(0))
    }

    const handleNumberChange = (e) => {
        // const re = /^[0-9\b]+$/;
        const number = parseInt(e.target.value)

        if (isNaN(number)) {
            dispatch(changeAmount(1))
            return
        }
        if (number > 50 || number <= 0) {
            return
        }

        dispatch(changeAmount(number))
        resetQuiz()
    }
    const handleCategoryClick = (e) => {
        dispatch(changeCategory(e.target.value))
        resetQuiz()
    }

    const handleDifficultyClick = (e) => {
        dispatch(changeDifficulty(e.target.value))
        resetQuiz()
    }

    const handleTypeclick = (e) => {
        dispatch(changeType(e.target.value))
        resetQuiz()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeSubmitted(true))
    }


    const categoryItems = optionsCategory.map((item) => {
        return <option onClick={handleCategoryClick} key={item.value} value={item.value}>{item.label}</option>
    })

    const difficultyItems = optionsDifficulty.map((item) => {
        return <option onClick={handleDifficultyClick} key={item.value} value={item.value}>{item.label}</option>
    })

    const typeItems = optionsType.map((item) => {
        return <option onClick={handleTypeclick} key={item.value} value={item.value}>{item.label}</option>
    })


    return (
        <Panel className={"p-5"}>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-between mb-4">
                    <div className="form-field">
                        <label>Number of Questions (1 - 50)</label>
                        <input className="p-1 border-2 border-gray-500 focus:outline-none focus:border-black" value={amount || 1} onChange={handleNumberChange}></input>
                    </div>

                    <div className="form-field">
                        <label>Category</label>
                        <select className="p-3">{categoryItems}</select>
                    </div>

                    <div className="form-field">
                        <label>Difficulty</label>
                        <select className="p-3">{difficultyItems}</select>
                    </div>

                    <div className="form-field">
                        <label>Type</label>
                        <select className="p-3">{typeItems}</select>
                    </div>

                </div>



                <Button className={"hover:bg-gray-200 transition-colors"}>Generate Questions</Button>
            </form>

        </Panel>

    )
}

export default SelectList