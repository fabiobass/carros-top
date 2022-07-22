import './styles.css';
import imgCard from 'assets/images/car-card.png';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={imgCard} alt="nome do produto" />
        <div className="card-text">
          <h4>Audi Supra TT</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div>
          <Link to="/">
            <button className="card-bottom-container">
              <h6>COMPRAR</h6>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
