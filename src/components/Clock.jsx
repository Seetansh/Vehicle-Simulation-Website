import React, { useState, useEffect } from "react";


export default function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div className='clock' style={{ textAlign: 'center' }}>
            <span>{date.toLocaleTimeString()}</span>
        </div>
    ); 0
}