import { useDispatch, useSelector } from "react-redux"
import { changeAmount, changeCategory, changeDifficulty, changeSubmitted, changeType } from '../store'
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
    const category = useSelector((state) => {
        return state.config.category
    })
    const difficulty = useSelector((state) => {
        return state.config.difficulty
    })

    const type = useSelector((state) => {
        return state.config.type
    })

    // console.log(category)

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
    }
    const handleCategoryClick = (e) => {
        dispatch(changeCategory(e.target.value))
    }

    const handleDifficultyClick = (e) => {
        dispatch(changeDifficulty(e.target.value))
    }

    const handleTypeclick = (e) => {
        dispatch(changeType(e.target.value))
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
        <Panel>
            <form onSubmit={handleSubmit}>
                <label>Number of Questions (1 - 50)</label>
                <input value={amount || 1} onChange={handleNumberChange}></input>

                <label>Category</label>
                <select>{categoryItems}</select>

                <label>Difficulty</label>
                <select>{difficultyItems}</select>

                <label>Type</label>
                <select>{typeItems}</select>

                <Button>Generate Questions</Button>
            </form>

        </Panel>

    )
}

export default SelectList