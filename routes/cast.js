const router = require('express').Router()
const CastController = require('../controllers/cast')

router.get('/', CastController.getAllData)
router.get('/add', CastController.getAddForm)
router.post('/add', CastController.postAddForm)

router.get('/edit/:id', CastController.getEditForm)
router.post('/edit/:id', CastController.postEditForm)

router.get('/delete/:id', CastController.getDeleteData)

router.get('/movies/:id', CastController.getMoviesList)


module.exports = router