import React from 'react'
import { hot } from 'react-hot-loader'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Search from './Search'

const App = () => (
  <Router basename='/'>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/search' component={Search} />
      <Redirect to='/' />
    </Switch>
  </Router>
)

// hot(module)(App) - enables hot reloading for component tree rooted at App
export default hot(module)(App)
