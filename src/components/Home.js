import React from 'react'
import Header from './Header'
import BookStore from './BookStore'

const Home = props => (
  <div className='list-books'>
    <Header />
    <BookStore {...props} />
  </div>
)

export default Home
