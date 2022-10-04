const db = require('../bin/db')

class RecordsController {
    async createRecords(req, res) {
        const {uid, category, scores, sum, currency, type, date} = req.body

        await db.query("INSERT INTO records(uid, category, scores, sum, currency, type, date) VALUES('"+ uid +"', '"+ category +"', '"+ scores +"', '"+ sum +"', '"+ currency +"', '"+ type +"', '"+ date +"')", (error, rows, fields) => {
            res.json(error)
            console.log(uid, category, scores, sum, currency)
        })
    }

    async getRecords(req, res) {
        await db.query(`SELECT * FROM records`, (error, rows, fields) => {
            res.json(rows)
        })
    }

    async updateRecords(req, res) {
        const {uid, category, scores, sum, currency, type, date} = req.body

        await db.query("UPDATE records set uid = '"+ uid +"', category = '"+ category +"', scores = '"+ scores +"', sum = '"+ sum +"', currency = '"+ currency +"', type = '"+ type +"', date = '"+ date +"'", (error, rows, fields) => {
            res.json(error)
        })
    }

    async getOneRecords(req, res) {
        const id = req.params.id

        await db.query("SELECT * FROM records WHERE id = '"+ id +"'", (error, rows, fields) => {
            res.json(rows)
        })
    }

    async deleteRecords(req, res) {
        const id = req.params.id

        await db.query("DELETE FROM records WHERE id = '"+ id +"'", (error, rows, fields) => {
            res.json(error)
        })
    }
}

module.exports = new RecordsController()