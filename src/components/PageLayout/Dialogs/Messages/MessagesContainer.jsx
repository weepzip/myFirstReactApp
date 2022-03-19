import React from "react";
import Message from "./Message/Message";
import Messages from "./Messages";
import {connect} from "react-redux";
import { addNewMessageActionCreater, updateNewMessageTextActionCreater } from "../../../../redux/dialogsReduser";

/* function MessagesContainer(props) {
  const messageElements = props.store.getState().dialogsPage.messages.map((message) => {
    const user = props.store.getState().dialogsPage.dialogs.filter(
      (dialog) => dialog.id === message.user_id
    );
    return <Message user={user[0]} message={message} />;
  });

  const changeMessageText = (text) => {
    props.store.dispatch( updateNewMessageTextActionCreater(text) );
  };

  const addNewMessage = () => {
    props.store.dispatch( addNewMessageActionCreater() );
  };

  return (
    <Messages
      addNewMessage={addNewMessage}
      changeMessageText={changeMessageText}
      messages={messageElements}
      newMessageText={props.store.getState().dialogsPage.newMessageText}
    />
  );
} */

let mapStateToProps = (state) => {
  const messageElements = state.dialogsPage.messages.map((message) => {
    const user = state.dialogsPage.dialogs.filter(
      (dialog) => dialog.id === message.user_id
    );
    return <Message user={user[0]} message={message} />;
  });
  return {
    messages: messageElements,
    newMessageText: state.dialogsPage.newMessageText, 
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: () => {
      dispatch(addNewMessageActionCreater());
    },
    changeMessageText: (text) => {
      dispatch( updateNewMessageTextActionCreater(text) );
    }
  }
}

const  MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;