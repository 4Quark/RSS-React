import React from 'react';
import { ICharacter } from '../services/types';

type myProps = {
  person: ICharacter;
};

class SearchCard extends React.Component<myProps> {
  constructor(props: myProps) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card_content">
          <h3 className="card_head">
            {this.props.person.id}. {this.props.person.name}
          </h3>
          <div className="card_info">
            <img
              className="card_img"
              src={this.props.person.image}
              alt={this.props.person.name}
            />
            <p>gender: {this.props.person.gender}</p>
            {this.props.person.type && <p>type: {this.props.person.type}</p>}
            <p>species: {this.props.person.species}</p>
            <p>status: {this.props.person.status}</p>
            <p>location: {this.props.person.location.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchCard;
