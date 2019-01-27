import React from 'react';

const ErrorContainer = props => {
  let ErrorContainer = null;

  if (props.invalid && props.touched) {
    ErrorContainer = (
      <div className="errorMessage">
        <p>Please enter a valid value.</p>
      </div>
    );
  }

  return ErrorContainer;
};

export default ErrorContainer;
