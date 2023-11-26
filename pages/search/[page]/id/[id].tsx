import React from 'react';
import { GetServerSideProps } from 'next';
import SingleCharacter from '@/components/singleCharacter';
import Layout from '@/components/layout';
import SearchBar from '@/components/SearchBar';
import ListCharacters from '@/components/listCharacters';
import { IExtendProps } from '@/services/types';

function PersonPage({ characters, character }: IExtendProps) {
  return (
    <Layout>
      <SearchBar />
      <div className="content">
        <ListCharacters characters={characters} />
        <SingleCharacter character={character} />
      </div>
    </Layout>
  );
}

export default PersonPage;

export const getServerSideProps = (async (context) => {
  const search = context.query.query ? context.query.query : '';
  const page = context.query.page ? +context.query.page : 1;
  const link =
    search == ''
      ? `https://rickandmortyapi.com/api/character/?page=${page}`
      : `https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`;
  const responseList = await fetch(link);
  const characters = await responseList.json();

  const id = context.query.id ? +context.query.id : 1;
  const responseSingle = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const character = await responseSingle.json();
  return {
    props: { characters, character },
  };
}) satisfies GetServerSideProps;
