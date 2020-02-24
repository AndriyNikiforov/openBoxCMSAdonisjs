'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BoardColumnPaperSchema extends Schema {
  up () {
    this.create('board_column_papers', (table) => {
      table.increments()
      table.string('title')
      table.string('description')
      table.integer('user_id')
      table.integer('time_estimated')
      table.integer('time_tracked')
      table.integer('board_column_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('board_column_papers')
  }
}

module.exports = BoardColumnPaperSchema
