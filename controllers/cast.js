const calculateAge = require('../helpers/calculateAge')
const { Cast, Movie} = require('../models')

class CastController {
  static getAllData(req, res) {
    Cast.findAll({
      order: [['first_name', 'ASC']]
    })
      .then(casts => res.render('cast', {casts}))
      .catch(err => res.send(err))
  }

  static getAddForm(req, res) {
    res.render('addCast')
  }

  static postAddForm(req, res) {
    let {first_name, last_name, birth_year, phone_number, gender} = req.body
    
    Cast.create(req.body)
      .then(cast => res.redirect('/casts'))
      .catch(err => res.send(err))
    // res.send(req.body)
  }

  static getEditForm(req, res) {
    Cast.findByPk(req.params.id)
      .then(casts => res.render('editCast', { casts }))
      .catch(err => res.send(err))
  }

  static postEditForm(req, res) {
    let {first_name, last_name, birth_year, phone_number, gender} = req.body

    Cast.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(casts => res.redirect('/casts'))
      .catch(err => res.send(err))
  }

  static getDeleteData(req, res) {
    Cast.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.redirect('/casts'))
      .catch(err => res.send(err))
  }

  static getMoviesList(req, res) {
    const inputId = +req.params.id
    Cast.findByPk(inputId, {
      include: Movie,
      order: [
        [{ model: Movie }, 'id','ASC']
      ],
    })
      .then(cast => res.render('castMovieList.ejs', { cast, calculateAge }))
      .catch(err => res.send(err))
  }  

}

module.exports = CastController