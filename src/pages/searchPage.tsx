import './../styles/search.css';
import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { ICharacter } from '../services/types';
import SearchBar from '../components/SearchBar';
import Loader from '../components/loader';
import RickAndMorty from './../assets/rick-morty.png';
import Pagination from '../components/pagination';
import { fetchCharacters } from '../services/API';
import { useAppDispatch, useAppSelector } from '../services/store/store';

function SearchPage() {
  const totalPage = useAppSelector((state) => state.pages.totalPages);
  const dispatch = useAppDispatch();
  const { characters, isLoading } = useAppSelector((state) => state.characters);
  const itemsPerPage = useAppSelector((state) => state.pages.itemsPerPage);
  const { page } = useParams();

  useEffect(() => {
    if (page) dispatch(fetchCharacters(+page));
  }, [dispatch, page, itemsPerPage]);

  const search = async () => {
    if (page) dispatch(fetchCharacters(+page));
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
              {characters.map(
                (person: ICharacter, i: number) =>
                  i < itemsPerPage && (
                    <Link
                      key={i}
                      data-testid="person-element"
                      to={'/search/' + page + '/' + person.id}
                    >
                      {person.name}
                    </Link>
                  )
              )}
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
