'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestPlanSchema extends Schema {
  up () {
    this.create('test_plans', (table) => {
      table.increments()
      table.integer('index')
      table.integer('test_case_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('test_plans')
  }
}

module.exports = TestPlanSchema
