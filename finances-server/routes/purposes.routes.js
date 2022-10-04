const Router = require('express')
const router = new Router()
const purposesController = require('../Controllers/purposes.controller')

router.post('/purposes', purposesController.createPurposes)
router.get('/purposes', purposesController.getPurposes)
router.get('/purposes/:id', purposesController.getOnePurposes)
router.put('/purposes', purposesController.updatePurposes)
router.delete('/purposes/:id', purposesController.deletePurposes)

module.exports = router