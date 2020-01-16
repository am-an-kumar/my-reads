import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from '../shared/Book'
import Loading from '../shared/Loading'

const colorEncoding = {
  'currently reading': 'yellow',
  read: 'green',
  'want to read': 'dodgerblue',
}

const BookShelf = ({ heading, books, shelfChangeHandler, loading }) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>
      {heading}
      <span
        className='shelf-indicator'
        style={{
          backgroundColor: colorEncoding[heading.toLowerCase()],
          display: 'inline-block',
          marginLeft: '10px',
          marginBottom: '2px',
          borderRadius: '0px',
        }}
      ></span>
    </h2>
    <div className='bookshelf-books'>
      {loading ? (
        <Loading />
      ) : books.length === 0 ? (
        <p className='info-message'>
          No books in here. <Link to='/search'>Add books</Link>
        </p>
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
