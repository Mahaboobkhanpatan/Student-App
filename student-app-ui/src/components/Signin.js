import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/Signin.css';

export default function Singin(props) {
    
    let navigate = useNavigate();

    const [set, setField] = useState({
        email: undefined,
        password: null
    })

    function handleChange(event) {
        const id = event.target.id;
        const value = event.target.value;
        setField({ ...set, [id]: value })
    }

    function handleSing() {
        let isLoginSuccess = true;
        if (!set.email) {
            isLoginSuccess = false;
        } else {
            isLoginSuccess = true;
        }
        if (!set.password) {
            isLoginSuccess = false;
        } else {
            isLoginSuccess = true;
        }

        if (!isLoginSuccess) {
            alert("failed")
            return;
        }

        axios.post("http://localhost:5000/signin", { email: set.email, password: set.password })
        .then(result => {
            if (result.data.status) {
                localStorage.setItem("SIGNIN", true);                
                navigate("/student")
                setField({ ...set, isLoginSuccess: isLoginSuccess })
            } else {
                alert("failed")
            }

        }).catch(error => {
            alert("Error handled")
        })
    }

    return (
        <div className="variant">
            <div className="sub-variant">

                <div><h2 className="heading">Student Login</h2></div>
                <div><hr></hr></div>
                <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
                    <div className="form1">
                        <div>
                            <input type="email" id="email" className="input" placeholder="Email" value={set.email} onChange={handleChange}></input>
                            <div> {set.email === "" ? < span className="error-msg" >Email field mandatory</span> : ""}</div>
                        </div>
                        <div>
                            <input type="password" id="password" className="input" placeholder="Password" value={set.password} onChange={handleChange}></input>
                            {set.password === "" ? < span className="error-msg" >Password field mandatory</span> : ""}
                        </div></div>
                    <div className="checked">
                        <input type="checkbox" id="check1" ></input>
                        <div id="ddd">
                            <h5 > Remember Me </h5>
                        </div>
                    </div>
                    <button className="btn" onClick={handleSing}>Sing In</button>
                    <div className="account">
                        <h5 id="bbb">No account yet?</h5>
                        <li id="lii">
                            <Link to="/signup">Signup</Link>
                        </li>
                    </div>
                </form>
            </div>
        </div>
    )
}