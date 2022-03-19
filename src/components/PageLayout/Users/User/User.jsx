import React from 'react';
import s from './User.module.css';
import default_user_avatar from '../../../../default_user_avatar_2.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const User = (props) => {
  const follow = () => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {}, {
      withCredentials: true,
      headers: {
        "API-KEY": "f9a70917-bc68-4773-8992-3f3adaf2533b"
      }
    })
      .then( response => {
        if(response.data.resultCode === 0) props.followUser(props.user.id)
      })
  }

  const unfollow = () => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "f9a70917-bc68-4773-8992-3f3adaf2533b"
      }
    })
      .then( response => {
        if(response.data.resultCode === 0) props.unfollowUser(props.user.id)
      })
  }

  return (
    <React.Fragment>
      <div id={s.user_container}>
        <div className={s.image_container}>
          <NavLink to={`/profile/${props.user.id}`}>
            <img alt="user" src={props.user.photos.small === null
              ? default_user_avatar 
              : props.user.photos.small} className={s.user_img}
            />
          </NavLink>
        </div>
        <div className={s.content_container}>
          <div className={s.name_container}>
            <h4> {`${props.user.name}`} </h4>
          </div>
          <div className={s.status_container}>
            <p> {props.user.status} </p>
          </div>
          <div className={s.location_container}>
            <p> {`{props.user.country}, {props.user.city}`} </p>
          </div>
          <div className={s.button_container}>
            <button
              className={s.follow_unfollow_user}
              type="button"
              onMouseOver={ (e) => e.target.style.backgroundColor = "rgb(230, 180, 220)" }
              onMouseOut={ (e) => e.target.style.backgroundColor = "rgb(240, 190, 230)" }
              onMouseDown={ (e) => e.target.style.backgroundColor = "rgb(240, 190, 230)" }
              onMouseUp={ (e) => e.target.style.backgroundColor = "rgb(230, 180, 220)" }
              onClick={ () => { (props.user.followed) ? unfollow() : follow() } }
            >
              { (props.user.followed) ? "Unfollow" : "Follow" }
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default User;