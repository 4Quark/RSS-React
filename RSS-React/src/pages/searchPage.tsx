import './../styles/search.css';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { ICharacter } from '../services/types';
import { SearchBar } from '../components/SearchBar';
import { Loader } from '../components/loader';
import RickAndMorty from './../assets/rick-morty.png';
import { Pagination } from '../components/pagination';
import { searchAll } from '../services/API';

export function SearchPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [persons, setPersons] = useState<ICharacter[]>([]);
  const { page } = useParams();

  useEffect(() => {
    handleFetch(page ? +page : 1);
  }, [page]);

  const handleFetch = async (page: number) => {
    setIsLoading(true);
    const response = await searchAll(page);
    if (response) {
      setPersons(response.persons);
      setTotalPage(response.pages);
    }
    setIsLoading(false);
  };

  const isPage = () => (page ? +page : 1);

  return (
    <>
      <SearchBar fetchData={handleFetch} />
      <div className="search_container">
        <section className="search_results">
          <h2>{persons.length ? 'Results' : 'There is nothing here'}</h2>
          {isLoading && <Loader />}
          <div className="container">
            {persons.map((person, index) => (
              <Link key={index} to={`/search/${page}/${person.id}`}>
                {person.name}
              </Link>
            ))}
          </div>
          {persons.length ? (
            <Pagination page={isPage()} totalPage={totalPage} />
          ) : (
            ''
          )}
        </section>
        {persons.length ? <Outlet /> : ''}
      </div>
      {!persons.length && <img className="RickAndMorty" src={RickAndMorty} />}
    </>
  );
}
