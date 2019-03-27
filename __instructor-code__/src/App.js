import React, { Component } from 'react';
import './App.css';
import hoc from './Hoc';
import Another from './Another';
import RenderProps from './RenderProps';

class App extends Component {

  state = {
    counter: 3
  }

  handleClick = () => {
    this.setState(function (prevState) {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  render() {
    return (
      <>
        <RenderProps hi={(bool, toggle) => (
          <div>
            <button onClick={toggle}>click me</button>
            {bool ? <div>hi there</div> : null}
            {/* {bool && <div>sup</div>} */}
          </div>
        )} />
        <RenderProps hi={(bool, toggle) => (
          <div onMouseEnter={toggle} onMouseLeave={toggle}>
            {bool ? 'hi' : 'bye'}
          </div>
        )} />
        <hr />
        <hr />
        <hr />

        <div>
          <Another color='green' />
          <Another color='red' />
          <Another color='blue' />
        </div>
        <h1>Joe's cool app</h1>
        <button onClick={this.handleClick}>
          My number is {this.state.counter}
        </button>
        <button onClick={this.props.toggle}>Toggle image</button>
        {
          this.props.bool ? (
            <img style={{ width: '50px' }} src="http://ihypoallergeniccats.com/wp-content/uploads/2016/03/hypoallergenic-cats-facts.jpg" alt="" />
          ) : null
        }
      </>
    );
  }
}

export default hoc(App);
