import React from 'react';
import { PostContainer, PostUser } from './styles';

function Post(props) {
  const { data } = props;
  return (
    <PostContainer>
      <img src={data.author.avatar} alt={data.author.name} />
      <PostUser>
        <h1>{data.author.name}</h1>
        <h2>{data.date}</h2>
      </PostUser>
      <h3>{data.content}</h3>
    </PostContainer>
  );
}

export default Post;
