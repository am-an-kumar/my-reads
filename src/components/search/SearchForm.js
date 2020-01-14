import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SearchForm = ({ onChangeHandler, value }) => (
  <div className='search-books-bar'>
    <Link to='/'>
      <button className='close-search'>Close</button>
    </Link>
    <div className='search-books-input-wrapper'>
      <input
        type='text'
        placeholder='Search by title or author'
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  </div>
)

SearchForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default SearchForm
