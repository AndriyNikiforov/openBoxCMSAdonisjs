'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Board extends Model {
  projects () {
    return this.hasOne('App/Models/Project')
  }

  boardColumns () {
    return this.belongsTo('App/Models/BoardColumn')
  }
}

module.exports = Board
