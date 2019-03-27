import React, { Component } from 'react'

export default class RenderProps extends Component {
    state = { bool: true }
    toggle = () => this.setState({bool: !this.state.bool})
    render() {
        return (
            <div>
                {this.props.render(this.state.bool, this.toggle)}
            </div>
        )
    }
}