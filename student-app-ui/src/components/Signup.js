import React, { useState } from "react";
import '../css/Signup.css';
// import '../css/Signin.css';

// import { Link } from 'react-router-dom';

export default function Singup() {
    const [singUp, setSingUp] = useState({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined
    })
    function handleChange(event) {
        const id = event.target.id;
        const value = event.target.value;
        setSingUp({ ...singUp, [id]: value })

    }
    function handleSingUp() {
        let isSingUpSuccess = true;
        if (!singUp.firstName) {
            isSingUpSuccess = false
        } else {
            isSingUpSuccess = true;
        }
        if (!singUp.lastName) {
            isSingUpSuccess = false
        } else {
            isSingUpSuccess = true;
        }
        if (!singUp.email) {
            isSingUpSuccess = false
        } else {
            isSingUpSuccess = true;
        }
        if (singUp.password != singUp.confirmPassword) {
            isSingUpSuccess = false
        } else {
            isSingUpSuccess = true;
        }
        if (!singUp.password) {
            isSingUpSuccess = false
        } else if (singUp.password.length > 1 && singUp.password == singUp.confirmPassword) {
            isSingUpSuccess = true;
        }
        if (!singUp.confirmPassword) {
            isSingUpSuccess = false
        } else if (singUp.confirmPassword > 1 && singUp.confirmPassword == singUp.password) {
            isSingUpSuccess = true;
        }
        setSingUp({ ...singUp, isSingUpSuccess: isSingUpSuccess })

    }

    return (
        <div className="container">
            {/* <div><img src="banner.jpg" alt="suhail" id="imgage"></img></div> */}
            <div style={{width: "30%"}}>
                <div className="sub-container">
                    {/* <div><img src="" alt="suhail" id="img"></img></div> */}
                    <div><h2 className="heading">Student Manager</h2></div>
                    <div><hr></hr></div>
                    <form autoComplete="of">
                        <div className="form">
                            <div className="padds">
                                <div>
                                    <input type="name" id="firstName" className="singup" placeholder="First Name" value={singUp.firstName} onChange={handleChange}></input>
                                    {singUp.firstName === "" ? <p className="error-msg">firstname field mandatory</p> : ""}
                                </div>
                                <div>
                                    <input type="name" id="lastName" className="singup" placeholder="Last Name" value={singUp.lastName} onChange={handleChange}></input>
                                </div>
                                <div>
                                    <input type="email" id="email" className="singup" placeholder="Email" value={singUp.email} onChange={handleChange}></input>
                                    {singUp.email === "" ? <p className="error-msg">Email field mandatory</p> : ""}

                                </div>
                                <div>
                                    <input type="password" id="password" className="singup" placeholder="Password" value={singUp.password} onChange={handleChange}></input>
                                    {singUp.password === "" ? <p className="error-msg">password field mandatory</p> : ""}
                                    {singUp.password != singUp.confirmPassword ? <p className="error-msg">password  not match</p> : ""}
                                </div>
                                <div>
                                    <input type="password" id="confirmPassword" className="singup" placeholder="Confirm Password" value={singUp.confirmPassword} onChange={handleChange}></input>
                                    {singUp.confirmPassword === "" ? <p className="error-msg">confirmPassword field mandatory</p> : ""}
                                    {singUp.confirmPassword != singUp.password ? <span className="error-msg">password not match</span> : ""}
                                </div></div>

                            <div className="checkbox">
                                <input type="checkbox" id="check" ></input>
                                <div id="head">
                                    <h5 > I accept terms & condition</h5>
                                </div>
                            </div>
                            <button id="button1" onClick={handleSingUp}>Sing Up</button>
                            <div className="li">
                                <h5 id="aaa">Already have an account ?</h5>
                                <li id="list">
                                    {/* <Link to="/SingIn">SingIn</Link> */}
                                </li> </div></div>
                    </form>
                </div>
            </div>
            <div style={{width: "70%"}}>
                <img src="banner.jpg" alt="suhail" id="imgage"></img>
            </div>
        </div>
    )
}