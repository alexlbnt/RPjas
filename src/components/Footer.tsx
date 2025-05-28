import React from 'react';
import './_footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">© {new Date().getFullYear()} RPGIAS • Todos os direitos reservados.</p>
        <p className="footer-subtext">Criado com 💜 para mundos incríveis.</p>
      </div>
    </footer>
  );
};

export default Footer;
