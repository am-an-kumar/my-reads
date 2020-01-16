import React from 'react'
import PropTypes from 'prop-types'

const BookInfo = ({
  title,
  authors,
  imageLinks,
  description,
  categories,
  language,
  publisher,
  publishedDate,
  infoLink,
  previewLink,
  pageCount,
}) => {
  return (
    <div id='book-info'>
      <div
        className='book-basic-info'
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
        <div className='book-title'>{title}</div>
        <div className='book-authors'>
          {authors ? authors.join(', ') : 'Author Details Unavailable'}
        </div>
      </div>
      <div className='book-detailed-info'>
        <div className='book-authors'>
          {categories ? categories.join(', ') : 'Category Details Unavailable'}
        </div>
        <div>{description}</div>
        <div>{publisher}</div>
        <div>{pageCount}</div>
        <div>{publishedDate}</div>
        <div>{language}</div>
        <div>{previewLink}</div>
        <div>{infoLink}</div>
      </div>
    </div>
  )
}

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  categories: PropTypes.array,
  imageLinks: PropTypes.object,
  description: PropTypes.string,
}

export default BookInfo
