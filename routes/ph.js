const router = require('express').Router()
const PhController = require('../controllers/ph')

router.get('/', PhController.getAllData)

module.exports = router