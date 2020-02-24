'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BoardColumn extends Model {
  boards () {
    return this.hasOne('App/Models/Board')
  }

  boardColumnRows () {
    return this.belongsTo('App/Models/BoardColumnRow')
  }
}

module.exports = BoardColumn
