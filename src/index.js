import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import App from './components/App'
import '@babel/polyfill'
import './css/style.css'

// react-axe will run only in dev mode
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  // running the accessibility tests 1 second after the app is loaded
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <Router>
    <App />
    <ToastContainer
      draggablePercent={60}
      autoClose={4000}
      position={'bottom-right'}
    />
  </Router>,
  document.getElementById('root'),
)
