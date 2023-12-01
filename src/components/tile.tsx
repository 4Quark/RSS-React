import { ITile } from '../types';

type myProps = {
  tile: ITile;
};

function Tile(p: myProps) {
  return (
    <div className="tile">
      <img className="tile_img" src={URL.createObjectURL(p.tile.file[0])}></img>
      <h3>{p.tile.name}</h3>
      <p>Age: {p.tile.age} years</p>
      <p>Country: {p.tile.country}</p>
      <p>email: {p.tile.email}</p>
      <p>{p.tile.gender}</p>
    </div>
  );
}

export default Tile;
