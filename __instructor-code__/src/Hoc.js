import React, { Component } from 'react';

export default function (WrappedComponent) {
  return class extends Component {
    state = {
      bool: true
    }
    toggle = () => this.setState({ bool: !this.state.bool })
    render() {
      return <WrappedComponent {...this.props} bool={this.state.bool} toggle={this.toggle} />
    }
  }
}