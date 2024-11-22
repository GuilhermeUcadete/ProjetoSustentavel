// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detalhes from './routes/Detalhes';
import Comparar from './routes/Comparar';
import Sobre from './routes/Sobre';  
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/comparar" element={<Comparar />} />
        <Route path="/sobre" element={<Sobre />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
