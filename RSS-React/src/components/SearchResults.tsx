import { Link, useParams } from 'react-router-dom';
import { ICharacter } from '../services/types';
import { Pagination } from './pagination';

type SearchResultsProps = {
  totalPage: number;
  persons: ICharacter[];
};

export function SearchResults(props: SearchResultsProps) {
  const { page } = useParams();
  const isPage = () => (page ? +page : 1);
  return (
    <section className="search_results">
      <h2>{props.persons.length ? 'Results' : 'There is nothing here'}</h2>
      <div className="container">
        {props.persons.map((person, index) => (
          <Link key={index} to={`/search/${page}/${person.id}`}>
            {person.name}
          </Link>
        ))}
      </div>
      {props.persons.length ? (
        <Pagination page={isPage()} totalPage={props.totalPage} />
      ) : (
        ''
      )}
    </section>
  );
}
