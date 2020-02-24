'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmailsTemplateSchema extends Schema {
  up () {
    this.create('emails_templates', (table) => {
      table.increments()
      table.string('title')
      table.text('text')
      table.string('file')
      table.timestamps()
    })
  }

  down () {
    this.drop('emails_templates')
  }
}

module.exports = EmailsTemplateSchema
