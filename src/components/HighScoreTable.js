function HighScoreTable({ users }) {

    const sortedUsers = [...users].sort((a, b) => b.score - a.score)

    const renderedScores = sortedUsers.map((user, index) => {
        return <tr key={user.id} className="odd:bg-gray-100 even:bg-gray-300">
            <td className="text-center py-3">{index + 1}</td>
            <td className="text-center py-3">{user.name}</td>
            <td className="text-center py-3">{user.score}</td>
        </tr>
    })

    return (
        <table className="min-w-[500px] border-b-2 border-[#009879] shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            <thead className="bg-[#009879]">
                <tr className="text-white p-5">
                    <th className="p-3">Position</th>
                    <th className="p-3">Initials</th>
                    <th className="p-3">Score</th>
                </tr>
            </thead>
            <tbody>{renderedScores}</tbody>
        </table>
    )

}

export default HighScoreTable