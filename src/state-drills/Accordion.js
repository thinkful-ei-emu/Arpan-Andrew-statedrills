import React from 'react';

export default class Accordian extends React.Component{

    static defaultProps = {
        sections: [
            {title: '',
            content: ''
            }
        ]
    } 

    state = {
        sections: [
            {title: '',
            content: '',
            open: false
            }
        ] 
    }


    handleClick = (e) => {

       this.setState({
           open: true
       }) 
    }


    render(){
        return <>
                <ul>
                    <li>
                    <button onClick={this.handleClick} type="button">{this.state.title}</button>
                     <p>{this.state.content}</p>
                    </li>
                </ul>
        </>
    }
}