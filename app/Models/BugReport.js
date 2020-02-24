'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BugReport extends Model {
  users () {
    return this.hasOne('App/Models/User')
  }

  priorities () {
    return this.hasOne('App/Models/Priority')
  }
}

module.exports = BugReport
