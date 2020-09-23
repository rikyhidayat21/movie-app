const {ProductionHouse} = require('../models')

class PhController {
  static getAllData(req, res) {
    ProductionHouse.findAll({
      order: [
        ['name_prodHouse', 'ASC']
      ]
    })
    .then(ph => res.render('ph', {ph}))
    .catch(err => res.send(err))
  }
}

module.exports = PhController