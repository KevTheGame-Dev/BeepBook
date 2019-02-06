import Message from '../Types/Message.js';

const HandleMessage = (message, callback) => {
    let response = new Message('bot', 'No u')

    callback(response);
}

export default HandleMessage;