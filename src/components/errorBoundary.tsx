import { Component, CSSProperties, ErrorInfo } from "react";

interface Props {}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch?(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={rootStyle}>
          <p style={textStyle}>Something went wrong :( please reload page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export function testErrorBoundary() {
  const nullVariable: any = null;
  console.log(nullVariable.somethingThatDoesNotExist);
}

const rootStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const textStyle: CSSProperties = {
  textAlign: "center",
};

export default ErrorBoundary;
