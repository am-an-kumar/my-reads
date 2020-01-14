import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ title, authors, imageLinks }) => (
  <li>
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : null})`,
          }}
        >
          {imageLinks ? '' : 'No cover found'}
        </div>
        <div className='book-shelf-changer'>
          <select>
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
      {/* <div className='book-authors'>{authors.join(', ')}</div> */}
    </div>
  </li>
)

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  imageLinks: PropTypes.shape({
    smallThumbnail: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }),
}

export default Book
