const router = require('express').Router()
const MovieController = require('../controllers/movie')

router.get('/', MovieController.getAllData)
router.get('/add', MovieController.getAddForm)
router.post('/add', MovieController.postAddMovie)

router.get('/edit/:id', MovieController.getEditForm)
router.post('/edit/:id', MovieController.postEditForm)
router.get('/delete/:id', MovieController.getDeleteMovie)

router.get('/casts/add/:id', MovieController.getAddCastForm)
router.post('/casts/add/:id', MovieController.postAddCastForm)


module.exports = router