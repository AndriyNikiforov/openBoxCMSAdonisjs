'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TestCase extends Model {
  testPlans () {
    return this.hasOne('App/Models/TestPlan')
  }

  projects () {
    return this.hasOne('App/Models/Project')
  }
}

module.exports = TestCase
