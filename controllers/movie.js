const { Cast, Movie, ProductionHouse, MovieCast } = require('../models')

class MovieController {
  static getAllData(req, res) {
    Movie.findAll({
      order: [['released_year', 'DESC']],
      include: [ProductionHouse]
    })
    // .then(movies => res.send(movies))
    .then(movies => res.render('movie', {movies}))
    .catch(err => res.send(err))
  }

  static getAddForm(req, res) {
    res.render('addMovie')
  }

  static postAddMovie(req, res) {
    let {name, released_year, genre} = req.body
    Movie.create(req.body)
      .then(movies => res.redirect('/movies'))
      .catch(err => res.send(err))
  }

  static getEditForm(req, res) {
    let movies = null
    let productionData = null
    Movie.findByPk(req.params.id)
      .then(data => {
        movies = data
        return ProductionHouse.findAll()
      })
      .then(data => {
        productionData = data
        res.render('editMovie', {movies, productionData})
        // res.send([movies, productionData])
      })
      .catch(err => res.send(err))
  }

  static postEditForm(req, res) {
    let { name, released_year, genre, ProductionHouseId} = req.body
    let newObj = {name, released_year, genre, ProdHouseId : ProductionHouseId}
    console.log(newObj)
    Movie.update(newObj, {
      where: {
        id: req.params.id
      }
    })
    .then(() => res.redirect('/movies'))
    // .then((data) => res.send(data))
    .catch(err => res.send(err))
  }

  static getDeleteMovie(req, res) {
    Movie.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(del => res.redirect('/movies'))
    .catch(err => res.send(err))
  }

  static getAddCastForm(req, res) {
    let selectedMovie = null
    Movie.findByPk(req.params.id, {
      include: Cast,
      order: [
        [{model: Cast}, 'id', 'ASC']
      ]
    })
      .then(movies => {
        selectedMovie = movies
        return Cast.findAll({
          order: [['id', 'ASC']]
        })
      })
      .then(casts => res.render('movieAddCast', {movies: selectedMovie, casts}))
      // .then(casts => res.send(selectedMovie))
      .catch(err => res.send(err))
  }


  static postAddCastForm(req, res) {
    const MovieId = +req.params.id
    const { role, CastId } = req.body
    const inputObj = { role, CastId, MovieId }
    MovieCast.create(inputObj, {
      individualHooks: true
    })
      .then(movieCast => res.redirect(`/movies/casts/add/${MovieId}`))
      .catch(err => {
        const errors = err.errors.map(error => error.message).join(',')
        res.redirect(`/movies/casts/add/${MovieId}?errors=${errors}`)
      })
  }

}

module.exports = MovieController