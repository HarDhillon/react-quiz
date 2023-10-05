import { useState } from 'react'

function HighScoreForm() {

    const [name, setName] = useState('')

    const handleChange = (e) => {
        const value = e.target.value.toUpperCase()
        const initials = value.replace(/[^A-Z]/g, '').split('').join('.');
        if (initials.replace(/[^A-Z]/g, '').length === 4) {
            return
        }
        setName(initials)
    }

    return (
        <div>
            <h3>Submit your high score</h3>
            <form>
                <label>Initials</label>
                <input placeholder='H.S.D' type='text' value={name} onChange={handleChange} className="p-1 border-2 border-gray-500 focus:outline-none focus:border-black" />
            </form>
        </div>
    )

}

export default HighScoreForm