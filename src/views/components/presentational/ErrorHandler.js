import React from 'react';

const ErrorHandler = (props) => {
  return (
    <div>
      {props.errorMessage}
    </div>
  )
}

export default ErrorHandler;