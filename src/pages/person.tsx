import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../components/loader';
import { fetchSingle } from '../services/API';
import { useAppDispatch, useAppSelector } from '../services/store/store';

function PersonPage() {
  const dispatch = useAppDispatch();
  const { character, isLoading } = useAppSelector((state) => state.single);
  const navigate = useNavigate();
  const { page } = useParams();
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(fetchSingle(+id));
  }, [dispatch, id]);

  return (
    <section className="each_character" data-testid="extended_data">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {character && (
            <div className="person_container">
              <img
                className="person_img"
                src={character.image}
                alt={character.name}
              />
              <div className="person_info">
                <h3 className="person_head">
                  {character.id}. {character.name}
                </h3>
                <p>Gender: {character.gender}</p>
                {character.type ? (
                  <p>type: {character.type}</p>
                ) : (
                  <p>No type</p>
                )}
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
                <p>Location: {character.location.name}</p>
                <p>Origin: {character.origin.name}</p>
                <p>URL: {character.url}</p>
                <p>Created: {character.created}</p>
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
