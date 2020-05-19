import React from 'react';
import { CommentContainer } from './styles';

export default function Comment(props) {
  const { data } = props;
  return (
    <CommentContainer>
      <img src={data.author.avatar} />
      <div>
        <h2>{data.author.name}</h2>
        <p>{data.content}</p>
      </div>
    </CommentContainer>
  );
}
