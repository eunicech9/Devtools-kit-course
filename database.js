const mysql = require("mysql");

const properties = {
    host: "34.126.172.116",
    user: "root",
    password: "fintechsglab",
    port: 3306,
    database: "market",
  };
//creating a connection object
let connection = mysql.createConnection(properties)

//connects the database to the server
connection.connect((error) =>{
    if(error) {
        console.error("Connection to MySQL failed! \n" + error)
    } else {
        console.log("Connected to MySQL!")
    }
});

// connecting database to other scripts by the require("./xxx") and ending with module.exports = {function} 
module.exports = {
    connection,
};