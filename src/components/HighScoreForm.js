import { useState } from 'react'
import Button from './Button'
import { usePostHighScoreMutation } from '../store'
import { useSelector } from "react-redux"

function HighScoreForm() {

    const [postScore, results] = usePostHighScoreMutation()

    const [name, setName] = useState('')

    const userScore = useSelector((state) => {
        return state.quiz.userScore
    })
    const { difficulty } = useSelector((state) => state.config);

    const handleChange = (e) => {
        const value = e.target.value.toUpperCase()
        const initials = value.replace(/[^A-Z]/g, '').split('').join('.');
        if (initials.replace(/[^A-Z]/g, '').length === 4) {
            return
        }
        setName(initials)
    }

    // TODO fix posting to DB - may need to change structure of DB
    const handleSubmit = (e) => {
        e.preventDefault()
        postScore({
            difficulty: difficulty,
            initials: name,
            score: userScore
        })

    }

    return (
        <div>
            <h3>Submit your high score</h3>
            <form onSubmit={handleSubmit}>
                <label>Initials</label>
                <input placeholder='H.S.D' type='text' value={name} onChange={handleChange} className="p-1 border-2 border-gray-500 focus:outline-none focus:border-black" />

                <Button loading={results.isLoading} className={"mt-3"} success >Submit High Score</Button>
            </form>

        </div >
    )

}

export default HighScoreForm