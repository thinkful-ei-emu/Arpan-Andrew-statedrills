import React from 'react';

export default class Bomb extends React.Component{

    state = {
        count: 0,
        message: 'tick'
    };

    componentDidMount(){
        let interval = setInterval(() => {
            let newMessage = '';
            let newCount = this.state.count + 1
            if (newCount >= 8) {
                newMessage = 'BOOM!!!!';
                clearInterval(interval);
            }
            else if( newCount % 2 === 0){
                newMessage = 'tick';
            }
            else if( newCount % 2 !== 0){
                newMessage = 'tock';
            }
            this.setState({
                count: newCount,
                message: newMessage
            })
        }, 1000);
    }

    render(){
        return <>
        <div>
            <p>{this.state.message}</p>
        </div>
        </>
    }
}