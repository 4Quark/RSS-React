import { useEffect, useState } from 'react';
import React from 'react';

function ErrorButton() {
  const [error, setError] = useState(false);

  const throwError = () => {
    throw new Error('Test error from Err button');
  };

  useEffect(() => {
    if (error) {
      throwError();
    }
  });

  return (
    <button
      className="error_btn"
      onClick={() => {
        setError(true);
      }}
    >
      Err
    </button>
  );
}

export default ErrorButton;
