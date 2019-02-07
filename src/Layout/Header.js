import React from 'react';
import styled from 'styled-components';

const AppHeader = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
    margin: 0;
  }
`;

const Header = () => (
  <AppHeader className="header">
    <h1>Chart.js Sample</h1>
  </AppHeader>
);

export default Header;
