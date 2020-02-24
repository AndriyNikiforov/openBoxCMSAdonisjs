'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DeviceProblem extends Model {
  devices () {
    return this.hasOne('App/Models/Device')
  }
}

module.exports = DeviceProblem
