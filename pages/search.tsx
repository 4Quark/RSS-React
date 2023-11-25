import React from 'react';
import SearchBar from '../components/SearchBar';
import Layout from '../components/layout';

export default function SearchPage() {
  const search = async () => {
    console.log('search');
  };

  return (
    <>
      <Layout>
        <SearchBar fetchData={search} />
      </Layout>
    </>
  );
}
