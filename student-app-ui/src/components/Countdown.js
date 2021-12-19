import React from 'react'
import { useEffect, useState } from 'react'

export default function Countdown(props) {
   

    return (
        <div className='countDown' >
            {props.minutes === 0 && props.seconds === 0
                ? null
                : <h2>{props.minutes}:{props.seconds < 10 ? `0${props.seconds}` : props.seconds}</h2>
            }
        </div>
    );

}