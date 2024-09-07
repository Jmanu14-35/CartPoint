import { useState, useEffect } from 'react';
import useAxios from "../utils/useAxios";
import jwtDecode from 'jwt-decode';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [points, setPoints] = useState(0);
  const [user, setUser] = useState({});
  const api = useAxios();
  const token = localStorage.getItem("authTokens");

  useEffect(() => {
    if (token) {
      const decode = jwtDecode(token);
      setUser({
        id: decode.user_id,
        username: decode.username,
        fullName: decode.full_name,
        image: decode.image,
      });
      fetchUserPoints(decode.user_id);
    }
  }, [token]);

  const fetchUserPoints = async (userId) => {
    try {
      const response = await api.get(`/user/${userId}/points/`);
      setPoints(response.data.points);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products/");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="container-fluid" style={{ paddingTop: "85px" }}>
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span data-feather="home" />
                    Panel de puntos <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="gift" />
                    Canejar Puntos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="star" />
                    Mis Puntos
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Bienvenido👋🏻</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <button className="btn btn-sm btn-outline-secondary">
                  Ver historial de canje
                </button>
              </div>
            </div>
            <div className="alert alert-info">
              <strong>Puntos Disponibles: 15,800</strong>
            </div>
            <h2>Productos Disponibles para Canjear✅</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>Productos</th>
                    <th>Descripcion</th>
                    <th>Puntos Requeridos</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.pointsRequired}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          disabled={points < product.pointsRequired}
                        >
                          Canjear
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
