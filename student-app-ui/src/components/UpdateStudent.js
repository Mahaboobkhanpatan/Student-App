import React, { useState } from 'react'
import axios from 'axios';

export default function UpdateStudent(props) {
    console.log(props);
    const [student, setStudent] = useState({
        firstName: props.data.firstName,
        lastName: props.data.lastName,
        gender: props.data.gender,
        dob: props.data.dob,
        contactNumber: props.data.contactNumber,
        houseNo: props.data.address.houseNo,
        street: props.data.address.street,
        town: props.data.address.town,
        district: props.data.address.district,
        state: props.data.address.state,
        country: props.data.address.country,
        isRegistrationOk: false
    })
    console.log(student);

    function handleChange(event) {
        const name = event.target.id;
        console.log(name)
        const value = event.target.value;
        console.log(value)
        setStudent({ ...student, [name]: value })

    }

    function handleUpadateStudent() {
        let isRegistrationOk = true;

        if (!student.firstName) {
            isRegistrationOk = false;
        } else {
            isRegistrationOk = true;
        } if (!student.gender) {
            isRegistrationOk = false;
        } else {
            isRegistrationOk = true;
        }
        if (!student.dob) {
            isRegistrationOk = false;
        } else {
            isRegistrationOk = true;
        }
        if (!student.contactNumber) {
            isRegistrationOk = false;
        } else {
            isRegistrationOk = true;
        }
        if (!student.houseNo) {
            isRegistrationOk = false;
        } else {
            isRegistrationOk = true;
        }
        if (!student.town) {
            isRegistrationOk = false;
        } else {
            isRegistrationOk = true;
        }
        if (!student.district) {
            isRegistrationOk = false;
        } else {
            isRegistrationOk = true;
        }
        if (!student.state) {
            isRegistrationOk = false;
        } else {
            isRegistrationOk = true;
        }
        if (!student.country) {
            isRegistrationOk = false;
        } else {
            isRegistrationOk = true;
        }


        axios.put("http://localhost:5000/student/update", {
            'id': props.data.id,
            "firstName": student.firstName,
            "lastName": student.lastName,
            "gender":student.gender,
            "dob": student.dob,
            "contactNumber": student.contactNumber,
            "address": {
                "houseNo": student.houseNo,
                "street": student.street,
                "town": student.town,
                "district": student.district,
                "state": student.state,
                "country": student.country
            }
        }).then(result => {
            setStudent({ ...student, isRegistrationOk: isRegistrationOk });
            props.students()
            props.clear(null)
        }).catch(error => {
            // alert("Error handled")
            console.log(error)
        })

    }

    function handleReset() {
        setStudent({
            firstName: props.data.firstName,
            lastName: props.data.lastName,
            gender: props.data.gender,
            dob: props.data.dob,
            contactNumber: props.data.contactNumber,
            houseNo: props.data.address.houseNo,
            street: props.data.address.street,
            town: props.data.address.town,
            district: props.data.address.district,
            state: props.data.address.state,
            country: props.data.address.country,
            isRegistrationOk: false


        })
    }

    return (
        <div className="container">
            <div className="sub-container">
                <div className="registration_form">
                    <h1 className="header">Update Student</h1>
                    <h2 className="sub-header">Student Info</h2>
                    <form autocomplete="off" onSubmit={(event) => event.preventDefault()}>
                        <div className="field-group">
                            <div className="field">
                                <div><input type="text" className="information" id="name" style={student.firstName === "" ? { borderColor: "red" } : {}} placeholder="Enter name*" onChange={handleChange} value={student.firstName} ></input></div>
                                <div> {student.firstName === "" ? <p className="error_msg">name is a mandatory field</p> : ""}</div>
                            </div>
                            <div className="field">
                                <input type="lastName" className="information" id="lastName" onChange={handleChange} value={student.lastName} placeholder="Enter lastname"></input>
                            </div>
                            <div className="field">
                                <select className="information" id="gender" onChange={handleChange}>
                                    <option value="m"  selected={student.gender==='m'} style={student.gender === "" ? { borderColor: "red" } : {}} >m</option>
                                    <option value="f"  selected={student.gender==='m'} style={student.gender === "" ? { borderColor: "red" } : {}} >f</option>
                                </select>
                            </div>

                            <div className="field">
                                <input type="date" className="information" id="DoB" style={student.dob == "" ? { borderColor: "red" } : {}} onChange={handleChange} value={student.dob} ></input>
                                <div>{student.dob === "" ? <p className="error_msg">select DoB is mandatory field</p> : ""}</div></div>
                            <div className="field">
                                <input type="number" className="information" id="contactNumber" style={student.contactNumber === "" ? { borderColor: "red" } : {}} onChange={handleChange} value={student.contactNumber} placeholder="Enter number*" ></input>
                                <div>{student.contactNumber === "" ? <span className="error_msg" id="contact">contactNumber is a mandatory field</span> : ""}</div>
                            </div>
                        </div>

                        <h2 className="sub-header">Address Info</h2>
                        <div className="field-group">
                            <div className="field">
                                <input type="house" className="information" style={student.houseNo === "" ? { borderColor: "red" } : {}} placeholder="Housenoex:1/117*" id="houseno" onChange={handleChange} value={student.houseNo}></input>
                                <div>{student.houseNo === "" ? <span className="error_msg" id="house" >houseNo is a mandatory field</span> : ""} </div>
                            </div>
                            <div className="field">
                                <input type="Street" className="information" placeholder="Enter Your Street Name" id="street" onChange={handleChange} value={student.street}></input>
                            </div>
                            <div className="field">
                                <input type="town" className="information" style={student.town === "" ? { borderColor: "red" } : {}} placeholder="Enter Your Town*" id="town" onChange={handleChange} value={student.town}></input>
                                <div>{student.town === "" ? <span className="error-msg" className="error_msg">Town is a mandatory field</span> : ""}</div>
                            </div>


                            <div className="field">
                                <input type="district" className="information" style={student.district === "" ? { borderColor: "red" } : {}} placeholder="Enter Your District*" id="district" onChange={handleChange} value={student.district}></input>
                                <div>{student.district === "" ? <span className="error_msg">district is a mandatory field</span> : ""}</div>
                            </div>
                            <div className="field">
                                <input type="state" className="information" style={student.state === "" ? { borderColor: "red" } : {}} placeholder="Enter State*" id="state" onChange={handleChange} value={student.state}></input>
                                <div>{student.state === "" ? <span className="error_msg">state is a mandatory field</span> : ""}</div>
                            </div>
                            <div className="field">
                                <input type="country" className="information" style={student.country === "" ? { borderColor: "red" } : {}} placeholder="Enter Your Country*" id="country" onChange={handleChange} value={student.country}></input>
                                <div>{student.country === "" ? <span className="error_msg">country is a mandatory field</span> : ""}</div>
                            </div>
                        </div>

                        <div className="buttons">
                            <div>
                                <button className="button1" onClick={handleUpadateStudent}>Update</button>
                            </div>
                            <div>
                                <button className="button2" id="button" onClick={handleReset}>Reset</button>
                            </div>
                        </div>

                        {student.isRegistrationOk && <h4 id="success_msg" className="success"><span id="success" className="success"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" className="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg></span> Student Updated Successfully</h4>}
                    </form>
                </div>
            </div>
        </div>

    )
}