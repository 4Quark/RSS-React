import React from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.css';
import SearchCard from './components/SearchCard';
import SearchBar from './components/SearchBar';
import { ICharacter, IResult } from './servises/types';

class App extends React.Component {
  state: { persons: ICharacter[]; isLoading: boolean } = {
    persons: [],
    isLoading: false,
  };

  componentDidMount() {
    const localValue: string = localStorage.getItem('searchInput') || '';
    this.setState({
      value: localValue,
    });
    localValue == '' ? this.fetchData() : this.handleSubmit();
  }

  fetchData = async () => {
    const response: AxiosResponse<IResult> = await axios.get(
      'https://rickandmortyapi.com/api/character'
    );
    const persons = response.data.results;
    this.setState({ persons });
  };

  RemoveCard = function () {
    console.log('remove');
  };

  handleSubmit = async () => {
    this.setState({
      isLoading: true,
    });
    const searchValue: string = localStorage.getItem('searchInput') as string;
    try {
      const response: AxiosResponse<IResult> = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchValue}`
      );
      const persons = response.data.results;
      this.setState({ persons });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          const persons: string[] = [];
          this.setState({ persons });
        } else console.error(error);
      }
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    return (
      <>
        <h1>React It</h1>
        <SearchBar text="" fetchData={this.handleSubmit} />
        <section className="search_results">
          Results
          {this.state.isLoading ? 'Loading...' : ''}
          {this.state.persons.map((person, i) => (
            <SearchCard key={i} person={person} RemoveCard={this.RemoveCard} />
          ))}
        </section>
      </>
    );
  }
}

export default App;
