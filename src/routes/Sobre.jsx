import React from 'react';
import styled from 'styled-components';

// Estilos
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h1`
  color: #006400;
`;

const Texto = styled.p`
  text-align: justify;
  color: #333;
  line-height: 1.6;
  margin-top: 20px;
  max-width: 800px;
`;

const CaixaTexto = styled.div`
  background-color: #f0f8ff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`;

const Subtitulo = styled.h2`
  color: #2e8b57;
  margin-top: 20px;
`;

function Sobre() {
  return (
    <Container>
      <Titulo>Sobre o Projeto</Titulo>
      <Texto>
        O projeto "Acesso Universal à Energia" visa informar, refletir e educar
        sobre as diversas fontes de energia e a importância de torná-las
        acessíveis para comunidades ao redor do mundo. A energia é um direito
        fundamental e é essencial para o desenvolvimento de uma sociedade mais
        justa, sustentável e igualitária.
      </Texto>

      <CaixaTexto>
        <Subtitulo>Objetivos</Subtitulo>
        <Texto>
          Nosso objetivo é aumentar a conscientização sobre as fontes de energia
          renováveis e não renováveis, e como elas impactam o meio ambiente e as
          comunidades. Através de informações claras e acessíveis, buscamos
          ajudar as pessoas a tomarem decisões mais informadas sobre como utilizar
          energia de maneira eficiente e sustentável.
        </Texto>
      </CaixaTexto>
    </Container>
  );
}

export default Sobre;
