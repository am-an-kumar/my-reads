import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SearchSuggestions from './SearchSuggestions'

const SearchForm = ({
  onChangeHandler,
  onKeyPressHandler,
  onSelectChangeHandler,
  value,
  clearHandler,
  filteredKeywords,
}) => (
  <div id='form-wrapper'>
    <div className='search-books-bar'>
      <Link to='/'>
        <button className='close-search'>Close</button>
      </Link>
      <div className='search-books-input-wrapper'>
        <input
          type='text'
          placeholder='Search by title or author'
          onChange={event => onChangeHandler(event.target.value)}
          value={value}
          onKeyDown={onKeyPressHandler}
        />
      </div>
      <button className='clear-search' onClick={clearHandler}>
        Clear
      </button>
    </div>
    {filteredKeywords.length !== 0 && (
      <SearchSuggestions
        filteredKeywords={filteredKeywords}
        onSelectChangeHandler={onSelectChangeHandler}
      />
    )}
  </div>
)

SearchForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  onKeyPressHandler: PropTypes.func.isRequired,
  onSelectChangeHandler: PropTypes.func.isRequired,
  clearHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  filteredKeywords: PropTypes.array.isRequired,
}

export default SearchForm
