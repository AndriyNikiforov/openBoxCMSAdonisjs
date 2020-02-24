'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestCaseFileSchema extends Schema {
  up () {
    this.create('test_case_files', (table) => {
      table.increments()
      table.string('file_name')
      table.string('path')
      table.integer('size')
      table.integer('test_case_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('test_case_files')
  }
}

module.exports = TestCaseFileSchema
