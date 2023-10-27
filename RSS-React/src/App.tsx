import React from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.css';
import SearchCard from './components/SearchCard';
import SearchBar from './components/SearchBar';
import { ICharacter, IResult } from './servises/types';
import Loader from './components/loader';
import RickAndMorty from './assets/rick-morty.png';

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

  slowFetch = async () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(this.handleSubmit, 1000);
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
        <SearchBar fetchData={this.handleSubmit} slowFetch={this.slowFetch} />
        <section className="search_results">
          {this.state.isLoading && <Loader />}
          <h2>
            {this.state.persons.length ? 'Results' : 'There is nothing here'}
          </h2>
          <div className="card_container">
            {this.state.persons.map((person, i) => (
              <SearchCard key={i} person={person} />
            ))}
          </div>
        </section>
        {!this.state.persons.length && (
          <img className="RickAndMorty" src={RickAndMorty} />
        )}
      </>
    );
  }
}

export default App;
