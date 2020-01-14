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
    loading: true,
  }

  // moves a book from one shelf to another(out of shelves)
  shelfChangeHandler = (currentBook, newShelf) => {
    this.setState(prevState => {
      return {
        [currentBook.shelf]: prevState[currentBook.shelf].filter(
          book => book.id !== currentBook.id,
        ),
        [newShelf]: prevState[newShelf].concat([
          Object.assign(currentBook, { shelf: newShelf }),
        ]),
      }
    })
  }

  // will be called on initial mount, not on re-renders
  componentDidMount() {
    getAll().then(books => {
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
        loading: false,
      })
    })
  }

  render() {
    const { currentlyReading, read, wantToRead, loading } = this.state

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
                shelfChangeHandler={this.shelfChangeHandler}
                loading={loading}
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
