const mysql = require('mysql');
const {config} = require('../../config/index');

var db_config = {
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPass,
  database: config.dbName,
  multipleStatements: true
};

const mysqlConnection = mysql.createConnection(db_config);


mysqlConnection.connect(function(err) {              
  if(err) {                                     
    console.log('error when connecting to db:', err); 
    return;
  }else {
    console.log('DB id connected');
  }                                     
});                                     

module.exports = mysqlConnection;