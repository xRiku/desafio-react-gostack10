import React from 'react';
import { CommentContainer } from './styles';

export default function Comment(props) {
  const { data } = props;
  return (
    <CommentContainer>
      <img src={data.author.avatar} alt={data.author.name} />
      <div>
        <p>
          <strong>{data.author.name}</strong> {data.content}
        </p>
      </div>
    </CommentContainer>
  );
}
