import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ICharacter, IResult } from '../services/types';
import axios, { AxiosResponse } from 'axios';
import SearchBar from '../components/SearchBar';
import Loader from '../components/loader';
// import SearchCard from '../components/SearchBar';
import RickAndMorty from './../assets/rick-morty.png';
import Pagination from '../components/pagination';

function SearchPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [persons, setPersons] = useState<ICharacter[]>([]);
  const { page } = useParams();

  useEffect(() => {
    search();
    console.log('empty');
  }, [page]);

  const search = async () => {
    setIsLoading(true);
    const localValue: string = localStorage.getItem('searchInput') || '';
    const link =
      localValue == ''
        ? 'https://rickandmortyapi.com/api/character'
        : `https://rickandmortyapi.com/api/character/?name=${localValue}&page=${page}`;
    try {
      const response: AxiosResponse<IResult> = await axios.get(link);
      const persons = response.data.results;
      setPersons(persons);
      setTotalPage(response.data.info.pages);
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

  const isPage = () => (page ? +page : 1);

  return (
    <>
      <SearchBar fetchData={search} />
      <section className="search_results">
        <h2>{persons.length ? 'Results' : 'There is nothing here'}</h2>
        {isLoading && <Loader />}
        <div className="container">
          {persons.map((person, i) => (
            <Link key={i} to={'/search/' + page + '/' + person.id}>
              {person.name}
            </Link>
          ))}
        </div>
      </section>
      {!persons.length && <img className="RickAndMorty" src={RickAndMorty} />}

      <Pagination page={isPage()} totalPage={totalPage} />
    </>
  );
}

export default SearchPage;
