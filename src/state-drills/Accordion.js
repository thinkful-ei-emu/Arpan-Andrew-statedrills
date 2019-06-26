import React from 'react';

export default class Accordian extends React.Component{

    static defaultProps = {
        sections: []
    }

    state = {
      currentActive: null
    }

    handleClick = e => {      
      this.setState({
        currentActive: e.target.id
      });
    }  

    render(){
      const keys = this.props.sections.map((key, index) => {
        return <li key={index}>
          <button id={index.toString()} onClick={this.handleClick}>{key.title}</button>
          {(this.state.currentActive === index.toString()) && <p>{key.content}</p>}
        </li>
      });

      return (
        <ul>
          {keys}
        </ul>
      )
    }
}