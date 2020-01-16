import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'
import BookInfo from './BookInfo'
import { get } from '../../utils/BooksAPI'

class BookDetails extends Component {
  state = {
    loading: true,
    bookDetails: {},
  }

  componentDidMount() {
    const id = this.props.location.search.split('=')[1]
    get(id).then(data => {
      this.setState({
        loading: false,
        bookDetails: data,
      })
    })
  }

  render() {
    const { loading, bookDetails } = this.state

    return (
      <div id='book-details'>
        {loading ? <Loading /> : <BookInfo {...bookDetails} />}
      </div>
    )
  }
}

BookDetails.propTypes = {
  location: PropTypes.object,
}

export default BookDetails
