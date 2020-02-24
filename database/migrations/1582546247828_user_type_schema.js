'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserTypeSchema extends Schema {
  up () {
    this.create('user_types', (table) => {
      table.increments()
      table.string('name')
      table.json('permissions').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_types')
  }
}

module.exports = UserTypeSchema
