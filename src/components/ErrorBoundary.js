import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// higher order component that renders fallback UI in case of error and the normal UI if all is Okay
class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  //   this gets invoked if there is an error in any component rendered inside this error boundary
  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div id='error-container'>
          <p>Oops!!! Something went wrong. </p>
          <Link to='/'>{"Let's go home"}</Link>
        </div>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.array,
}
export default ErrorBoundary
