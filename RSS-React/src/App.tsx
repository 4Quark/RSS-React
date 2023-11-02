import axios, { AxiosResponse } from 'axios';
import './App.css';
import SearchCard from './components/SearchCard';
import SearchBar from './components/SearchBar';
import { ICharacter, IResult } from './services/types';
import Loader from './components/loader';
import RickAndMorty from './assets/rick-morty.png';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [persons, setPersons] = useState<ICharacter[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  // const location = useLocation();
  // const navigate = useNavigate();
  // const queryParams = new URLSearchParams(location.search);
  // const currentPage = Number(queryParams.get('page')) || 1;

  // function handlePageChange(newPage: number) {
  //   queryParams.set('page', newPage.toString());
  //   navigate({ search: queryParams.toString() });
  // }

  useEffect(() => {
    search();
    pagesCount();
  }, [page]);

  const pagesCount = async () => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<IResult> = await axios.get(
        'https://rickandmortyapi.com/api/character/?name=ml'
      );
      const pages = response.data.info.pages;
      console.log(pages);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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

  return (
    <BrowserRouter>
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
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous Page
        </button>
        <span>Page {page}</span>
        <button disabled={page === totalPage} onClick={() => setPage(page + 1)}>
          Next Page
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
