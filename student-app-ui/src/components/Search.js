import axios from "axios";
import React, { useState } from "react";
import DisplayStudent from "./DisplayStudentTable";
import '../css/search.css';
export default function SearchFile() {
    const [student, setSearch] = useState({
        filter: undefined
    })
    const [set,setstate]=useState([])
    function handleChange(event) {
        const id = event.target.id;
        const value = event.target.value;
        setSearch({ ...student, [id]: value })
    }
    function search() {
        let isSearcgOk = true;
        if(!student.filter){
            isSearcgOk=false;
        }else{
            isSearcgOk=true;
        }

        axios.put('http://localhost:5000/student/search', { filter: student.filter }).then(response => {
            if(response.data){
                  setstate(response.data)
            }
            
            console.log(student)
        }).catch(error => {
            alert("Error-handler")
        })
    }
    return (
        <div>
        <div className="search-container">
            <div className="search-sub-container">
                <form onSubmit={(event) => event.preventDefault()} >
                    <div className="div"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" onClick={search} fill="currentColor" id="check3" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    < input type="text" id="filter" placeholder="Search Student" value={student.filter}  onChange={handleChange} ></input></div>
                </form>
              
                <input type="checkbox" id="check"/>
                       <label for="check">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="scg" class="bi bi-body-text" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
</svg></label>
                <div id="ccc">
                <form  classname="for" onSubmit={(event)=>event.preventDefault()}>
               
                <div className="vvv"> 
               <div className="ff"> form:        </div>
                 <div>                            
                 <input type="text" id="form"></input></div>  
                </div>
                <div className="vvv"> 
                <div className="ff">  firstName: </div>
                    <div>
                    <input type="text" id="firstName"></input></div>
               </div>
                <div className="vvv">
                <div className="ff"> lastName:</div>
                    <div>
                    <input type="text" id="last"></input></div>
               </div>
                <div className="vvv">
                 <div className="ff">CONTACTNUMBER:  </div> 
                  <div>
                    <input type="number" id="contact"></input></div>
               </div>
               <button id="btn1">create Filter</button>
               <button id="btn2">Search</button>
                </form>
                </div>
                </div>
              
        </div>
        {student !== null ? <DisplayStudent data={set} /> : ""}
        </div>
    )
}