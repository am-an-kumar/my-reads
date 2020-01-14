import React from 'react'
import PropTypes from 'prop-types'
import Book from '../shared/Book'

const BookShelf = ({ heading, books, shelfChangeHandler }) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{heading}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {books.map(book => (
          <Book
            key={book.id}
            book={book}
            shelfChangeHandler={shelfChangeHandler}
          />
        ))}
      </ol>
    </div>
  </div>
)

BookShelf.propTypes = {
  heading: PropTypes.string.isRequired,
  books: PropTypes.array,
  shelfChangeHandler: PropTypes.func.isRequired,
}

export default BookShelf
