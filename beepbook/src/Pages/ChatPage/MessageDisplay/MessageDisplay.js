import React, { Component } from 'react';
import './MessageDisplay.css'

import Message from '../../../Types/Message.js';

class MessageDisplay extends Component {
    constructor(props){
        super(props);

        this.message = props.value;
    }

    render() {
        let messageClasses = 'Message';
        if(this.message.author === 'user'){
            messageClasses += ' UserMessage';
        }
        else if(this.message.author === 'bot'){
            messageClasses += ' BotMessage';
        }
        
        return (
            <li className = {messageClasses}>
                <div>
                    {this.message.content}
                </div>
            </li>   
        );
    }
}

export default MessageDisplay;