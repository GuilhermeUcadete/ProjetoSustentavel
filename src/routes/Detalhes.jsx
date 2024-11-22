import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

function Detalhes() {
  const { id } = useParams();
  const [fonte, setFonte] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFonte() {
      try {
        const response = await fetch(`http://localhost:3001/fontes/${id}`);
        const data = await response.json();
        setFonte(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    }
    fetchFonte();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!fonte) return <p>Fonte de energia não encontrada.</p>;

  return (
    <Container>
      <h1>{fonte.nome}</h1>
      <p>{fonte.descricao}</p>
      <h2>Benefícios</h2>
      <p>{fonte.beneficios}</p>
      <h2>Limitações</h2>
      <p>{fonte.limitacoes}</p>
    </Container>
  );
}

export default Detalhes;
