import React from 'react';

export default class Key extends React.Component {

  static defaultProps = {
    title: 'Title',
    content: 'Content'
  }

  state = {
    open: false
  }

  handleClick = e => {
    this.setState({
      open: true
    })
  }

  render() {
    return <>
      <li>
        <button onClick={this.handleClick}>{this.props.title}</button>
        {this.state.open && <p>{this.props.content}</p>}
      </li>
    </>
  }
}