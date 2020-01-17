import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({ onChangeHandler, value }) => (
  <div className='search-books-input-wrapper'>
    <input
      type='text'
      placeholder='Search by title or author'
      onChange={onChangeHandler}
      value={value}
    />
  </div>
)

SearchInput.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default SearchInput
