'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestCaseSchema extends Schema {
  up () {
    this.create('test_cases', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.integer('status_id').notNullable()
      table.integer('project_id').notNullable()
      table.json('steps').notNullable()
      table.json('files_ids').notNullable()
      table.integer('priority_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('test_cases')
  }
}

module.exports = TestCaseSchema
