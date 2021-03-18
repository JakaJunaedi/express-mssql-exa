const sql = require('mssql');

const config = {
    user: 'SA',
    password: 'Password051455',
    port: 1433,
    database: 'exa',
    server: 'localhost',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,
        enableArithAbort: true
    }
} 
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}