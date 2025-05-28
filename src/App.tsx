import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderBar from './components/HeaderBar';

// Páginas principais
import Home from './pages/home/Home';
import Historia from './pages/historia/Historia';
import Campanhas from './pages/campanhas/Campanhas';
import Geografia from './pages/geografia/Geografia';
import Deuses from './pages/deuses/Deuses';
import DeusDetalhe from './pages/deuses/DeusDetalhe';
import Compendio from './pages/compendio/Compendio';
import Mapa from './pages/mapa/Mapa';

// Novas páginas de catálogo detalhado
import CriaturasPage from './pages/catalogo/CriaturasPage';
import MineriosPage from './pages/catalogo/MineriosPage';
import FloraPage from './pages/catalogo/FloraPage';
import ItensPage from './pages/catalogo/ItensPage';

function App() {
  return (
    <Router>
      <HeaderBar />
      <main style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/campanhas" element={<Campanhas />} />
          <Route path="/geografia" element={<Geografia />} />
          <Route path="/deuses" element={<Deuses />} />
          <Route path="/deuses/:id" element={<DeusDetalhe />} />
          <Route path="/compendio" element={<Compendio />} />
          <Route path="/mapa" element={<Mapa />} />

          {/* Rotas detalhadas do compêndio */}
          <Route path="/criaturas" element={<CriaturasPage />} />
          <Route path="/minerios" element={<MineriosPage />} />
          <Route path="/flora" element={<FloraPage />} />
          <Route path="/itens" element={<ItensPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
