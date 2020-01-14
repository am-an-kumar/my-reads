import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import BookStore from './BookStore'
import AddBooksButton from './AddBooksButton'

const Home = ({ read, currentlyReading, wantToRead, shelfChangeHandler }) => (
  <div className='list-books'>
    <Header />
    <BookStore
      read={read}
      currentlyReading={currentlyReading}
      wantToRead={wantToRead}
      shelfChangeHandler={shelfChangeHandler}
    />
    <AddBooksButton />
  </div>
)

Home.propTypes = {
  read: PropTypes.array.isRequired,
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  shelfChangeHandler: PropTypes.func.isRequired,
}

export default Home
