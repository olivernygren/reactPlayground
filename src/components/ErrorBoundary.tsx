import React, { Component, CSSProperties, ErrorInfo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  navigateBack() {
    this.props.history.goBack()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={rootStyle}>
          <h4 style ={textStyle}>Error 404 - Side could not be found. Have a nice Hans</h4>
          <button onClick={this.navigateBack}>Gå tillbaka</button>
        </div>
      )
    }
    return this.props.children;
  }
}

const rootStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const textStyle: CSSProperties = {
  textAlign: 'center'
}

export default withRouter(ErrorBoundary);