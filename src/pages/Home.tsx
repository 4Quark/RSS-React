import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { ITile } from '../services/types';
import Tile from '../components/tile';

function Home() {
  const { tiles } = useAppSelector((state) => state.tiles);
  return (
    <>
      <h2>Home Page</h2>
      <div>
        {tiles.length > 0 && <h3>Results</h3>}
        <div className="tile_container">
          {tiles.length ? (
            tiles.map((tile: ITile, i: number) => <Tile key={i} tile={tile} />)
          ) : (
            <p>
              Create youre character with <Link to="/uncontrolled_form">Uncontrolled Form</Link> or with{' '}
              <Link to="/hook_form">React Hook Form</Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
