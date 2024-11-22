import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f4f9f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.h1`
  text-align: center;
  color: #006400;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Subtitulo = styled.h2`
  margin-top: 20px;
  color: #2e8b57;
  font-size: 2em;
  text-align: center;
`;

const TextoCentralizado = styled.p`
  text-align: center;
  font-size: 1.8em;
  color: #333;
  margin: 20px 0;
  font-weight: bold;
  max-width: 800px;
`;

const FontesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const CardFonte = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 250px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const NomeFonte = styled.h3`
  color: #006400;
  font-size: 1.8em;
  margin-bottom: 10px;
`;

const CategoriaFonte = styled.p`
  color: #2e8b57;
  font-size: 1.2em;
  margin-bottom: 15px;
`;

const DescricaoFonte = styled.p`
  color: #333;
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 15px;
`;

function Home() {
  const [fontes, setFontes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFontes() {
      try {
        const response = await fetch('http://localhost:5000/fontes');
        if (!response.ok) {
          throw new Error(`Falha na requisição: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setFontes(data);
        setLoading(false);
      } catch (error) {
        setError(`Erro ao buscar fontes de energia: ${error.message}`);
        setLoading(false);
      }
    }
    fetchFontes();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <Titulo>Acesso Universal à Energia</Titulo>
      
      <TextoCentralizado>
        Explore as principais fontes de energia e descubra como elas podem transformar o mundo.
      </TextoCentralizado>

      <Subtitulo>Fontes de Energia</Subtitulo>
      <FontesContainer>
        {fontes.length > 0 ? (
          fontes.map((fonte) => (
            <CardFonte key={fonte.id}>
              <NomeFonte>{fonte.nome}</NomeFonte>
              <CategoriaFonte>{fonte.categoria}</CategoriaFonte>
              <DescricaoFonte>{fonte.descricao}</DescricaoFonte>
            </CardFonte>
          ))
        ) : (
          <p>Nenhuma fonte encontrada.</p>
        )}
      </FontesContainer>
    </Container>
  );
}

export default Home;
