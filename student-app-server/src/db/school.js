import { getConnection } from "./db.js";

export function getSchool(id, callbackFn) {
    const connection = getConnection();
    connection.connect();

    connection.query(`SELECT * FROM SCHOOL WHERE ID=${id}`, function (error, results, fields) {
        if (error) throw error;
        connection.end();
        callbackFn(results[0] ? results[0] : null);
    });
}

export function deleteSchool(id, callbackFn) {
    const connection = getConnection();
    connection.connect();

    connection.query(`DELETE FROM SCHOOL WHERE ID=${id}`, function (error, result, fields) {
        if (error) throw error;
        connection.end();
        callbackFn(result.affectedRows > 0 ? true : false);
    });
}

export function createSchool(schoolObj, callbackFn) {
    const connection = getConnection();
    connection.connect();
    console.log(schoolObj)
    connection.query(`INSERT INTO SCHOOL(NAME, ADDRESSID) VALUES ('${schoolObj.name}', ${schoolObj.addressId})`, (error, result, fields) => {
        console.log(result, error)
        connection.end();
        if (error) callbackFn(null)
        callbackFn(result.affectedRows > 0)
    });
}

export function updateSchool(schObj, callbackFn) {
    const connection = getConnection();
    connection.connect()
    connection.query(`update school set name='${schObj.name}' where id=${schObj.id}`, (error, result, field) => {
        if (error) throw error
        connection.end();
        getSchool(schObj.id, (school) => {
            callbackFn(school)
        })
    });
}

export default function getSchools(callbackFn) {

    const connection = getConnection();
    connection.connect();

    connection.query(`SELECT * FROM SCHOOL S, ADDRESS  A WHERE S.ADDRESSID = A.ADDRESSID`, (error, result, fields) => {
        if (error) throw error;
        connection.end();
        callbackFn(error ? [] : result);
    });
}

export function signup(signObj, callBkFn) {
    const connection = getConnection();
    connection.connect();
    connection.query(`INSERT INTO USER (EMAIL,PASSWORD) VALUES('${signObj.email}',${signObj.password})`, (error, result) => {
        if (error) throw error;
        connection.end();
        callBkFn(result ? true : NULL);
    })
}

export function getData(signObj, callBkFn) {
    const connection = getConnection();
    connection.connect();
    connection.query(`SELECT * FROM USER WHERE EMAIL='${signObj.email}' AND PASSWORD='${signObj.password}'`, (error, result) => {
        if (error) throw error;
        connection.end();
        callBkFn(result[0] ? result[0] : null);
    })
}