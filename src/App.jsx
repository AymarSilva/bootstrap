import './App.css';

function App() {
  return (
    <div className="App">
      <header className='cabecalho'>
        <nav className='container navbar navbar-expand'>
          <div className='logo'>
            <span className="navbar-brand">TreinSô</span>
          </div>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'><a className='nav-link rosa' href="">Home</a></li>
            <li className='nav-item'><a className='nav-link rosa' href="">Sobre Nós</a></li>
            <li className='nav-item'><a className='nav-link rosa' href="">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className="conteudo pt-5">
        <div className="container box">
          <div className="row">
            <div className='col-12'>
              <h2 className='artigos p-4'>Artigos</h2>
              <div className="produtos container">
                <div className='produto p-3'>
                  <h4>Body Splash</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime minima, vel reiciendis hic molestiae tenetur rerum non porro obcaecati aliquam commodi deserunt quis! Sunt repudiandae minus voluptas? Dicta, saepe earum.</p>
                  <button className="btn btn-danger me-2">Favoritar</button>
                  <button className="btn btn-success">Comprar</button>
                </div>
                <div className="produto p-3">
                  <h4>Desodorante</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime minima, vel reiciendis hic molestiae tenetur rerum non porro obcaecati aliquam commodi deserunt quis! Sunt repudiandae minus voluptas? Dicta, saepe earum.</p>
                  <button className="btn btn-danger me-2">Favoritar</button>
                  <button className="btn btn-success">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
