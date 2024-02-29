import { useState } from 'react';
export function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    const [date, setDate] = useState(new Date().toLocaleDateString());
    setInterval(() => {
        setDate(new Date().toLocaleDateString());
    }, 1000);

    return (
        <div className='clock'>
            <h3 className='clockTime'>
                {time}
            </h3>
            <h4 className='clockDate'>
                {date}
            </h4>
        </div>
    )
}