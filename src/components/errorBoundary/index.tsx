import React, { Component, ErrorInfo } from "react";
import "./errorBoundary.module.css";

class ErrorBoundary extends Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-overlay">
          <div className="error-boundary-image"></div>
          <h2 className="error-boundary-text">Sormething went wrong</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
