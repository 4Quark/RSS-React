import SearchBar from '../../components/SearchBar';
import Layout from '../../components/layout';
import Loader from '../../components/loader';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import RickAndMorty from './../../assets/rick-morty.png';
import Pagination from '../../components/pagination';
import { ICharacter } from '../../services/types';
import { useAppSelector } from '../../services/store/store';

function Page({ characters }) {
  const itemsPerPage = useAppSelector((state) => state.pages.itemsPerPage);
  const isLoading = false;
  const { query } = useRouter();

  const search = async () => {
    console.log('search');
  };

  const isPage = () => (query.page ? +query.page : 1);

  return (
    <>
      <Layout>
        <SearchBar fetchData={search} />
        <div className="search_container">
          <section className="search_results">
            <h2>
              {characters.results.length ? 'Results' : 'There is nothing here'}
            </h2>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="container">
                {characters.results.map(
                  (person: ICharacter, i: number) =>
                    i < itemsPerPage && (
                      <Link
                        key={i}
                        data-testid="person-element"
                        href={'/search/' + query.page + '/' + person.id}
                      >
                        {person.name}
                      </Link>
                    )
                )}
              </div>
            )}
            {characters.results.length ? (
              <Pagination page={isPage()} totalPage={characters.info.pages} />
            ) : (
              ''
            )}
          </section>
          {/* {characters.results.length ? { children } : ''} */}
        </div>
        {!characters.results.length && (
          <Image
            src={RickAndMorty}
            className="RickAndMorty"
            width={300}
            height={334}
            alt="There is nothing here"
          />
        )}
      </Layout>
    </>
  );
}

export default Page;

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${params.page}`
  );
  const characters = await response.json();
  return {
    props: { characters },
  };
}
