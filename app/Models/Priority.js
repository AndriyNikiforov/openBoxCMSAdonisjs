'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Priority extends Model {
  testCases () {
    return this.belongsTo('App/Models/TestCase')
  }

  bugReports () {
    return this.belongsTo('App/Models/BugReport')
  }
}

module.exports = Priority
