import React from 'react';

import Key from './Key';

export default class Accordian extends React.Component{

    static defaultProps = {
        sections: []
    }

    keys = this.props.sections.map(key => {
      return <Key
        title={key.title}
        content={key.content}
      />
    })

    // handleClick = (e) => {

    //    this.setState({
    //        open: true
    //    }) 
    // }


    render(){
        return <>
                <ul>
                  {this.keys}
                </ul>
        </>
    }
}