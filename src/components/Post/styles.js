import styled from 'styled-components';

export const PostContainer = styled.li`
  background-color: #fff;
  max-width: 1000px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: grid;
  width: 980px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 1%;
  grid-template-areas:
    'avatar name'
    'avatar date'
    'text text'
    'comments comments';
  /* grid-template-rows: 30px auto 50px; */
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 70px auto;

  & + li {
    margin-top: 20px;
  }
  img {
    grid-area: avatar;
    border-radius: 50%;
    padding: 10px 5px;
    width: 70px;
  }
  h1 {
    grid-area: name;
    color: #4a4a4a;
    font-size: 20px;
    padding: 10px 0 5px 5px;
  }
  h2 {
    padding: 0px 5px;
    font-size: 15px;
    grid-area: date;
    color: #9a9a9a;
  }
  p {
    grid-area: text;
    color: #3e3e3e;
    padding: 10px;
    margin-top: 5px;
  }
  ul {
    grid-area: comments;
  }
`;
