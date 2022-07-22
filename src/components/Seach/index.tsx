import { Link } from 'react-router-dom';
import './styles.css';

const Search = () => {
  return (
    <div className="base-card search-card">
      <input placeholder="Digite sua busca"></input>
      <Link to="/">
        <button className="search-button">
          <h6>BUSCAR</h6>
        </button>
      </Link>
    </div>
  );
};

export default Search;
