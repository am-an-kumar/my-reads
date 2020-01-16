import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './home/Home'
import Search from './search/Search'
import BookDetails from './shared/BookDetails'
import { getAll, update } from '../utils/BooksAPI'
import { toast } from 'react-toastify'

class App extends Component {
  state = {
    currentlyReading: [],
    read: [],
    wantToRead: [],
    loading: true,
  }

  // moves a book from one shelf to another(out of shelves)
  shelfChangeHandler = (currentBook, newBookShelf) => {
    const currentBookShelf = currentBook.shelf || 'none'
    const isCurrentBookShelfNone = currentBookShelf === 'none'
    const isNewBookShelfNone = newBookShelf === 'none'

    // book is being added from search page
    if (isCurrentBookShelfNone) {
      this.setState(prevState => ({
        [newBookShelf]: prevState[newBookShelf].concat([
          Object.assign(currentBook, { shelf: newBookShelf }),
        ]),
      }))
    }
    // book is being removed from shelf's from home page
    else if (isNewBookShelfNone) {
      this.setState(prevState => ({
        [currentBookShelf]: prevState[currentBookShelf].filter(
          book => book.id !== currentBook.id,
        ),
      }))
    }
    // book is transferred between 2 shelf's
    else {
      this.setState(prevState => ({
        [currentBookShelf]: prevState[currentBookShelf].filter(
          book => book.id !== currentBook.id,
        ),
        [newBookShelf]: prevState[newBookShelf].concat([
          Object.assign(currentBook, { shelf: newBookShelf }),
        ]),
      }))
    }

    // making AJAX request to update changes on server
    update(currentBook.id, newBookShelf)

    // notifiying user
    if (currentBookShelf === 'none') {
      toast.success('Book added to self', {
        className: 'toast-class',
      })
    } else if (newBookShelf === 'none') {
      toast.success('Book removed from shelf', {
        className: 'toast-class',
      })
    } else {
      toast.success('Book moved', {
        className: 'toast-class',
      })
    }
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
      <>
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
          <Route
            path='/search'
            render={() => (
              <Search shelfChangeHandler={this.shelfChangeHandler} />
            )}
          />
          <Route path='/book' component={BookDetails} />
          <Redirect to='/' />
        </Switch>
      </>
    )
  }
}

// hot(module)(App) - enables hot reloading for component tree rooted at App
export default hot(module)(App)
