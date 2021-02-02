import React, { useState, useEffect } from "react";

const Counter = ({ startNumber, endNumber, duration }) => {

    const [count, setCount] = useState(0)
    const incrementTime = (duration / (endNumber - startNumber))

    useEffect(() => {
        let counter = startNumber
        if (startNumber === endNumber) return;

        let timer = setInterval(() => {
            counter ++
            setCount(counter)
            if (counter === endNumber) clearInterval(timer)
        }, incrementTime)
    }, [endNumber])

    return <h1 style={{fontSize: '5em'}}>{count}</h1>
}

export default Counter;