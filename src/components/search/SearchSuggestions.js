import React from 'react'
import PropTypes from 'prop-types'

const SearchSuggestions = ({ filteredKeywords, onSelectChangeHandler }) => (
  <select
    value=''
    size={10}
    className='keyword-dropdown'
    onChange={event => onSelectChangeHandler(event.target.value)}
  >
    {filteredKeywords.map(keyword => (
      <option key={keyword} value={keyword}>
        {keyword}
      </option>
    ))}
  </select>
)

SearchSuggestions.propTypes = {
  filteredKeywords: PropTypes.array.isRequired,
  onSelectChangeHandler: PropTypes.func.isRequired,
}

export default SearchSuggestions
