import React, { useState } from "react";
// import { Link } from "react-router-dom";
import '../css/Signin.css';

export default function Singin() {
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
        setField({ ...set, isLoginSuccess: isLoginSuccess })
    }

    return (
        <div className="variant">
            <div className="sub-variant">

                <div><h2 className="heading">Student Login</h2></div>
                <div><hr></hr></div>
                <form autoComplete="off">
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
                            <h5 >Remember Me</h5>
                        </div>
                    </div>
                    <button className="btn" onClick={handleSing}>Sing In</button>
                    <div className="account">
                        <h5 id="bbb">No account yet?</h5>
                        <li id="lii">
                            {/* <Link to="/SingUp">SingUp</Link> */}
                        </li>
                    </div>
                </form>
            </div>
        </div>
    )
}