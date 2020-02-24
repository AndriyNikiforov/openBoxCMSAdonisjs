'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProjectComment extends Model {
  proejcts () {
    return this.hasOne('App/Models/Project')
  }
}

module.exports = ProjectComment
