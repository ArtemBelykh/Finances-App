const Router = require('express')
const router = new Router()
const recordsController = require('../Controllers/records.controller')

router.post('/records', recordsController.createRecords)
router.get('/records', recordsController.getRecords)
router.get('/records/:id', recordsController.getOneRecords)
router.put('/records', recordsController.updateRecords)
router.delete('/records/:id', recordsController.deleteRecords)

module.exports = router