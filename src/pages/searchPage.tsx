import './../styles/search.css';
import { useCallback, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { ICharacter, RootState } from '../services/types';
import SearchBar from '../components/SearchBar';
import Loader from '../components/loader';
import RickAndMorty from './../assets/rick-morty.png';
import Pagination from '../components/pagination';
import { searchAll } from '../services/API';
import { useDispatch, useSelector } from 'react-redux';

function SearchPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(1);
  const dispatch = useDispatch();
  const characters = useSelector(
    (state: RootState) => state.characters.characters
  );
  const { page } = useParams();

  const handleCallback = useCallback(
    (persons: ICharacter[], pages: number) => {
      dispatch({ type: 'SET_CHARACTERS', payload: persons });
      setTotalPage(pages);
    },
    [dispatch]
  );

  useEffect(() => {
    setIsLoading(true);
    if (page) {
      searchAll(+page, handleCallback).then(() => setIsLoading(false));
    }
  }, [handleCallback, page]);

  const search = async () => {
    setIsLoading(true);
    searchAll(1, handleCallback).then(() => setIsLoading(false));
  };

  const isPage = () => (page ? +page : 1);

  return (
    <>
      <SearchBar fetchData={search} />
      <div className="search_container">
        <section className="search_results">
          <h2>{characters.length ? 'Results' : 'There is nothing here'}</h2>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="container">
              {characters.map((person: ICharacter, i: number) => (
                <Link
                  key={i}
                  data-testid="person-element"
                  to={'/search/' + page + '/' + person.id}
                >
                  {person.name}
                </Link>
              ))}
            </div>
          )}
          {characters.length ? (
            <Pagination page={isPage()} totalPage={totalPage} />
          ) : (
            ''
          )}
        </section>
        {characters.length ? <Outlet /> : ''}
      </div>
      {!characters.length && (
        <img className="RickAndMorty" src={RickAndMorty} />
      )}
    </>
  );
}

export default SearchPage;
