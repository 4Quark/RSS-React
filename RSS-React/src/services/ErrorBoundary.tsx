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
    console.error(`[Error Boundary] caught error: ${error.message}`);
    console.error('ErrorBoundary:', error);
  }
  // public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  //   console.error('Uncaught error:', error, errorInfo);
  // }

  public render() {
    if (this.state.hasError) {
      return (
        <section>
          <div className="container column">
            <h2>Sorry... there was an error</h2>
            <button
              className="reload_button"
              onClick={() => {
                location.reload();
              }}
            >
              Refresh page
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
