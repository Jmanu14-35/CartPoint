import React from 'react';

function Homepage() {
  return (
    <div>
      <main role="main" style={{ marginTop: 50 }}>
        {/* Main section for the point redemption page */}
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Canjea tus Puntos</h1>
            <p>
              ¡Bienvenido a nuestra página de canje de puntos! Aquí puedes intercambiar tus puntos acumulados por productos exclusivos. Consulta la equivalencia de puntos y los productos disponibles para que puedas aprovechar al máximo tus recompensas.
            </p>
          </div>
        </div>
        
        <div className="container">
          {/* Example row of products */}
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://lh4.googleusercontent.com/proxy/Pg_KS-4MeOeEzB7ODm2HTwaIa7h6hFPcUss4sVlYRnogE0ogYutAFop-YK89_Vg3L-o2DktoPWmwkD0-BvssW6LO_MP4ohto0IwszSwEZsZ8XKAr91sMEokGWV7RLaq9sbrH9A" className="card-img-top" alt="Producto 1" />
                <div className="card-body">
                  <h5 className="card-title">Producto 1</h5>
                  <p className="card-text">Descripción del producto 1. Ideal para tus necesidades diarias.</p>
                  <p className="card-text"><strong>500 puntos</strong></p>
                  <a href="#" className="btn btn-primary">Canjear Ahora</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSIE2S3h0qR1U-vsuKpeL8WDz8G6O2Su8fA&s" className="card-img-top" alt="Producto 2" />
                <div className="card-body">
                  <h5 className="card-title">Producto 2</h5>
                  <p className="card-text">Descripción del producto 2. Perfecto para regalos.</p>
                  <p className="card-text"><strong>1000 puntos</strong></p>
                  <a href="#" className="btn btn-primary">Canjear Ahora</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://walmartgt.vtexassets.com/arquivos/ids/351896/Utensilios-de-cocina-marca-George-Home-de-aluminio-antiadherente-de-7-pzas-2-58408.jpg?v=638157339518530000" className="card-img-top" alt="Producto 3" />
                <div className="card-body">
                  <h5 className="card-title">Producto 3</h5>
                  <p className="card-text">Descripción del producto 3. La mejor opción para tus necesidades especiales.</p>
                  <p className="card-text"><strong>1500 puntos</strong></p>
                  <a href="#" className="btn btn-primary">Canjear Ahora</a>
                </div>
              </div>
            </div>
          </div>
          
          <hr />
          
          <div className="row">
            <div className="col-md-12">
              <h2>Equivalencia de Puntos</h2>
              <p>Consulta cómo se acumulan tus puntos:</p>
              <ul>
                <li><strong>8 quetzales</strong> = 1 puntos</li>
                <li><strong>1 compra de producto</strong> = 100 puntos adicionales</li>
                <li><strong>Referir a un amigo</strong> = 200 puntos</li>
              </ul>
            </div>
          </div>
        </div>
        
        <footer className="container">
          <p>© Tu Empresa 2024</p>
        </footer>
      </main>
    </div>
  );
}

export default Homepage;
