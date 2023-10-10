function HighScoreTable({ users }) {

    const sortedUsers = [...users].sort((a, b) => b.score - a.score)

    const renderedScores = sortedUsers.map((user, index) => {
        return <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.score}</td>
        </tr>
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Initials</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>{renderedScores}</tbody>
        </table>
    )

}

export default HighScoreTable