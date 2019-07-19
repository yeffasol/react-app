import React, {Component} from "react";
import "./Chats.css";
import store from "../store";
import {deleteMessage} from "../actions";

const handleDeleteClick = (number) => {
    const state = store.getState();
    const activeUserId = state.activeUserId;
    store.dispatch(deleteMessage(number, activeUserId));
};

const Chat = ({message, number}) => {
    const {text, is_user_msg} = message;
    return (
        <span className={`Chat${is_user_msg ? " is-user-msg" : ""}`}>
            <button type="button" className="Chat__delete"><span role="img" aria-label="delete"
                                                                 onClick={() => handleDeleteClick(number)}>❌</span></button>
            <span className="Chat__text">{text}</span>
        </span>
    );
};

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };

    render() {
        return (
            <div className="Chats" ref={this.chatsRef}>
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number} number={message.number}/>
                ))}
            </div>
        );
    }
}

export default Chats;
