'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({ view }) => {
  return view.render('welcome')
})

Route.group(() => {
  Route.get('up', 'AuthController.signUpPage')
    .as('signUpPage')

  Route.get('in', 'AuthController.signInPage')
    .as('signInPage')
}).prefix('form')

Route.group(() => {
  Route.post('up', 'AuthController.signUp')
    .as('signup')
    .validator('SignUp')

  Route.post('in', 'AuthController.signIn')
    .as('signin')
    .validator('SignIn')
}).prefix('sign/')

Route.get('/logout', 'AuthController.logout')
  .as('logout')

Route.group(() => {
  Route.get('/dashboard', 'DashboardController.dashboard')
  .as('dashboard')
  .middleware(['auth'])
}).prefix('admin/');

