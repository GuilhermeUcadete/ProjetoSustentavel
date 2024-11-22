// src/components/Footer.jsx

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #004d00;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 10;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2024 Energia Acessível. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}

export default Footer;
