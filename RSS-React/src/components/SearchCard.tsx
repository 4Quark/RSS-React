import React from 'react';
import { ICharacter } from '../servises/types';

type myProps = {
  person: ICharacter;
  RemoveCard: () => void;
};
type myState = { count: number };

class SearchCard extends React.Component<myProps, myState> {
  constructor(props: myProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="card_container">
        <div className="card_content">
          <strong className="card_number">{this.props.person.id}. </strong>
          <strong className="card_header">{this.props.person.name}</strong>
          <div className="card_info">{this.props.person.gender}</div>
        </div>
        <button className="card_btn" onClick={this.props.RemoveCard}>
          Delete
        </button>
      </div>
    );
  }
}

export default SearchCard;
