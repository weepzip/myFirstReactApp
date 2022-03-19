import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.jsx';
import MessagesContainer from './Messages/MessagesContainer';
import Preloader from '../../common/Preloader/Preloader';

function Dialogs(props) {

  const dialogElements = props.store.getState().dialogsPage.dialogs.map( dialog => {
    return <Dialog dialog={dialog} />
  });

  /* const messageElements = props.state.messages.map( message => {
    return <Messages state={message} />
  }); */

  return (
    <>
      <Preloader/>
      <div className={s.dialogs_wrap}>
        <div className={s.dialogs}>
          { dialogElements }
        </div>
        <div className={s.messages_wrap}>
          <MessagesContainer store={props.store} />
        </div>
      </div>
    </>
  )
}

export default Dialogs;