import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  background: linear-gradient(to right, #d8e9f0, pink);
  display: flex;
  justify-content: right;
  align-items: center;
  z-index: 99;
`;

// const Header = () => {
//   const [isLogIn, setIsLogIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLogIn(true);
//     }
//   }, []);

const Header = () => {
  const path_list = ['/', '/Survey', '/Result', 'MyPage'];
  if (path_list.find((path) => path === window.location.pathname) === undefined)
    return null;

  return (
    <Container>
      <Modal />
      <button>Log Out</button>
    </Container>
  );
};

export default Header;
