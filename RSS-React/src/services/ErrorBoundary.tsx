import React from 'react';
import dont_panic from './../assets/dont_panic.png';

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error) {
    console.error('ErrorBoundary:', error);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <section>
          <h2>Sorry... there was an error</h2>
          <img className="dont_panic" src={dont_panic} alt="Don't panic" />
          <br />
          <button
            className="reload_button"
            onClick={() => {
              location.reload();
            }}
          >
            Refresh page
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
