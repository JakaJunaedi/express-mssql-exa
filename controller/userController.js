const { sql,poolPromise } = require('../config/connect');
const fs = require('fs');
const { error } = require('console');
var rawdata = fs.readFileSync('./query/users.json');
var queries = JSON.parse(rawdata);

class MainController {

    async getAllData(req, res) {
        try{
            const pool = await poolPromise
            const result = await pool.request().query(queries.getAllData)
            res.json(result.recordset)
        }catch(err) {
            res.status(500)
            res.send(error.message)
        }
    }

    async addNewData(req, res) {
        try{
            if(req.body.USER_ID != null && req.body.USER_GROUP_ID != null && req.body.BRANCH_GROUP_CODE != null &&
                req.body.BRANCH_CODE != null && req.body.USER_NAME != null && req.body.USER_LOGIN != null && req.body.USER_PASSWORD != null &&
                req.body.USER_PASSWORD_FAILED != null && req.body.USER_PASSWORD_SETON != null && req.body.URC_CODE != null && req.body.USER_ID_REF != null &&
                req.body.USER_ID_REF2 != null && req.body.USER_ACTIVE_START != null && req.body.USER_ACTIVE_END != null && req.body.USER_ISLOGON != null &&
                req.body.USER_ISLOGON_DATE != null && req.body.USER_ISLOGON_IP != null && req.body.USER_STATUS != null &&
                req.body.USER_CREATED_BY != null && req.body.USER_CREATED_DATE != null && req.body.USER_CREATED_TIME != null && req.body.USER_UPDATED_BY != null &&
                req.body.USER_UPDATED_DATE != null && req.body.USER_UPDATED_TIME != null && req.body.USER_APPROVED_BY != null && req.body.USER_APPROVED_DATE != null &&
                req.body.USER_APPROVED_TIME != null && req.body.USER_REJECTED_BY != null && req.body.USER_REJECTED_DATE != null && req.body.USER_DELETED_BY != null &&
                req.body.USER_DELETED_DATE != null && req.body.USER_DELETED_TIME != null) {
                
                const pool = await poolPromise 
                const result = await pool.request()
                .input('USER_ID',sql.VarChar, req.body.USER_ID)
                .input('USER_GROUP_ID',sql.VarChar, req.body.USER_GROUP_ID)
                .input('BRANCH_GROUP_CODE',sql.VarChar, req.body.BRANCH_GROUP_CODE)
                .input('BRANCH_CODE',sql.VarChar, req.body.BRANCH_CODE)
                .input('USER_NAME',sql.VarChar, req.body.USER_NAME)
                .input('USER_LOGIN',sql.VarChar, req.body.USER_LOGIN)
                .input('USER_PASSWORD',sql.VarChar, req.body.USER_PASSWORD)
                .input('USER_PASSWORD_FAILED',sql.VarChar, req.body.USER_PASSWORD_FAILED)
                .input('USER_PASSWORD_SETON',sql.VarChar, req.body.USER_PASSWORD_SETON)
                .input('URC_CODE',sql.VarChar, req.body.URC_CODE)
                .input('USER_ID_REF',sql.VarChar, req.body.USER_ID_REF)
                .input('USER_ID_REF2',sql.VarChar, req.body.USER_ID_REF2)
                .input('USER_ACTIVE_START',sql.VarChar, req.body.USER_ACTIVE_START)
                .input('USER_ACTIVE_END',sql.VarChar, req.body.USER_ACTIVE_END)
                .input('USER_ISLOGON',sql.VarChar, req.body.USER_ISLOGON)
                .input('USER_ISLOGON_DATE',sql.VarChar, req.body.USER_ISLOGON_DATE)
                .input('USER_ISLOGON_IP',sql.VarChar, req.body.USER_ISLOGON_IP)
                .input('USER_STATUS',sql.VarChar, req.body.USER_STATUS)
                .input('USER_CREATED_BY',sql.VarChar, req.body.USER_CREATED_BY)
                .input('USER_CREATED_DATE',sql.VarChar, req.body.USER_CREATED_DATE)
                .input('USER_CREATED_TIME',sql.VarChar, req.body.USER_CREATED_TIME)
                .input('USER_UPDATED_BY',sql.VarChar, req.body.USER_UPDATED_BY)
                .input('USER_UPDATED_DATE',sql.VarChar, req.body.USER_UPDATED_DATE)
                .input('USER_UPDATED_TIME',sql.VarChar, req.body.USER_UPDATED_TIME)
                .input('USER_APPROVED_BY',sql.VarChar, req.body.USER_APPROVED_BY)
                .input('USER_APPROVED_DATE',sql.VarChar, req.body.USER_APPROVED_DATE)
                .input('USER_APPROVED_TIME',sql.VarChar, req.body.USER_APPROVED_TIME)
                .input('USER_REJECTED_BY',sql.VarChar, req.body.USER_REJECTED_BY)
                .input('USER_REJECTED_DATE',sql.VarChar, req.body.USER_REJECTED_DATE)
                .input('USER_DELETED_BY',sql.VarChar, req.body.USER_DELETED_BY)
                .input('USER_DELETED_DATE',sql.VarChar, req.body.USER_DELETED_DATE)
                .input('USER_DELETED_TIME',sql.VarChar, req.body.USER_DELETED_TIME)
                .query(queries.addNewUser)
                res.json(result)
            } else {
                res.send('plese cek')
            }
        }catch(err) {
            res.status(500)
            res.send(error.message)
        }
    }

    async updateData(req, res) {
        try{
            if(req.body.USER_ID != null && req.body.USER_GROUP_ID != null && req.body.BRANCH_GROUP_CODE != null &&
                req.body.BRANCH_CODE != null && req.body.USER_NAME != null && req.body.USER_LOGIN != null && req.body.USER_PASSWORD != null &&
                req.body.USER_PASSWORD_FAILED != null && req.body.USER_PASSWORD_SETON != null && req.body.URC_CODE != null && req.body.USER_ID_REF != null &&
                req.body.USER_ID_REF2 != null && req.body.USER_ACTIVE_START != null && req.body.USER_ACTIVE_END != null && req.body.USER_ISLOGON != null &&
                req.body.USER_ISLOGON_DATE != null && req.body.USER_ISLOGON_IP != null && req.body.USER_STATUS != null &&
                req.body.USER_CREATED_BY != null && req.body.USER_CREATED_DATE != null && req.body.USER_CREATED_TIME != null && req.body.USER_UPDATED_BY != null &&
                req.body.USER_UPDATED_DATE != null && req.body.USER_UPDATED_TIME != null && req.body.USER_APPROVED_BY != null && req.body.USER_APPROVED_DATE != null &&
                req.body.USER_APPROVED_TIME != null && req.body.USER_REJECTED_BY != null && req.body.USER_REJECTED_DATE != null && req.body.USER_DELETED_BY != null &&
                req.body.USER_DELETED_DATE != null && req.body.USER_DELETED_TIME != null) {

                    const pool = await poolPromise
                    const result = await pool.request()
                    .input('USER_ID',sql.VarChar, req.body.USER_ID)
                    .input('USER_GROUP_ID',sql.VarChar, req.body.USER_GROUP_ID)
                    .input('BRANCH_GROUP_CODE',sql.VarChar, req.body.BRANCH_GROUP_CODE)
                    .input('BRANCH_CODE',sql.VarChar, req.body.BRANCH_CODE)
                    .input('USER_NAME',sql.VarChar, req.body.USER_NAME)
                    .input('USER_LOGIN',sql.VarChar, req.body.USER_LOGIN)
                    .input('USER_PASSWORD',sql.VarChar, req.body.USER_PASSWORD)
                    .input('USER_PASSWORD_FAILED',sql.VarChar, req.body.USER_PASSWORD_FAILED)
                    .input('USER_PASSWORD_SETON',sql.VarChar, req.body.USER_PASSWORD_SETON)
                    .input('URC_CODE',sql.VarChar, req.body.URC_CODE)
                    .input('USER_ID_REF',sql.VarChar, req.body.USER_ID_REF)
                    .input('USER_ID_REF2',sql.VarChar, req.body.USER_ID_REF2)
                    .input('USER_ACTIVE_START',sql.VarChar, req.body.USER_ACTIVE_START)
                    .input('USER_ACTIVE_END',sql.VarChar, req.body.USER_ACTIVE_END)
                    .input('USER_ISLOGON',sql.VarChar, req.body.USER_ISLOGON)
                    .input('USER_ISLOGON_DATE',sql.VarChar, req.body.USER_ISLOGON_DATE)
                    .input('USER_ISLOGON_IP',sql.VarChar, req.body.USER_ISLOGON_IP)
                    .input('USER_STATUS',sql.VarChar, req.body.USER_STATUS)
                    .input('USER_CREATED_BY',sql.VarChar, req.body.USER_CREATED_BY)
                    .input('USER_CREATED_DATE',sql.VarChar, req.body.USER_CREATED_DATE)
                    .input('USER_CREATED_TIME',sql.VarChar, req.body.USER_CREATED_TIME)
                    .input('USER_UPDATED_BY',sql.VarChar, req.body.USER_UPDATED_BY)
                    .input('USER_UPDATED_DATE',sql.VarChar, req.body.USER_UPDATED_DATE)
                    .input('USER_UPDATED_TIME',sql.VarChar, req.body.USER_UPDATED_TIME)
                    .input('USER_APPROVED_BY',sql.VarChar, req.body.USER_APPROVED_BY)
                    .input('USER_APPROVED_DATE',sql.VarChar, req.body.USER_APPROVED_DATE)
                    .input('USER_APPROVED_TIME',sql.VarChar, req.body.USER_APPROVED_TIME)
                    .input('USER_REJECTED_BY',sql.VarChar, req.body.USER_REJECTED_BY)
                    .input('USER_REJECTED_DATE',sql.VarChar, req.body.USER_REJECTED_DATE)
                    .input('USER_DELETED_BY',sql.VarChar, req.body.USER_DELETED_BY)
                    .input('USER_DELETED_DATE',sql.VarChar, req.body.USER_DELETED_DATE)
                    .input('USER_DELETED_TIME',sql.VarChar, req.body.USER_DELETED_TIME)
                    .query(queries.updateUserDetails)
                    res.json(result)
            } else {
                res.send('please cek')
            }
        } catch(err) {
            res.status(500)
            res.send(error.message)
        }
    }

    async deleteData(req, res) {
        try{
            if(req.body.USER_LOGIN != null) {
                const pool = await poolPromise
                const result = await pool.request()
                .input('USER_LOGIN', sql.VarChar,req.body.USER_LOGIN)
                .query(queries.deleteUser)
                res.json(result)
            } else {
                res.send('please cek')
            }
        } catch(err) {
            res.status(500)
            res.send(error.message)
        }
    }
}

const controller = new MainController()
module.exports = controller;