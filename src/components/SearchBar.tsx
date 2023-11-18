import { FormEvent, useEffect, useState } from 'react';
import ErrorButton from './errorBtn';
import { useNavigate } from 'react-router-dom';
import { searchSlice } from '../services/store/valueReducer';
import { useAppDispatch, useAppSelector } from '../services/store/store';

type myProps = { fetchData: () => void };

function SearchBar(props: myProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.value.searchValue);
  const { updateSearch } = searchSlice.actions;
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setInputValue(searchValue);
  }, [searchValue]);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/search/1');
    if (inputValue) {
      dispatch(updateSearch(inputValue.trim()));
    } else dispatch(updateSearch(''));
    props.fetchData();
  };

  return (
    <section className="search_section">
      <form onSubmit={onFormSubmit} className="search_wrapper">
        <input
          className="search_input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
