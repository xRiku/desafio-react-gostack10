import styled from 'styled-components';

export const CommentContainer = styled.li`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  img {
    width: 40px;
    height: 40px;
    padding: 0px;
    margin-right: 10px;
  }
  div {
    background-color: #e7e7e7;
    border-radius: 20px;
    strong {
      color: #4a4a4a;
    }
  }
`;
