import React, { useState, useEffect } from 'react';

import { InputBox } from './InputBox';
import { SearchResultBox } from './SearchResultBox';

import { arrayToWord } from '../utility/helper';
import { debounce } from '../utility/debounce';
import { getSuggestions } from '../services/search';

interface InputBoxProps {}

type searchResultType = (string | null)[];

const getSuggestionsDebounce = debounce<searchResultType>(getSuggestions, 100);

export const SearchBox: React.FC<InputBoxProps> = ({}) => {
  const [text, setSearchText] = useState<string>('');
  const [result, setSearchResult] = useState<searchResultType>([]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);

    const val = e.target.value.split(' ');
    const word = arrayToWord<string>(val);

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
