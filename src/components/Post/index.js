import React from 'react';
import { PostContainer } from './styles';
import Comment from '../Comment';

function Post(props) {
  const { data } = props;
  return (
    <PostContainer>
      <img src={data.author.avatar} alt={data.author.name} />
      <h1>{data.author.name}</h1>
      <h2>{data.date}</h2>
      <h3>{data.content}</h3>
      <ul>
        {data.comments.map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </PostContainer>
  );
}

export default Post;
