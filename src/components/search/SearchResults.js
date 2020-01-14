import React from 'react'
import PropTypes from 'prop-types'
import Book from '../shared/Book'

const SearchResults = ({ books }) => {
  return (
    <div className='search-books-results'>
      <ol className='books-grid'>
        {books.map(book => (
          <Book key={book.id} {...book} />
        ))}
      </ol>
    </div>
  )
}

SearchResults.propTypes = {
  books: PropTypes.array.isRequired,
}

export default SearchResults
