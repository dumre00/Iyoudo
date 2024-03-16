import React from 'react';
import CustomMap from './CustomMap';
import User from './User';
function Home() {
  return (
    <div className="Home">
      <div className="Home-header">
        <h2 className="subtitulo">Necesitas ayuda o Compañia?</h2>
        <h1 className="Home-title">Encuentra personas dispuestas a ayudarte.</h1>
      </div>
      <div className="Home-content">
        <User />{}
        <CustomMap /> {}
      </div>


    <footer>
        <p>© 2024 Iyoudo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
