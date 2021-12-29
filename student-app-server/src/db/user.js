import { getConnection } from "./db.js";


export function update(user,callBkFn){
    const connection=getConnection();
    connection.connect();
    connection.query(`update user set Is_ADMIN='${user.is_admin.toUpperCase()}' where ID='${user.id}'`,(error,result)=>{
        if(error) throw error;
        connection.end();
        callBkFn(result.affectedRows > 0 ? true : null);
    })
}

export function deleteUser(id,callBkFn){
   const connection=getConnection();
   connection.connect();
   connection.query(`delete from user where ID='${id}'`,(error,result)=>{
       if (error) throw error;
       connection.end();
       callBkFn(result.affectedRows > 0 ? true : null);
   })
   }
    