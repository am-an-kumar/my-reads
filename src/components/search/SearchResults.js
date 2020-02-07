import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../shared/Loading'
import Book from '../shared/Book'

const SearchResults = ({
  shelfBooks,
  books,
  searchFieldEmpty,
  loading,
  shelfChangeHandler,
}) => {
  const updatedBooks = books.map(book => {
    shelfBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf
      }
      return b
    })
    return book
  })

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
          {updatedBooks.map(book => (
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
  shelfBooks: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  searchFieldEmpty: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  shelfChangeHandler: PropTypes.func.isRequired,
}

export default SearchResults
