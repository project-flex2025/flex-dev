import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost", // Change if using an external DB
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "user_management", // Your MySQL database name
});

export default db;
