import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

function Comparar() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchDados() {
      try {
        const response = await fetch('http://localhost:5000/fontes');
        const data = await response.json();
        const comparacao = data.map((fonte) => ({
          nome: fonte.nome,
          impactoAmbiental: Math.floor(Math.random() * 100),
          custo: Math.floor(Math.random() * 50) + 50,
        }));
        setDados(comparacao);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    fetchDados();
  }, []);

  return (
    <Container>
      <h1>Comparar Fontes de Energia</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={dados}>
          <XAxis dataKey="nome" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="impactoAmbiental" fill="#8884d8" />
          <Bar dataKey="custo" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Comparar;
