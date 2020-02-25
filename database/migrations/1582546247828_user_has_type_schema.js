'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserHasTypeSchema extends Schema {
  up () {
    this.create('user_has_types', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('type_id')
      table.timestamps()

      table.foreign('user_id')
        .references('users.id')
        .onDelete('cascade')

      table.foreign('type_id')
        .references('user_types.id')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('user_has_types')
  }
}

module.exports = UserHasTypeSchema
