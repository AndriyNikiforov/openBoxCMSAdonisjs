'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CalendarEventSchema extends Schema {
  up () {
    this.create('calendar_events', (table) => {
      table.increments()
      table.string('title')
      table.string('description')
      table.integer('date_alert')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('calendar_events')
  }
}

module.exports = CalendarEventSchema
