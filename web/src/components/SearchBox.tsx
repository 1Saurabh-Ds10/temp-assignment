import React, { useState, useEffect } from 'react';

import { InputBox } from './InputBox';
import { SearchResultBox } from './SearchResultBox';

import { arrayToLastWord } from '../utility/helper';
import { debounce } from '../utility/debounce';
import { getSuggestions } from '../services/search';

interface InputBoxProps {}

type searchResultType = (string | null)[];

const getSuggestionsDebounce = debounce<searchResultType>(getSuggestions, 200); // delay of 200 ms

export const SearchBox: React.FC<InputBoxProps> = ({}) => {
  const [text, setSearchText] = useState<string>(''); // handles user entered search text
  const [result, setSearchResult] = useState<searchResultType>([]); // handles result from the service

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);

    const val = e.target.value.split(' ');
    const word = arrayToLastWord<string>(val);

    if (word?.trim()) {
      getSuggestionsDebounce(word).then((val) => {
        if (val) setSearchResult(val);
      });
    }
  };

  return (
    <>
      <InputBox searchText={text} searchHandler={searchHandler} />
      <SearchResultBox searchResult={result} />
    </>
  );
};
