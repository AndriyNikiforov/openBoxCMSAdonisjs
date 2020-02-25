'use strict'

class DashboardController {
  async dashboard({ view }) {
    return view.render('main.dashboard')
  }
}

module.exports = DashboardController
