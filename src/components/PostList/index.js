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
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Boootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, podem me chamar no Discord! (Sério, mne chamem mesmo, esse comentário é real.',
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
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Boootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, podem me chamar no Discord! (Sério, mne chamem mesmo, esse comentário é real.',
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
