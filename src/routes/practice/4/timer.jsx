import { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    },[]);

    return(
        <div>
            <p>タイマー：{count}</p>
        </div>
    )
}

export default Timer;