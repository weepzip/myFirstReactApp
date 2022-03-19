import React from "react";
import s from "./ProfileInfo.module.css";
import default_user_avatar from '../../../../default_user_avatar_2.png';

function ProfileInfo(props) {
  return (
    <div className={s.profile_info}>
      <div className={s.image_container}>
        <img id={s.image} alt='profile_picture' src={!props.state.photos.small
          ? default_user_avatar
          : props.state.photos.small}></img>
      </div>
      <div className={s.info}>
        <div className={s.name_container}>
          <h3>
            { props.state.fullName }
          </h3>
        </div>
        <div className={s.details}>
          {!props.state.aboutMe ? null : <p>Status: { props.state.aboutMe } </p> }
          
          {props.state.lookinForAJob
            ? <p>Looking for a job: Yes </p>
            : <p>Looking for a job: No </p>}
          
          {!props.state.lookingForAJobDescription
            ? null
            : <p>Job description: {props.state.lookingForAJobDescription}</p>}
          
          {Object.values(props.state.contacts)
            .filter(value => value !== null)
            .length === 0 ? null : <p>Contacts:</p>}
          {Object.entries(props.state.contacts).map( value => {
            return !value[1] ? null : <p>{value[0]}: {value[1]}</p>})}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;