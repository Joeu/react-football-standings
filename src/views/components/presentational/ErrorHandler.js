import React from 'react';

/**
 * Displayed when the user enters an invalid code
 * @param {*} props 
 */
const ErrorHandler = (props) => {
  return (
    <div>
      {props.errorMessage}
    </div>
  )
}

export default ErrorHandler;