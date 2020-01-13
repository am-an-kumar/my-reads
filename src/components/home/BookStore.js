import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const BookList = ({ currentlyReading, read, wantToRead }) => (
  <div className='list-books-content'>
    <div>
      <BookShelf heading='Currently Reading' books={currentlyReading} />
      <BookShelf heading='Read' books={read} />
      <BookShelf heading='Want to Read' books={wantToRead} />
    </div>
  </div>
)

// This proptype validation needs to be a bit more specific????????
BookList.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
}

export default BookList
