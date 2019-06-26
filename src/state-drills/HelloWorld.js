import React from 'react';

export default class HelloWorld extends React.Component {

  state = {
    who: 'world'
  };

  handleClick = (e) => {
    let who = '';


    if (e.target.id === 'world-button') who = 'World';
    else if (e.target.id ==='friend-button') who = 'Friend';
    else if (e.target.id === 'react-button') who = 'React';

    this.setState({
      who
    });
  }

  render() {
    return <>
      <div>
        <p>Hello, {this.state.who}!</p>
        <button id='world-button' onClick={this.handleClick} type='button'>World</button>
        <button id='friend-button' onClick={this.handleClick} type='button'>Friend</button>
        <button id='react-button' onClick={this.handleClick} type='button'>React</button>
      </div>
    </>
  }
}