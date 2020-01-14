import React from 'react'
import PropTypes from 'prop-types'
import Book from '../shared/Book'

const SearchResults = ({ books }) => {
  return (
    <div className='search-books-results'>
      <ol className='books-grid'>
        {books.length > 0
          ? books.map(book => (
              <li key={book.id}>
                {`${book.title}; ${book.authors.join(', ')}; ${
                  book.imageLinks ? book.imageLinks['thumbnail'] : null
                }}`}
              </li>
            ))
          : null}
      </ol>
    </div>
  )
}

SearchResults.propTypes = {
  books: PropTypes.array.isRequired,
}

export default SearchResults
