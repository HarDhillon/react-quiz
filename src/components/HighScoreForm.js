import { useState } from 'react'
import Button from './Button'
import { usePostHighScoreMutation } from '../store'
import { useDispatch } from "react-redux";

function HighScoreForm() {

    const dispatch = useDispatch()

    const [name, setName] = useState('')

    const handleChange = (e) => {
        const value = e.target.value.toUpperCase()
        const initials = value.replace(/[^A-Z]/g, '').split('').join('.');
        if (initials.replace(/[^A-Z]/g, '').length === 4) {
            return
        }
        setName(initials)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h3>Submit your high score</h3>
            <form onSubmit={handleSubmit}>
                <label>Initials</label>
                <input placeholder='H.S.D' type='text' value={name} onChange={handleChange} className="p-1 border-2 border-gray-500 focus:outline-none focus:border-black" />

                <Button className={"mt-3"} success >Submit High Score</Button>
            </form>

        </div >
    )

}

export default HighScoreForm