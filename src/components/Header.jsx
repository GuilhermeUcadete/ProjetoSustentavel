import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #006400;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Header() {
  return (
    <Nav>
      <h1>Energia Acessível</h1>
      <Menu>
        <Link to="/">Início</Link>
        <Link to="/comparar">Comparar</Link>
        <Link to="/sobre">Sobre</Link>
      </Menu>
    </Nav>
  );
}

export default Header;
