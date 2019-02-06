const uuidv4 = require('uuid/v4');

class Message{
    constructor(author, content){
        this.id = uuidv4();
        this.author = author;
        this.content = content;
        this.datetime = new Date();
    }

    toString(){
        return '{ id: ' + this.id + ', author: ' + this.author + ', message: ' + this.content + ', datetime:' + this.datetime + '}';
    }
}

export default Message;