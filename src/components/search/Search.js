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
    keywords: [
      'android',
      'art',
      'artificial intelligence',
      'astronomy',
      'austen',
      'baseball',
      'basketball',
      'bhagat',
      'biography',
      'brief',
      'business',
      'camus',
      'cervantes',
      'christie',
      'classics',
      'comics',
      'cook',
      'cricket',
      'cycling',
      'desai',
      'design',
      'development',
      'digital marketing',
      'drama',
      'drawing',
      'dumas',
      'education',
      'everything',
      'fantasy',
      'film',
      'finance',
      'first',
      'fitness',
      'football',
      'future',
      'games',
      'gandhi',
      'homer',
      'horror',
      'hugo',
      'ibsen',
      'journey',
      'kafka',
      'king',
      'lahiri',
      'larsson',
      'learn',
      'literary fiction',
      'make',
      'manage',
      'marquez',
      'money',
      'mystery',
      'negotiate',
      'painting',
      'philosophy',
      'photography',
      'poetry',
      'production',
      'programming',
      'react',
      'redux',
      'river',
      'robotics',
      'rowling',
      'satire',
      'science fiction',
      'shakespeare',
      'singh',
      'swimming',
      'tale',
      'thrun',
      'time',
      'tolstoy',
      'travel',
      'ultimate',
      'virtual reality',
      'web development',
      'ios',
    ],
    filteredKeywords: [],
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
    this.setState(prevState => {
      return {
        searchFieldValue: value,
        loading: true,
        filteredKeywords: prevState.keywords.filter(keyword =>
          keyword.includes(value.toLowerCase()),
        ),
      }
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
    const { searchFieldValue, books, loading, filteredKeywords } = this.state
    const { shelfChangeHandler } = this.props

    return (
      <div className='search-books'>
        <SearchForm
          value={searchFieldValue}
          onChangeHandler={this.inputChangeHandler}
          clearHandler={this.clearHandler}
          filteredKeywords={filteredKeywords}
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
