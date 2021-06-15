const mysql = require('mysql');
const {config} = require('../../config/index');

var db_config = {
  host: config.dbHost,
  user: config.dbUser,
  database: config.dbName,
  password: config.dbPass,
  multipleStatements: true
};

const mysqlConnection = mysql.createPool(db_config);


// mysqlConnection.connect(function(err) {              
//   if(err) {                                     
//     console.log('error when connecting to db:', err); 
//     return;
//   }else {
//     console.log('DB id connected');
//   }                                     
// });                                     

module.exports = mysqlConnection;