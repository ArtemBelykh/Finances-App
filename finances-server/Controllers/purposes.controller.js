const db = require('../bin/db')

class purposesController {
    async createPurposes(req, res) {
        const {name, targetAmount, alreadyAccumulated, date, color, currency} = req.body

        await db.query("INSERT INTO purposes(name, targetAmount, alreadyAccumulated, date, color, currency) VALUES('"+ name +"', '"+ targetAmount +"', '"+ alreadyAccumulated +"', '"+ date +"', '"+ color +"', '"+ currency +"')", (error, rows, fields) => {
            res.json(error)
            console.log(name, targetAmount, alreadyAccumulated, date, color, currency)
        })
    }

    async getPurposes(req, res) {
        await db.query(`SELECT * FROM purposes`, (error, rows, fields) => {
            res.json(rows)
        })
    }

    async updatePurposes(req, res) {
        const {name, targetAmount, alreadyAccumulated, date, color, currency} = req.body

        await db.query("UPDATE purposes set name = '"+ name +"', targetAmount = '"+ targetAmount +"', alreadyAccumulated = '"+ alreadyAccumulated +"', date = '"+ date +"', color = '"+ color +"', currency = '"+ currency +"'", (error, rows, fields) => {
            res.json(error)
        })
    }

    async getOnePurposes(req, res) {
        const id = req.params.id

        await db.query("SELECT * FROM purposes WHERE id = '"+ id +"'", (error, rows, fields) => {
            res.json(rows)
        })
    }

    async deletePurposes(req, res) {
        const id = req.params.id

        await db.query("DELETE FROM purposes WHERE id = '"+ id +"'", (error, rows, fields) => {
            res.json(error)
        })
    }
}

module.exports = new purposesController()