//Routers  App.js

import './App.css';
import { useEffect, useState } from 'react';
import React from "react"
import Countdown from './components/Countdown.js';
import DisplayShools from './components/DisplaySchools';
import DisplayStudents from './components/DisplayStudents';
import Signin from './components/Signin';
import Signup from './components/Signup';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';


function App() {
  const [minutes, setMinutes] = useState(localStorage.getItem("SESSION_MINUTES"));
  const [seconds, setSeconds] = useState(localStorage.getItem("SESSION_SECONDS"));
  

  useEffect(() => {
      let myInterval = setInterval(() => {
          if (seconds > 0) {
              localStorage.setItemsetSeconds(seconds - 1)
          }
          else if (seconds == 0) {
              if (minutes == 0) {
                  clearInterval(myInterval);

              }
              else {
                  setMinutes(minutes - 1);
                  setSeconds(59);
              }
          }

      }, 1000);
      return () => {
          clearInterval(myInterval);
      }
  });

  return (
    <>
    <Countdown minutes={minutes} seconds={seconds}/>
       <Router> 
         <Routes>
          <Route path='/school' element={<DisplayShools />} /> 
           <Route path='/student' element={<DisplayStudents />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
           <Route path='/' element={<Signin />} />
           <Route path='/*' element={<Signin />} /> 
         </Routes>
      </Router> 
    </>
  );
}

export default App;
