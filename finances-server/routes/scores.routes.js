const Router = require('express')
const router = new Router()
const scoresController = require('../Controllers/scores.controller')

router.post('/scores', scoresController.createScores)
router.get('/scores', scoresController.getScores)
router.get('/scores/:id', scoresController.getOneScores)
router.put('/scores', scoresController.updateScores)
router.delete('/scores/:id', scoresController.deleteScores)

module.exports = router