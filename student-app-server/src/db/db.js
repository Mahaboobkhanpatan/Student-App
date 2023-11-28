import mysql from "mysql";

export const getConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '181818',
        database: 'student'
    });;
}