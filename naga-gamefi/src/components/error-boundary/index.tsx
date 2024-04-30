import React, { ErrorInfo, ReactNode } from 'react';

interface State {
  hasError: boolean;
  errorInfo: string;
}

interface Props {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false, errorInfo: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  render() {
    // Use destructuring assignment
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;

    // Return children components in case of no error
    return (
      <>
        {children}
        {hasError && (
          <div>
            <h2>{errorInfo}</h2>
            <button type="button" onClick={() => this.setState({ hasError: false })}>
              Try again?
            </button>
          </div>
        )}
      </>
    );
  }
}

export default ErrorBoundary;
