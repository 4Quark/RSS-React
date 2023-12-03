import { ITile } from '../services/types';

function Tile({ tile }: { tile: ITile }) {
  return (
    <div className="tile">
      <img className="tile_img" src={URL.createObjectURL(tile.file[0])} />
      <h3>{tile.name}</h3>
      <p>Gender: {tile.gender}</p>
      <p>Age: {tile.age} years</p>
      <p>Country: {tile.country}</p>
      <p>{tile.email}</p>
    </div>
  );
}

export default Tile;
