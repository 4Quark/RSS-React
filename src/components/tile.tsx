import { ITile } from '../services/types';

type myProps = {
  tile: ITile;
};

function Tile(p: myProps) {
  return (
    <div className="tile">
      <img className="tile_img" src={URL.createObjectURL(p.tile.file[0])}></img>
      <h3>{p.tile.name}</h3>
      <p>Gender: {p.tile.gender}</p>
      <p>Age: {p.tile.age} years</p>
      <p>Country: {p.tile.country}</p>
      <p>{p.tile.email}</p>
    </div>
  );
}

export default Tile;
