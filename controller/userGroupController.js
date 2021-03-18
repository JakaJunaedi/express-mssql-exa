const { sql,poolPromise } = require('../config/connect');
const fs = require('fs');
const { error } = require('console');
var rawdata = fs.readFileSync('./query/usersGroup.json');
var queries = JSON.parse(rawdata);

class MainUserGroup {

    async getAllUserGroup(req, res) {
        try{
            const pool = await poolPromise
            const result = await pool.request().query(queries.getAllUserGroup)
            res.json(result.recordset)
        }catch(err){
            res.status(500);
            res.send(error.message);
        }
    }

    async addNewUserGroup(req, res) {
        try{
            if(req.body.USER_GROUP_ID != null && req.body.USER_GROUP_CODE != null && req.body.USER_GROUP_CODE

            ) {
                const pool = await poolPromise
                const result = await pool.request()
                .input('USER_GROUP_ID', sql.VarChar, req.body.USER_GROUP_ID)
                .input('USER_GROUP_CODE', sql.VarChar, req.body.USER_GROUP_CODE)
                .query(queries.addNewUserGroup)
                res.json(result)
            } else {
                res.send('please cek');
            }
        }catch(err) {
            res.status(500);
            res.send(error.message);
        }
    }
}

const controllerUserGroup = new MainUserGroup()
module.exports = controllerUserGroup;