import React from 'react';

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
