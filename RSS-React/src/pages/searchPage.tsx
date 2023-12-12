import './../styles/search.css';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { ICharacter } from '../services/types';
import { SearchBar } from '../components/SearchBar';
import RickAndMorty from './../assets/rick-morty.png';
import { RickAndMortyService } from '../services/API';
import axios from 'axios';
import { SearchResults } from '../components/SearchResults';
import { Loader } from '../components/loader';

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
    try {
      const data = await RickAndMortyService.searchCharactersByName(page);
      setPersons(data.characterList);
      setTotalPage(data.pages);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setPersons([]);
          setTotalPage(1);
        } else {
          alert('Some error occured. Please, try again');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar fetchData={handleFetch} />
      <div className="search_container">
        {isLoading ? (
          <Loader />
        ) : (
          <SearchResults totalPage={totalPage} persons={persons} />
        )}
        {persons.length ? (
          <Outlet />
        ) : (
          <img className="RickAndMorty" src={RickAndMorty} />
        )}
      </div>
    </>
  );
}
