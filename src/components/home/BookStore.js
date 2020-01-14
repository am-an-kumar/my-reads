import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const BookList = ({
  currentlyReading,
  read,
  wantToRead,
  shelfChangeHandler,
  loading,
}) => (
  <div className='list-books-content'>
    <div>
      <BookShelf
        heading='Currently Reading'
        books={currentlyReading}
        shelfChangeHandler={shelfChangeHandler}
        loading={loading}
      />
      <BookShelf
        heading='Read'
        books={read}
        shelfChangeHandler={shelfChangeHandler}
        loading={loading}
      />
      <BookShelf
        heading='Want to Read'
        books={wantToRead}
        shelfChangeHandler={shelfChangeHandler}
        loading={loading}
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
  loading: PropTypes.bool.isRequired,
}

export default BookList
