import React from 'react';
import s from './PageSideBar.module.css';
import {NavLink} from 'react-router-dom';

function PageSideBar(props) {
  return (
    <nav id={s.page_sidebar}>
      <ol>
        <li className={s.li_nav_item}>
          <NavLink to={`/profile/${props.state.userId}`} className={s.navlink} activeClassName={s.active_link}>
            <div className={s.item_container}>
                Profile
            </div>
          </NavLink>
        </li>
        <li className={s.li_nav_item}>
          <NavLink to='/dialogs' activeClassName={s.active_link}>
            <div className={s.item_container}>
                Dialogs
            </div>
          </NavLink>
        </li>
        <li className={s.li_nav_item}>
          <NavLink to='/news' activeClassName={s.active_link}>
            <div className={s.item_container}>
                News
            </div>
          </NavLink>
        </li>
        <li className={s.li_nav_item}>
          <NavLink to='/friends' activeClassName={s.active_link}>
            <div className={s.item_container}>
                Friends
            </div>
          </NavLink>
        </li>
        <li className={s.li_nav_item}>
          <NavLink to='/gallery' activeClassName={s.active_link}>
            <div className={s.item_container}>
                Gallery
            </div>
          </NavLink>
        </li>
        <li className={s.li_nav_item}>
          <NavLink to='/users' activeClassName={s.active_link}>
            <div className={s.item_container}>
                Users
            </div>
          </NavLink>
        </li>
      </ol>
    </nav>
  );
}

export default PageSideBar;