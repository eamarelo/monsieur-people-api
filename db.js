const mysql = require('mysql');

// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root', // PUT YOUR USERNAME HERE
  password: 'password', // PUT YOUR PASSWORD HERE
  database: 'contact'
});

con.connect((err) => {
  if(err){
    console.log(err + 'Error connecting to Db');
    return;
  }
  console.log('Connection established!!!!!!!!!!!!!!!!!!!!!!!!!');
});

module.exports = con
