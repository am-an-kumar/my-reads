import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './home/Home'
import Search from './search/Search'
import { getAll } from '../utils/BooksAPI'

class App extends Component {
  state = {
    currentlyReading: [],
    read: [],
    wantToRead: [],
  }

  setInitialShelfState = books => {
    // making AJAX request to get all books in user's shelf
    const currentlyReading = [],
      wantToRead = [],
      read = []
    // filtering based on shelf data
    for (const book of books) {
      if (book.shelf === 'currentlyReading') {
        currentlyReading.push(book)
      } else if (book.shelf === 'read') {
        read.push(book)
      } else {
        wantToRead.push(book)
      }
    }
    this.setState({
      currentlyReading,
      read,
      wantToRead,
    })
  }

  // will be called on initial mount, not on re-renders
  componentDidMount() {
    getAll().then(this.setInitialShelfState)
  }

  render() {
    const { currentlyReading, read, wantToRead } = this.state

    return (
      <Router basename='/'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Home
                currentlyReading={currentlyReading}
                read={read}
                wantToRead={wantToRead}
              />
            )}
          />
          <Route path='/search' component={Search} />
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}

// hot(module)(App) - enables hot reloading for component tree rooted at App
export default hot(module)(App)
