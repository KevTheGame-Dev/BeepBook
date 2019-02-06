import React, { Component } from 'react';
import './ChatBox.css'

import Message from '../../../Types/Message.js';
import MessageDisplay from '../MessageDisplay/MessageDisplay.js';
import HandleMessage from '../../../Services/MessageService.js';

class ChatBox extends Component {
    constructor(props){
        super(props);

        this.CreateMessage = this.CreateMessage.bind(this);
        this.state = {messages: []};
    }
    CreateMessage = (e) => {
        e.preventDefault();
        
        let message = new Message('user', document.getElementById('MessageInput').value);
        this.setState(prevState => ({
            messages: [...prevState.messages, message]
        }));
        HandleMessage(message, (response)=>{
            this.setState(prevState => ({
                messages: [...prevState.messages, response]
            }));
        });

        document.getElementById('MessageInput').value = '';
    }

    render() {
        return (
            <div className="ChatBox">
                <ul className="MessageList">
                    {this.state.messages.map((message) => 
                        <MessageDisplay key={message.id} value={message}/>
                    )}
                </ul>

                <form className="ChatBoxInput" onSubmit={this.CreateMessage}>
                    <input id="MessageInput" type="text" name="firstname" />
                </form>
            </div>    
        );
    }
}

export default ChatBox;