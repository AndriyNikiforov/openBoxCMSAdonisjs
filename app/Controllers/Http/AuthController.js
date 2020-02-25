'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class AuthController {
  async signUpPage({ view }) {
    return view.render('user.signup')
  }

  async signInPage({ view }) {
    return view.render('user.signin')
  }

  async signUp({ auth, request, response }) {
    const data = request.only([
      'email',
      'username',
      'first_name',
      'last_name',
      'password'
    ])

    data.password = await Hash.make(data.password)
    const user = await User.create(data)

    await auth.login(user)

    return response.route('dashboard')
  }

  async signIn({ auth, request, response }) {
    const data = request.only(['email', 'password'])

    if (!await auth.attempt(data.email, data.password)) {
      return response.redirect('/')
    }

    return response.route('dashboard')
  }

  async logout({ auth, response }) {
    await auth.logout()

    return response.redirect('/')
  }
}

module.exports = AuthController
