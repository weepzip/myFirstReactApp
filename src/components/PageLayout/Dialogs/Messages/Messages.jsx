import React from "react";
import s from './Messages.module.css';

function Messages(props) {

  const onUpdateMessageText = (e) => {
    props.changeMessageText(e.target.value);
  };

  const onAddNewMessage = () => {
    props.addNewMessage();
  };

  return (
    <React.Fragment>
      <div className={s.new_message}>
        <textarea
          className={s.message_area}
          onChange={onUpdateMessageText}
          value={props.newMessageText}
        />
        <input
          type="button"
          className={s.send_message}
          onClick={onAddNewMessage}
          value="Send"
        />
      </div>
      <div className={s.messages}>{props.messages}</div>
    </React.Fragment>
  );
}

export default Messages;