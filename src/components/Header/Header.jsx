import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

function Header(props) {
  return (
    <div id={s.header}>
      <div id={s.header_wrap}>
        <div id={s.logo_wrap}>
          <div id={s.logo}>
            <img id={s.image_logo} src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3e/3e885cb8dbec6bd909186feb3c83ad70ac86034c_medium.jpg' title='weepzip' alt='weepzip'></img>
          </div>
          <div id={s.logo_name}>
            <h1>weepzip</h1>
          </div>
        </div>
        <div className={s.login_wrapper}>
          <NavLink to={`/profile/${props.auth.userId}`}>
            {(props.auth.isAuth)
              ? <span> {props.auth.login} </span>
              : <span> Login </span>
            }
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;