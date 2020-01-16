import React from 'react'
import PropTypes from 'prop-types'
import BookInfoComponent from './BookInfoComponent'

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
      <div id='book-basic-info'>
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
      <div id='book-detailed-info'>
        {categories && (
          <BookInfoComponent
            heading='categories'
            value={categories.join(', ')}
          />
        )}
        {description && (
          <BookInfoComponent heading='description' value={description} />
        )}
        {publisher && (
          <BookInfoComponent heading='publisher' value={publisher} />
        )}
        {publishedDate && (
          <BookInfoComponent heading='published date' value={publishedDate} />
        )}
        {language && <BookInfoComponent heading='language' value={language} />}
        {pageCount && (
          <BookInfoComponent heading='page count' value={pageCount} />
        )}
        <a target={'_blank'} href={infoLink} className='relevant-links'>
          Click for info
        </a>
        <a target={'_blank'} href={previewLink} className='relevant-links'>
          Click for preview
        </a>
      </div>
    </div>
  )
}

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  categories: PropTypes.array,
  imageLinks: PropTypes.object,
  language: PropTypes.string,
  infoLink: PropTypes.string,
  previewLink: PropTypes.string,
  publisher: PropTypes.string,
  publishedDate: PropTypes.string,
  description: PropTypes.string,
  pageCount: PropTypes.number,
}

export default BookInfo
