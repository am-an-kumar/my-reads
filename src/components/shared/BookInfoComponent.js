import React from 'react'
import PropTypes from 'prop-types'

const BookInfoComponent = ({ heading, value }) => (
  <div>
    <span className='key'>{`${heading}: `}</span>
    <span className='value'>{value}</span>
  </div>
)

BookInfoComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BookInfoComponent
