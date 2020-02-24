'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Device extends Model {
   deviceProblems () {
     return this.belongsTo('App/Models/DeviceProblem')
   }
}

module.exports = Device
