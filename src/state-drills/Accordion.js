import React from 'react';

export default class Accordian extends React.Component{

    static defaultProps = {
        sections: []
    }

    state = {
      currentActive: null
    }

    handleClick = e => {
      if (e.target.tagName !== 'BUTTON') return;

      this.setState({
        currentActive: e.currentTarget.id
      });
    }  

    render(){
      const keys = this.props.sections.map((key, index) => {
        return <li id={index.toString()} onClick={this.handleClick}>
          <button>{key.title}</button>
          {(this.state.currentActive === index.toString()) && <p>{key.content}</p>}
        </li>
      });

      return <>
        <ul>
          {keys}
        </ul>
      </>
    }
}