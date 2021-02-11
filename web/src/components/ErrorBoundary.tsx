import React, { Component } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode[];
}

interface ErrorBoundaryState {
  isError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      isError: false,
      error: new Error(),
    };
  }

  componentDidCatch(error: Error | null) {
    this.setState({ isError: true, error });
  }

  static getDerivedStateFromError = (error: Error) => {
    return { isError: true };
  };

  render() {
    const { isError } = this.state;
    return isError ? (
      <div className="error-container">
        <h1>Something Went Wrong!</h1>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
