'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceProblemSchema extends Schema {
  up () {
    this.create('device_problems', (table) => {
      table.increments()
      table.string('title')
      table.text('description')
      table.text('resolve')
      table.integer('date_founded')
      table.integer('device_id')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('device_problems')
  }
}

module.exports = DeviceProblemSchema
