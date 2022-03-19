import React from 'react';
import s from './Dialog.module.css';

function Dialog(props) {
  return (
    <div className={s.dialog}>
      <div className={s.image_container}>
        <img className={s.image} src={props.dialog.imgLink} alt="user"/>
      </div>
      <div className={s.name_container}>
        <h4> { props.dialog.name } </h4>
      </div>
    </div>
  )
}

export default Dialog;