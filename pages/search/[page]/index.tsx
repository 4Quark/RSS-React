import React from 'react';
import Layout from '@/components/layout';
import SearchBar from '@/components/SearchBar';
import { GetServerSideProps } from 'next';
import ListCharacters from '@/components/listCharacters';

function Page({ characters }) {
  return (
    <>
      <Layout>
        <SearchBar />
        <ListCharacters characters={characters} />
      </Layout>
    </>
  );
}

export default Page;

export const getServerSideProps = (async (context) => {
  const search = context.query.query ? context.query.query : '';
  const page = context.query.page ? +context.query.page : 1;
  const link =
    search == ''
      ? `https://rickandmortyapi.com/api/character/?page=${page}`
      : `https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`;
  const response = await fetch(link);
  const characters = await response.json();
  return {
    props: { characters },
  };
}) satisfies GetServerSideProps;
