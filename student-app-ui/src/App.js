//Routers  App.js

import './App.css';
import React from "react"
import DisplayShools from './components/DisplaySchools';
import DisplayStudents from './components/DisplayStudents';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';


function App() {

  return (
    <>
       <Router> 
         <Routes>
          <Route path='/school' element={<DisplayShools />} />
          <Route path='/student' element={<DisplayStudents />} />
           <Route path='/' element={<DisplayShools />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;
