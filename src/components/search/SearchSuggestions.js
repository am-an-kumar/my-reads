import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchSuggestions extends Component {
  componentDidMount() {
    document.body.style.overflowY = 'hidden'
  }

  componentWillMount() {
    document.body.style.overflowY = 'unset'
  }

  render() {
    const { filteredKeywords, onSelectChangeHandler } = this.props
    return (
      <select
        defaultValue=''
        size={10}
        className='keyword-dropdown'
        onChange={event => onSelectChangeHandler(event.target.value)}
        onClick={event => onSelectChangeHandler('')}
        aria-label='Choose keyword to search books'
      >
        {filteredKeywords.map(keyword => (
          <option key={keyword} value={keyword}>
            {keyword}
          </option>
        ))}
      </select>
    )
  }
}
SearchSuggestions.propTypes = {
  filteredKeywords: PropTypes.array.isRequired,
  onSelectChangeHandler: PropTypes.func.isRequired,
}

export default SearchSuggestions
