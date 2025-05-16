import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderBar from './components/HeaderBar';

// Páginas
import Home from './pages/home/Home';
import Historia from './pages/historia/Historia';
import Geografia from './pages/geografia/Geografia';
import Deuses from './pages/deuses/Deuses';
import Bestiario from './pages/bestiario/Bestiario';
import Mapa from './pages/mapa/Mapa';

function App() {
  return (
    <Router>
      <HeaderBar />
      <div style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/geografia" element={<Geografia />} />
          <Route path="/deuses" element={<Deuses />} />
          <Route path="/bestiario" element={<Bestiario />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

