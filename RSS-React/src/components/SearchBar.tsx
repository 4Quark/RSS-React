import React from 'react';

type myProps = { text: string; fetchData: () => void };
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
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.props.fetchData}>Search</button>
      </section>
    );
  }
}

export default SearchCard;
