import React from 'react';

type myState = { hasError: boolean };

class ErrorButton extends React.Component {
  state: myState = { hasError: false };

  throwError = () => {
    throw new Error('Test error from Err button');
  };

  componentDidUpdate = () => {
    if (this.state.hasError) {
      this.throwError();
    }
  };

  render() {
    return (
      <button
        className="error_btn"
        onClick={() => {
          this.setState({ hasError: true });
        }}
      >
        Err
      </button>
    );
  }
}

export default ErrorButton;
