import React, { Component } from 'react';
import './ChatPage.css';

import ChatBox from './ChatBox/ChatBox.js';

class ChatPage extends Component {
    render() {
        return (
            <div className="ChatPage">
                <ChatBox />
                <div className="placeholder">
                    <h1>BOOKS GO HERE</h1>
                </div>
            </div>
        );
    }
}

export default ChatPage;