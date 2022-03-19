import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  const onPostAdd = () => {
    props.addPost();
  };

  const onPostTextChange = (e) => {
    props.updateNewPostText(e.target.value);
  };
  if (!props.profilePage.profile) {
    return <div></div>
  } else {
    return (
      <React.Fragment>
        <ProfileInfo state={props.state.profilePage.profile} />
        <div className={s.post_constroctor_container}>
          <textarea
            id={s.input_text_post}
            onChange={ onPostTextChange }
            type="text"
            value={props.profilePage.newPostText}
          ></textarea>
          <input
            id={s.send_post_button}
            onClick={ onPostAdd }
            type="button"
            value="Send"
            alt="Send"
          ></input>
        </div>
        {props.profilePage.posts ? null : <Posts posts={props.profilePage.posts} />}
      </React.Fragment>
    )
  }
}

export default Profile;