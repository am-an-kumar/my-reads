/* eslint-disable jsx-a11y/no-onchange */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// object to create color circle based on the shelf of book
const colorEncoding = {
  wantToRead: 'dodgerblue',
  currentlyReading: 'yellow',
  read: 'green',
  none: 'red',
}

const Book = props => {
  const { book, shelfChangeHandler } = props
  const { title, authors, imageLinks, shelf } = book

  return (
    <li>
      <div className='book'>
        <div className='book-top book-link'>
          <Link
            to={`/book?id=${book.id}`}
            aria-label='Get more info on ${book.title}'
          >
            <div
              className='book-cover'
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  imageLinks ? imageLinks.thumbnail : null
                })`,
              }}
            >
              {imageLinks ? '' : 'No cover found'}
            </div>
          </Link>

          <div className='book-shelf-changer'>
            <select
              onChange={event => shelfChangeHandler(book, event.target.value)}
              value={shelf || 'none'}
              aria-label='Choose self to move book to'
            >
              <option value='move' disabled>
                Move to...
              </option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>
          {authors ? authors.join(', ') : 'Author Details Unavailable'}
        </div>
        <div className='shelf-indicator-container'>
          <span
            className='shelf-indicator'
            style={{
              backgroundColor: shelf
                ? colorEncoding[shelf]
                : colorEncoding['none'],
            }}
          ></span>
        </div>
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }),
    shelf: PropTypes.string,
    id: PropTypes.string.isRequired,
  }),
  shelfChangeHandler: PropTypes.func.isRequired,
}

export default Book
