import React, { Component } from 'react';

import Post from '../Post';
import { PostListContainer } from './styles';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Philipe Marques',
          avatar:
            'https://media-exp1.licdn.com/dms/image/C4E03AQGUcEq_bD0BjA/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=Ldy78uwYd6SrcOPCTstQxJCB5RVglsrT-_WEKYBKdwQ',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://avatars0.githubusercontent.com/u/2254731?s=400&u=391c32fec7b372199dff6650930b89563189b1c0&v=4',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Philipe Marques',
          avatar:
            'https://media-exp1.licdn.com/dms/image/C4E03AQGUcEq_bD0BjA/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=Ldy78uwYd6SrcOPCTstQxJCB5RVglsrT-_WEKYBKdwQ',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://avatars0.githubusercontent.com/u/2254731?s=400&u=391c32fec7b372199dff6650930b89563189b1c0&v=4',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <PostListContainer>
        <ul>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </ul>
      </PostListContainer>
    );
  }
}
