function Question({ question }) {

    // Shuffle array method
    const shuffleArray = (array) => {
        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }

    // Create an array of choices and shuffle them
    const choices = [
        question.correct_answer,
        ...question.incorrect_answers
    ];
    const shuffledChoices = shuffleArray(choices)

    console.log(shuffledChoices)

    const renderedChoices = shuffledChoices.map((choice, index) => {
        return <div key={index}>{choice}</div>
    })

    return (
        <div>
            <div className="flex my-5" >
                <h1 className="mr-2">Category: {question.category}</h1>
                <h3>Difficulty {question.difficulty}</h3>
            </div>
            <h5>{question.question}</h5>
            <div>{renderedChoices} </div>
        </div>
    )


}

export default Question