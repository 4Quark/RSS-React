import { useNavigate, useParams } from 'react-router-dom';
import { ICharacter } from '../services/types';
import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import { searchCaracter } from '../services/API';

function PersonPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<ICharacter>();
  const navigate = useNavigate();
  const { page } = useParams();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (id) searchCaracter(+id, handlePerson).then(() => setIsLoading(false));
  }, [id]);

  const handlePerson = (person: ICharacter) => setPerson(person);

  return (
    <section className="each_character" data-testid="extended_data">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {person && (
            <div className="person_container">
              <img
                className="person_img"
                src={person.image}
                alt={person.name}
              />
              <div className="person_info">
                <h3 className="person_head">
                  {person.id}. {person.name}
                </h3>
                <p>Gender: {person.gender}</p>
                {person.type ? <p>type: {person.type}</p> : <p>No type</p>}
                <p>Species: {person.species}</p>
                <p>Status: {person.status}</p>
                <p>Location: {person.location.name}</p>
                <p>Origin: {person.origin.name}</p>
                <p>URL: {person.url}</p>
                <p>Created: {person.created}</p>
              </div>
            </div>
          )}
          <button className="go_back_btn" onClick={() => navigate(-1)}>
            go Back
          </button>
          <button
            className="close_btn"
            onClick={() => navigate('/search/' + page)}
          >
            ×
          </button>
        </>
      )}
    </section>
  );
}

export default PersonPage;
