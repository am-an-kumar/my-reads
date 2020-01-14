import React from 'react'
import PropTypes from 'prop-types'
import Book from '../shared/Book'
import Loading from '../shared/Loading'

const BookShelf = ({ heading, books, shelfChangeHandler, loading }) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{heading}</h2>
    <div className='bookshelf-books'>
      {loading ? (
        <Loading />
      ) : books.length === 0 ? (
        <p>No books in here</p>
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
  </div>
)

BookShelf.propTypes = {
  heading: PropTypes.string.isRequired,
  books: PropTypes.array,
  shelfChangeHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default BookShelf
