import styled from 'styled-components';

const Header = styled.header`
  padding: 15px 0;
  background-color: #4a90e2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-left: 40px;
  }

  a {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    margin-right: 50px;
    font-weight: bold;
    display: flex;
    align-items: center;
    svg {
      margin-left: 5px;
    }
  }
`;

export default Header;
