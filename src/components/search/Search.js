import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import { search } from '../../utils/BooksAPI'

class Search extends Component {
  state = {
    searchFieldValue: '',
    books: [],
  }

  inputChangeHandler = event => {
    let value = event.target.value
    value = value.trim()
    this.setState({
      searchFieldValue: value,
    })
    search(value).then(books => {
      // search returned matches
      if (Array.isArray(books)) {
        this.setState({
          books,
        })
      } else {
        this.setState({
          books: [],
        })
      }
    })
  }

  render() {
    const { searchFieldValue, books } = this.state

    return (
      <div className='search-books'>
        <SearchForm
          value={searchFieldValue}
          onChangeHandler={this.inputChangeHandler}
        />
        <SearchResults books={books} />
      </div>
    )
  }
}

export default Search
