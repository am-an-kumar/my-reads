import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = ({ heading, books }) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{heading}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {books.map(book => (
          <Book key={book.id} {...book} />
        ))}
      </ol>
    </div>
  </div>
)

BookShelf.propTypes = {
  heading: PropTypes.string.isRequired,
  books: PropTypes.array,
}

export default BookShelf
