import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const BookList = ({
  currentlyReading,
  read,
  wantToRead,
  shelfChangeHandler,
}) => (
  <div className='list-books-content'>
    <div>
      <BookShelf
        heading='Currently Reading'
        books={currentlyReading}
        shelfChangeHandler={shelfChangeHandler}
      />
      <BookShelf
        heading='Read'
        books={read}
        shelfChangeHandler={shelfChangeHandler}
      />
      <BookShelf
        heading='Want to Read'
        books={wantToRead}
        shelfChangeHandler={shelfChangeHandler}
      />
    </div>
  </div>
)

// This proptype validation needs to be a bit more specific????????
BookList.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  shelfChangeHandler: PropTypes.func.isRequired,
}

export default BookList
