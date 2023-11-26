/* eslint-disable @next/next/no-img-element */
import router from 'next/router';
import React from 'react';

function SingleCharacter({ character }) {
  return (
    <section className="each_character" data-testid="extended_data">
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
            {character.type ? <p>type: {character.type}</p> : <p>No type</p>}
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Location: {character.location.name}</p>
            <p>Origin: {character.origin.name}</p>
            <p>URL: {character.url}</p>
            <p>Created: {character.created}</p>
          </div>
        </div>
      )}
      <button className="go_back_btn" onClick={() => router.back()}>
        go Back
      </button>
      <button
        className="close_btn"
        onClick={() => router.push({ pathname: `/search/1` })}
      >
        ×
      </button>
    </section>
  );
}

export default SingleCharacter;
