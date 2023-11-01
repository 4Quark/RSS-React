import { FormEvent, useEffect, useState } from 'react';
import RMLogo from './../assets/RMLogo.png';
import ErrorButton from './errorBtn';

type myProps = { fetchData: () => void };

function SearchCard(props: myProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const localValue: string = localStorage.getItem('searchInput') || '';
    setValue(localValue);
  }, []);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('searchInput', value.trim());
    props.fetchData();
  };

  return (
    <section className="search_section">
      <img className="RMLogo" src={RMLogo} alt="Rick and Morty" />
      <form onSubmit={onFormSubmit} className="search_wrapper">
        <input
          className="search_input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="search_btn">
          Search
        </button>
        <ErrorButton />
      </form>
    </section>
  );
}

export default SearchCard;
