import { FormEvent, useContext, useEffect } from 'react';
import ErrorButton from './errorBtn';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../services/context';

type myProps = { fetchData: () => void };

function SearchBar(props: myProps) {
  const { setValue } = useContext(SearchContext);
  const { value } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    const localValue: string = localStorage.getItem('searchInput') || '';
    setValue(localValue);
  }, [setValue]);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/search/1');
    localStorage.setItem('searchInput', value.trim());
    props.fetchData();
  };

  return (
    <section className="search_section">
      <form onSubmit={onFormSubmit} className="search_wrapper">
        <input
          className="search_input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value.trim())}
        />
        <button type="submit" className="search_btn">
          Search
        </button>
        <ErrorButton />
      </form>
    </section>
  );
}

export default SearchBar;
