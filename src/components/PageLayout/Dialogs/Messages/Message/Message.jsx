import React from "react";
import s from "./Message.module.css";

function Message(props) {
  return (
    <div className={s.message}>
      <div className={s.image_container}>
        <img className={s.image} src={props.user.imgLink} alt="user"/>
      </div>
      <div className={s.message_container}>
        <p>
          { props.message.message }
        </p>
      </div>
    </div>
  )
}

export default Message;