'use client';

import router from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import React from 'react';
import { useSearchParams } from 'next/navigation';

function SearchBar() {
  const [inputValue, setInputValue] = useState<string>('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const val = searchParams ? searchParams.get('query')?.toString() : '';
    if (val) setInputValue(val);
  }, [searchParams]);

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      router.push({
        pathname: '/search/1',
        query: 'query=' + inputValue.trim(),
      });
    } else {
      router.push({
        pathname: '/search/1',
      });
    }
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
      </form>
    </section>
  );
}

export default SearchBar;
