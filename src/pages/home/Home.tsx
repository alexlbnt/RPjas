import './_home.scss';

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url('/ArvoreDeTraad.png')` }}
    >
      <div className="background-overlay">
        <div className="home-content">
          <div className="left-section">
            <h1 className="title">HONRA & EGOÍSMO</h1>
            <p className="subtitle">Um mundo onde suas escolhas definem seu legado.</p>
            <p className="description">
              Este é um mundo forjado por deuses, rasgado pela guerra e sustentado pela honra.
              Prepare-se para explorar terras desconhecidas, pactuar com entidades e traçar seu legado.
            </p>
            <button className="cta-button">Explorar o Mundo</button>
          </div>

          <div className="right-section">
            <div className="awards">
              <h3>As Duas Certezas desse Mundo:</h3>
              <ul>
                <li>A morte não é inevitável.</li>
                <li>Nada é o que parece.</li>
              </ul>
            </div>

            <div className="trailer">
              <h3>Trailer do Mundo</h3>
              <div className="video-thumbnail">
                <img src="/trailer-thumb.jpg" alt="Trailer" />
                <button className="play-button">▶</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
