import React from 'react'
import PropTypes from 'prop-types'
import Book from '../shared/Book'

const SearchResults = ({
  books,
  searchFieldEmpty,
  loading,
  shelfChangeHandler,
}) => {
  return (
    <div className='search-books-results'>
      {searchFieldEmpty ? (
        <p>Search for something</p>
      ) : loading ? (
        <p>Fetching book details</p>
      ) : books.length === 0 ? (
        <p>No match found</p>
      ) : (
        <ol className='books-grid'>
          {books.map(book => (
            <Book
              key={book.id}
              book={book}
              shelfChangeHandler={shelfChangeHandler}
            />
          ))}
        </ol>
      )}
    </div>
  )
}

SearchResults.propTypes = {
  books: PropTypes.array.isRequired,
  searchFieldEmpty: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  shelfChangeHandler: PropTypes.func.isRequired,
}

export default SearchResults
