import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ICharacter } from '../services/types';
import SearchBar from '../components/SearchBar';
import Loader from '../components/loader';
import RickAndMorty from './../assets/rick-morty.png';
import Pagination from '../components/pagination';
import { searchAll } from '../services/API';

function SearchPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [persons, setPersons] = useState<ICharacter[]>([]);
  const { page } = useParams();

  useEffect(() => {
    search();
    console.log('empty');
  }, [page]);

  const handleCallback = (persons: ICharacter[], pages: number) => {
    setPersons(persons);
    setTotalPage(pages);
  };

  const search = async () => {
    setIsLoading(true);
    if (page) searchAll(+page, handleCallback).then(() => setIsLoading(false));
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
