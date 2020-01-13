import React from 'react'
import Header from './Header'
import BookStore from './BookStore'
import AddBooksButton from './AddBooksButton'

const Home = props => (
  <div className='list-books'>
    <Header />
    <BookStore {...props} />
    <AddBooksButton />
  </div>
)

export default Home
