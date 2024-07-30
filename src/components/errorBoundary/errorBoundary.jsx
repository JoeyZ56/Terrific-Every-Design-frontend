import { Component } from "react";
import propTypes from "prop-types";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  errorComponent: propTypes.element.isRequired,
  children: propTypes.element.isRequired,
};

export default ErrorBoundary;
