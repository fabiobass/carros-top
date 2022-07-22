import { ReactComponent as MainImage } from 'assets/images/car-home.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
      <div className="base-card card-catalog">
        <div>
          <Link to="/products">
            <button className="catalog-button">
              <h6>VER CATÁLOGO</h6>
            </button>
          </Link>
        </div>
        <div>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
