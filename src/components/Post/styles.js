import styled from 'styled-components';

export const PostContainer = styled.li`
  display: grid;
  max-width: 500px;
  background-color: #f5f5f5;
  grid-template-areas:
    'avatar name'
    'avatar date'
    'text text';
  grid-template-rows: 30px auto 50px;
  grid-template-columns: 100px auto auto;
  img {
    grid-area: avatar;
    border-radius: 50%;
    padding: 10px 10px;
    width: 100px;
  }
  h1 {
    grid-area: name;
    color: #4a4a4a;
    font-size: 20px;
    background-color: red;
  }
  h2 {
    background-color: blue;
    grid-area: date;
    color: #9a9a9a;
  }
  h3 {
    grid-area: text;
    color: #3e3e3e;
    padding: 10px;
  }
`;
