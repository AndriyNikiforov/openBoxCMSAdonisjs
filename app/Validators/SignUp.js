'use strict'

class SignUp {
  get rules () {
    return {
      email: 'required|email|unique:users,email',
      password: 'required|min:6|max:16',
      username: 'required|string',
      first_name: 'required|string',
      last_name: 'required|string'
    }
  }
}

module.exports = SignUp
