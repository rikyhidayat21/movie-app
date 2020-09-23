const router = require('express').Router()
const HomeController = require('../controllers/home')
const ph = require('./ph')
const movies = require('./movie')
const cast = require('./cast')

router.get('/', HomeController.landingPage)
router.use('/production-houses', ph)
router.use('/movies', movies)
router.use('/casts', cast)

module.exports = router