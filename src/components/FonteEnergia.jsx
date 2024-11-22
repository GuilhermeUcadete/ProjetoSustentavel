import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FonteEnergia from '../components/FonteEnergia';

const Container = styled.div`
  padding: 20px;
`;

const Titulo = styled.h1`
  text-align: center;
  color: #006400;
`;

const Subtitulo = styled.h2`
  margin-top: 20px;
  color: #2e8b57;
`;

const FontesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const BotaoFiltro = styled.button`
  background-color: #2e8b57;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #006400;
  }
`;

function Home() {
  const [fontes, setFontes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState('Todas');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFontes() {
      try {
        const response = await fetch('http://localhost:3001/fontes');
        if (!response.ok) {
          throw new Error(`Falha na requisição: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setFontes(data.fontes || []);
        setLoading(false);
      } catch (error) {
        setError(`Erro ao buscar fontes de energia: ${error.message}`);
        setLoading(false);
      }
    }
    fetchFontes();
  }, []);

  const filtrarFontes = () => {
    console.log('Filtro atual:', filtro);
    console.log('Fontes antes do filtro:', fontes);

    if (filtro === 'Renováveis') {
      const renovaveis = fontes.filter((fonte) => fonte.categoria === 'Renovável');
      console.log('Fontes Renováveis:', renovaveis);
      return renovaveis;
    }

    if (filtro === 'Não Renováveis') {
      const naoRenovaveis = fontes.filter((fonte) => fonte.categoria === 'Não Renovável');
      console.log('Fontes Não Renováveis:', naoRenovaveis);
      return naoRenovaveis;
    }

    return fontes;
  };

  const fontesFiltradas = filtrarFontes();

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <Titulo>Acesso Universal à Energia</Titulo>
      <p>
        Explore as principais fontes de energia e descubra como elas podem transformar o mundo.
      </p>

      <div>
        <BotaoFiltro onClick={() => setFiltro('Todas')}>Todas</BotaoFiltro>
        <BotaoFiltro onClick={() => setFiltro('Renováveis')}>Renováveis</BotaoFiltro>
        <BotaoFiltro onClick={() => setFiltro('Não Renováveis')}>Não Renováveis</BotaoFiltro>
      </div>

      <Subtitulo>Fontes de Energia {filtro}</Subtitulo>
      <FontesContainer>
        {loading ? (
          <p>Carregando...</p>
        ) : fontesFiltradas.length > 0 ? (
          fontesFiltradas.map((fonte) => (
            <FonteEnergia key={fonte.id} dados={fonte} />
          ))
        ) : (
          <p>Nenhuma fonte encontrada.</p>
        )}
      </FontesContainer>
    </Container>
  );
}

export default Home;
