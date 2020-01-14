import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import { search } from '../../utils/BooksAPI'

class Search extends Component {
  state = {
    searchFieldValue: '',
    books: [],
    loading: false,
  }

  // handler for clear button in search form
  clearHandler = () => {
    this.setState({
      searchFieldValue: '',
      books: [],
      loading: false,
    })
  }

  inputChangeHandler = event => {
    // getting the value, triming spaces from start if any, and replacing multiple spaces with a single space
    let value = event.target.value
    value = value.trimStart()
    value = value.replace(/  +/g, ' ')

    // setting state to update the input field, can't wait for AJAX response before updating the input field
    this.setState({
      searchFieldValue: value,
      loading: true,
    })

    // making AJAX request to fetch book
    search(value).then(books => {
      // search returned matches
      if (Array.isArray(books)) {
        this.setState({
          books,
          loading: false,
        })
      }
      // if the response is an object indicating no matches found
      else {
        this.setState({
          books: [],
          loading: false,
        })
      }
    })
  }

  render() {
    const { searchFieldValue, books, loading } = this.state
    const { shelfChangeHandler } = this.props

    return (
      <div className='search-books'>
        <SearchForm
          value={searchFieldValue}
          onChangeHandler={this.inputChangeHandler}
          clearHandler={this.clearHandler}
        />
        <SearchResults
          books={books}
          searchFieldEmpty={searchFieldValue ? false : true}
          loading={loading}
          shelfChangeHandler={shelfChangeHandler}
        />
      </div>
    )
  }
}

Search.propTypes = {
  shelfChangeHandler: PropTypes.func.isRequired,
}

export default Search
