'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BoardColumnRow extends Model {
  boardColumns () {
    return this.hasOne('App/Models/BoardColumn')
  }

  users () {
    return this.hasOne('App/Models/User')
  }
}

module.exports = BoardColumnRow
