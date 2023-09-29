import { useState } from "react";

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
    }, [countdown])

    return (
        <div>
            <h1>Countdown Timer: {countdown}</h1>
        </div>
    )
}

export default CountdownTimer