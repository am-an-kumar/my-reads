import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'

const SearchForm = ({
  onChangeHandler,
  value,
  clearHandler,
  filteredKeywords,
}) => (
  <div id='form-wrapper'>
    <div className='search-books-bar'>
      <Link to='/'>
        <button className='close-search'>Close</button>
      </Link>
      <SearchInput
        onChangeHandler={onChangeHandler}
        value={value}
        filteredKeywords={filteredKeywords}
      />
      <button className='clear-search' onClick={clearHandler}>
        Clear
      </button>
    </div>

    {filteredKeywords.length !== 0 && (
      <select size={10} className='keyword-dropdown'>
        {filteredKeywords.map(keyword => (
          <option key={keyword} value={keyword}>
            {keyword}
          </option>
        ))}
      </select>
    )}
  </div>
)

SearchForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  clearHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  filteredKeywords: PropTypes.array.isRequired,
}

export default SearchForm
