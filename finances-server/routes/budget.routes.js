const Router = require('express')
const router = new Router()
const budgetController = require('../Controllers/budget.controller')

router.post('/budget', budgetController.createBudget)
router.get('/budget', budgetController.getBudget)
router.get('/budget/:id', budgetController.getOneBudget)
router.put('/budget', budgetController.updateBudget)
router.delete('/budget/:id', budgetController.deleteBudget)

module.exports = router