import React from 'react'
import { useEffect, useState } from 'react'

export default function Countdown(props) {

    const initialMinutes = parseInt(localStorage.getItem("SESSION_MINUTES"));
    const initialSeconds = parseInt(localStorage.getItem("SESSION_SECONDS"));

    const [minutes, setMinutes] = useState(isNaN(initialMinutes) ? 0 : initialMinutes);
    const [seconds, setSeconds] = useState(isNaN(initialSeconds) ? 0 : initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                localStorage.setItem("SESSION_SECONDS", seconds - 1)
                setSeconds(seconds - 1)
            }
            else if (seconds == 0) {
                if (minutes == 0) {
                    clearInterval(myInterval);
                    localStorage.removeItem("SESSION_MINUTES");
                    localStorage.removeItem("SESSION_SECONDS");

                }
                else {
                    setMinutes(minutes - 1);
                    localStorage.setItem("SESSION_MINUTES", minutes - 1)
                    setSeconds(59);
                    localStorage.setItem("SESSION_SECONDS", 59)
                }
            }

        }, 1000);
        return () => {
            clearInterval(myInterval);
        }
    });

    return (
        <div >
            <div className='countDown'>
                {minutes === 0 && seconds === 0
                    ? null
                    : <h2>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
                }
            </div>
            <div className='timeout-popup'>
                 <h1> Timeout </h1>
            </div>
        </div>
    );

}