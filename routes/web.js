const express = require('express')
const ExpensesController = require('../controllers/ExpensesController')
const router = express.Router()

// Expense controller
router.post('/create',ExpensesController.Create)
router.get('/display',ExpensesController.Display)


module.exports = router