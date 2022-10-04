const db = require('../bin/db')

class ScoresController {
    async createScores(req, res) {
        const {color, currency, nameScores, numberScore, sum} = req.body

        const newScores = await db.query("INSERT INTO scores(nameScores, sum, numberScore, currency, color) VALUES('"+ nameScores +"', '"+ sum +"', '"+ numberScore +"', '"+ currency +"', '"+ color +"')", (error, rows, fields) => {
            res.json(error)
            console.log(color, currency, nameScores, numberScore, sum)
        })
    }

    async getScores(req, res) {
        const getScore = await db.query(`SELECT * FROM scores`, (error, rows, fields) => {
            res.json(rows)
        })
    }

    async getOneScores(req, res) {
        const id = req.params.id

        const getScore = await db.query("SELECT * FROM scores WHERE id = '"+ id +"'", (error, rows, fields) => {
            res.json(rows)
        })
    }

    async updateScores(req, res) {
        const {nameScores, sum, numberScore, currency, color} = req.body

        const getScore = await db.query("UPDATE scores set nameScores = '"+ nameScores +"', sum = '"+ sum +"', numberScore = '"+ numberScore +"', currency = '"+ currency +"', color = '"+ color +"'", (error, rows, fields) => {
            res.json(error)
        })
    }

    async deleteScores(req, res) {
        const id = req.params.id

        const getScore = await db.query("DELETE FROM scores WHERE id = '"+ id +"'", (error, rows, fields) => {
            res.json(error)
        })
    }
}

module.exports = new ScoresController()