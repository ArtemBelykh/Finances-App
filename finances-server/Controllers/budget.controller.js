const db = require('../bin/db')

class BudgetController {
    async createBudget(req, res) {
        const {name, sum, currency, category, scores} = req.body

        await db.query("INSERT INTO budget(name, sum, currency, category, scores) VALUES('"+ name +"', '"+ sum +"', '"+ currency +"', '"+ category +"', '"+ scores +"')", (error, rows, fields) => {
            res.json(error)
            console.log(name, sum, currency, category, scores)
        })
    }

    async getBudget(req, res) {
        await db.query(`SELECT * FROM budget`, (error, rows, fields) => {
            res.json(rows)
        })
    }

    async updateBudget(req, res) {
        const {name, sum, currency, category, scores} = req.body

        await db.query("UPDATE budget set name = '"+ name +"', sum = '"+ sum +"', currency = '"+ currency +"', category = '"+ category +"', scores = '"+ scores +"'", (error, rows, fields) => {
            res.json(error)
        })
    }

    async getOneBudget(req, res) {
        const id = req.params.id

        await db.query("SELECT * FROM budget WHERE id = '"+ id +"'", (error, rows, fields) => {
            res.json(rows)
        })
    }

    async deleteBudget(req, res) {
        const id = req.params.id

        await db.query("DELETE FROM budget WHERE id = '"+ id +"'", (error, rows, fields) => {
            res.json(error)
        })
    }
}

module.exports = new BudgetController()