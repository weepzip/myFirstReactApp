import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.post}>
      <div className={s.post_author}>
        <div className={s.mini_image_container}>
          <img
            className={s.mini_image}
            src="https://wikiparazit.ru/wp-content/uploads/2020/08/evropeyskaya-koshka-dikiy-kot1.jpg"
            alt="weepzip"
          ></img>
        </div>
        <div className={s.post_author_name}>
          <h4>{props.post.author}</h4>
        </div>
      </div>
      <div className={s.post_content}>
        <p>
          {props.post.post}
        </p>
      </div>
    </div>
  );
}

export default Post;