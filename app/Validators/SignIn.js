'use strict'

class SignIn {
  get rules () {
    return {
      email: 'required|email',
      password: 'required|string'
    }
  }
}

module.exports = SignIn
