import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../shared/Loading'
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
        <p className='info-message'>Search for something</p>
      ) : loading ? (
        <Loading />
      ) : books.length === 0 ? (
        <p className='info-message'>No match found</p>
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
