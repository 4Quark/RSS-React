import { FormEvent, useEffect, useState } from 'react';
import { ErrorButton } from './errorBtn';
import { useNavigate } from 'react-router-dom';

type SearchBarProps = { fetchData: (page: number) => void };

export function SearchBar(props: SearchBarProps) {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedSearchValue: string = localStorage.getItem('searchInput') || '';
    setValue(savedSearchValue);
  }, []);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/search/1');
    localStorage.setItem('searchInput', value.trim());
    props.fetchData(1);
  };

  return (
    <section className="search_section">
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
