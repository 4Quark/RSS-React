import axios, { AxiosResponse } from 'axios';
import './App.css';
import SearchCard from './components/SearchCard';
import SearchBar from './components/SearchBar';
import { ICharacter, IResult } from './services/types';
import Loader from './components/loader';
import RickAndMorty from './assets/rick-morty.png';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [persons, setPersons] = useState<ICharacter[]>([]);

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    setIsLoading(true);
    const localValue: string = localStorage.getItem('searchInput') || '';
    const link =
      localValue == ''
        ? 'https://rickandmortyapi.com/api/character'
        : `https://rickandmortyapi.com/api/character/?name=${localValue}`;
    try {
      const response: AxiosResponse<IResult> = await axios.get(link);
      const persons = response.data.results;
      setPersons(persons);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          const persons: ICharacter[] = [];
          setPersons(persons);
        } else console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar fetchData={search} />
      <section className="search_results">
        {isLoading && <Loader />}
        <h2>{persons.length ? 'Results' : 'There is nothing here'}</h2>
        <div className="card_container">
          {persons.map((person, i) => (
            <SearchCard key={i} person={person} />
          ))}
        </div>
      </section>
      {!persons.length && <img className="RickAndMorty" src={RickAndMorty} />}
    </>
  );
}

export default App;
