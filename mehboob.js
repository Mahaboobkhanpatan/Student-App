// API.JS


 app.post("/signup/student", (req, res) => {
    const body = req.body;
    console.log(body);
    if (body.EMAIL != "" && body.PASSWORD != "") {
      getUserByEmail(body, (result) => {
        console.log(result);
        if (!result) {
          signup(body, (signup) => {
            res.send(signup ? { message: "SIGNUP SUCCESSFULL" } : { message: "UNSUCCESSFULL" })
          })
        }
        else {
          res.send({ message: "USER ALREADY EXIST" })
        }

      })
    }
    else {
      res.send({ message: "EMAIL AND PASSWORD ARE MANDATORY" })
    }
  })


  app.post("/signin/student", (req, res) => {
    const body = req.body;
    console.log(body)
    if (body.EMAIL != "" && body.PASSWORD != "") {
      getUserByEmail(body, (result) => {
        console.log(result);
        if (result) {
          if (body.PASSWORD == result.PASSWORD) {
            res.send({ message: "SIGNIN SUCESSFULL" });
          } else {
            res.send({ message: "EMAIL AND PASSWORD DO NOT MATCHED" })
          }
        }
        else {
          res.send({ message: "User Doesn't exists please Signup first" })
        }
      })
    }
    else {
      res.send({ message: "PLEASE ENTER BOTH EMAIL AND PASSWORD" })
    }
  })


//USER.JS

import { getConnection } from "./db.js";


export function signup (signObj,callBkFn){
    const connection=getConnection();
    connection.connect();
    connection.query(`INSERT INTO USERS (EMAIL,PASSWORD) VALUES('${signObj.EMAIL}',${signObj.PASSWORD})`,(error,result)=>{
        if(error) throw error;
        connection.end();
        callBkFn(result.affectedRows>0 ? true : false);
    })
}


export function getUserByEmail(signObj,callBkFn){
    const connection=getConnection();
    connection.connect();
    connection.query(`SELECT *FROM USERS WHERE EMAIL='${signObj.EMAIL}'`,(error,result)=>{
        if(error) throw error;
        connection.end();
        callBkFn(result[0]? result[0] : null);
    })
}
