import { ICharacter } from '../services/types';

type myProps = {
  person: ICharacter;
};

function SearchCard(props: myProps) {
  return (
    <div className="card">
      <div className="card_content">
        <h3 className="card_head">
          {props.person.id}. {props.person.name}
        </h3>
        <div className="card_info">
          <img
            className="card_img"
            src={props.person.image}
            alt={props.person.name}
          />
          <p>gender: {props.person.gender}</p>
          {props.person.type && <p>type: {props.person.type}</p>}
          <p>species: {props.person.species}</p>
          <p>status: {props.person.status}</p>
          <p>location: {props.person.location.name}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
