import React from 'react';
import RMLogo from './../assets/RMLogo.png';

type myProps = { fetchData: () => void; slowFetch: () => void };
type myState = { value: string };

class SearchCard extends React.Component<myProps, myState> {
  constructor(props: myProps) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const localValue: string = localStorage.getItem('searchInput') || '';
    this.setState({
      value: localValue,
    });
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
    localStorage.setItem('searchInput', event.target.value.trim());
    console.log(localStorage.getItem('searchInput'));
  }

  render() {
    return (
      <section className="search_section">
        <img className="RMLogo" src={RMLogo} />
        <div className="search_wrapper">
          <input
            className="search_input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button className="search_btn" onClick={this.props.fetchData}>
            Search
          </button>
          <button className="search_btn" onClick={this.props.slowFetch}>
            Slow
          </button>
        </div>
      </section>
    );
  }
}

export default SearchCard;
