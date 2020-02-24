'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
  bugReports () {
    return this.belongsTo('App/Models/BugReport')
  }

  todos () {
    return this.belongsTo('App/Models/Todo')
  }

  calendarEvents () {
    return this.belongsTo('App/Models/CalendarEvent')
  }

  securityErrors () {
    return this.belongsTo('App/Models/SecurityError')
  }

  boardColumnRows () {
    return this.belongsTo('App/Models/BoardColumnRow')
  }

  subscriptions () {
    return this.belongsTo('App/Models/Subscription')
  }

  projectComments () {
    return this.belongsTo('App/Models/ProejctComment')
  }

  deviceProblems () {
    return this.belongsTo('App/Models/DeviceProblem')
  }

  userTypes () {
    return this.belongsToMany('App/Models/UserType')
  }
}

module.exports = User
