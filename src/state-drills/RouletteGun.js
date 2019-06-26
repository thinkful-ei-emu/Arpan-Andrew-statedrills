import React from 'react';

export default class RouletteGun extends React.Component {

  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinning: false,
    message: 'Play Roulette!!!',
    result: ''
  }

  pullTheTrigger = (e) => {

    this.setState({
      chamber: Math.ceil(Math.random() * 8),
      spinning: true,
      message: 'Spinning the chamber and pulling the trigger...',
      result: ''
    });


    let timeout = setTimeout(() => {
      let result = '';

      if (this.state.chamber === RouletteGun.defaultProps.bulletInChamber) result = 'BANG!!!';
      else result = 'You\'re safe...for now...';

      this.setState({
        spinning: false,
        message: 'Play Roulette!!!',
        result
      });

      clearTimeout(timeout);
    }, 2000);
  }

  render() {
    return <>
      <div>
        <p>{this.state.message}</p>
        <p>{this.state.result}</p>
        <button id='trigger' onClick={this.pullTheTrigger}>Pull the Trigger.</button>
      </div>
    </>
  }
}