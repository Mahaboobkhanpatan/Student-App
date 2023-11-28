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

  // let path = window.location.pathname;  

  // useEffect(()=>{
  //   path = window.location.pathname;
  // })
   

  return (
    <>
      {/* {path !== "/signin" && path !== "/" && } */}
      <Router>
        <Routes>
          <Route path='/school' element={<DisplayShools />} />
          <Route path='/student' element={<DisplayStudents />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Signin />} />
          <Route path='/*' element={<Signin />} />
          <Route path='/Countdown' element={<Countdown />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
