import Loader from '../../../components/loader';
import React from 'react';

function PersonPage({ character }) {
  const isLoading = false;

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
          <button className="go_back_btn" onClick={() => console.log('back')}>
            go Back
          </button>
          <button className="close_btn" onClick={() => console.log('back')}>
            ×
          </button>
        </>
      )}
    </section>
  );
}

export default PersonPage;

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await response.json();
  return {
    props: { character },
  };
}
