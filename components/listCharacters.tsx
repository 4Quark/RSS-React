import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Pagination from '@/components/pagination';
import { ICharacter, IResponseProps } from '@/services/types';
import { useAppDispatch, useAppSelector } from '@/services/store/store';
import { pagesSlice } from '@/services/store/paginationReducer';

function ListCharacters({ characters }: IResponseProps) {
  const itemsPerPage = useAppSelector((state) => state.pages.itemsPerPage);
  const { query } = useRouter();
  const isPage = () => (query.page ? +query.page : 1);
  const dispatch = useAppDispatch();
  if (characters.info) {
    dispatch(pagesSlice.actions.updateTotalPages(characters.info.pages));
  }

  const linkHref = (id: number) => {
    let linkPath = '/search/' + query.page + '/id/' + id;
    if (query.query) linkPath = linkPath + '?query=' + query.query;
    return linkPath;
  };

  return (
    <section className="search_results">
      <h2>{characters.results ? 'Results' : 'There is nothing here'}</h2>
      <div className="container">
        {characters.results &&
          characters.results.map(
            (person: ICharacter, i: number) =>
              i < itemsPerPage && (
                <Link
                  key={i}
                  data-testid="person-element"
                  href={linkHref(person.id)}
                >
                  {person.name}
                </Link>
              )
          )}
      </div>
      {characters.results ? (
        <Pagination page={isPage()} totalPage={characters.info.pages} />
      ) : (
        <Image
          src={'/rick-morty.png'}
          className="RickAndMorty"
          width={300}
          height={334}
          alt="There is nothing here"
        />
      )}
    </section>
  );
}

export default ListCharacters;
