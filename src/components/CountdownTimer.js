import { useState, useEffect } from "react";

function CountdownTimer({ countdownStart }) {
    const [countdown, setCountDown] = useState(countdownStart)

    useState(() => {

        let timer

        timer = setInterval(() => {
            setCountDown((prevCountDown) => {
                if (prevCountDown === 0) {
                    clearInterval(timer)
                    return 0
                }
                return prevCountDown - 1
            })
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [countdown, countdownStart])

    useEffect(() => {
        // Reset the countdown when the countdownStart prop changes
        setCountDown(countdownStart);
    }, [countdownStart]);

    return (
        <div>
            <h1>Countdown Timer: {countdown}</h1>
        </div>
    )
}

export default CountdownTimer