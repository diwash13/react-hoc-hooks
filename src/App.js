import React, { Component } from 'react';
import './App.css';
import hoc from './Hoc';
import Another from './Another'
import RenderProps from './RenderProps'

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
        <RenderProps render={(bool, toggle) => (
          <div>
            <button onClick={toggle} >Click Me</button>
            {bool ? <div>hi there</div> : null }
          </div>
        )} />
        <RenderProps render={(bool, toggle) => (
          <div onMouseEnter={toggle} onMouseLeave={toggle}>
            {bool ? 'hi' : 'bye'}
          </div>
        )} />
        <hr/>
        <hr/>
        <hr/>
        <div>
          <Another />
        </div>
        <h1>Joe's cool app</h1>
        <button onClick={this.handleClick}>
          My number is {this.state.counter}
        </button>
        <button onClick={this.props.toggle}>Toggle image</button>
        {
          this.props.bool ? (
            <img style={{ width: '200px' }} src="https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/puppy-vomiting_canna-pet-1024x682.jpg" alt="" />
          ) : null
        }
      </>
    );
  }
}

export default hoc(App);
