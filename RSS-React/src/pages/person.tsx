import { Link, useParams } from 'react-router-dom';
import { ICharacter } from '../services/types';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Loader from '../components/loader';

function PersonPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<ICharacter>();
  const { id } = useParams();

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    console.log('search');
    setIsLoading(true);
    try {
      const response: AxiosResponse<ICharacter> = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setPerson(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {person && (
        <div className="person_container">
          <h3 className="person_head">
            {person.id}. {person.name}
          </h3>
          <div className="person_info">
            <img className="person_img" src={person.image} alt={person.name} />
            <p>gender: {person.gender}</p>
            {person.type && <p>type: {person.type}</p>}
            <p>species: {person.species}</p>
            <p>status: {person.status}</p>
            <p>location: {person.location.name}</p>
          </div>
        </div>
      )}
      {/* <h1>{person.name}</h1>
      <p>{person.gender}</p> */}
      <Link to="/">go to Home</Link>
    </>
  );
}

export default PersonPage;
