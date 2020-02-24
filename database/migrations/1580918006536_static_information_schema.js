'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StaticInformationSchema extends Schema {
  up () {
    this.create('static_informations', (table) => {
      table.increments()
      table.string('title')
      table.text('text')
      table.timestamps()
    })
  }

  down () {
    this.drop('static_informations')
  }
}

module.exports = StaticInformationSchema
