import styled from 'styled-components';

export const PostContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f5f5f5;
  img {
    border-radius: 50%;
    padding: 50px 10px;
    width: 100px;
  }
  h3 {
    color: #3e3e3e;
    display: block;
  }
`;

export const PostUser = styled.div`
  float: left;
  h1 {
    color: #4a4a4a;
    font-size: 26px;
  }
  h2 {
    color: #9a9a9a;
  }
`;
