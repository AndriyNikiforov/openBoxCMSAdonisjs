'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  testCases () {
    return this.belongsTo('App/Models/TestCase')
  }

  boards () {
    return this.hasOne('App/Models/Board')
  }

  proejctComments () {
    return this.belongsTo('App/Models/ProjectComment')
  }
}

module.exports = Project
