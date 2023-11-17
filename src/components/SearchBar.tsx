import { FormEvent, useEffect } from 'react';
import ErrorButton from './errorBtn';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../services/store/store';
import { useDispatch, useSelector } from 'react-redux';

type myProps = { fetchData: () => void };

function SearchBar(props: myProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.value.searchValue
  );

  useEffect(() => {
    const localValue: string = localStorage.getItem('searchInput') || '';
    dispatch({ type: 'NEW_VALUE', payload: localValue });
  }, [dispatch]);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/search/1');
    localStorage.setItem('searchInput', searchValue.trim());
    props.fetchData();
  };

  return (
    <section className="search_section">
      <form onSubmit={onFormSubmit} className="search_wrapper">
        <input
          className="search_input"
          type="text"
          value={searchValue}
          onChange={(e) =>
            dispatch({ type: 'NEW_VALUE', payload: e.target.value })
          }
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
