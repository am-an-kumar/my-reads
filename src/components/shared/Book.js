import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {
  const { book, shelfChangeHandler } = props
  const { title, authors, imageLinks, shelf } = book

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
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
          <div className='book-shelf-changer'>
            <select
              onChange={event => shelfChangeHandler(book, event.target.value)}
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
          {authors ? authors.join(', ') : 'Author Unknown'}
        </div>
        <div>{shelf}</div>
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
    shelf: PropTypes.string.isRequired,
  }),
  shelfChangeHandler: PropTypes.func.isRequired,
}

export default Book