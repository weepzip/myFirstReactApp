import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';

function Posts(props) {

  const postElements = props.posts.map( post => {
    return <Post post={post} />
  }).reverse();

  return (
    <div className={s.posts}>
      { postElements }
    </div>
  );
}

export default Posts;