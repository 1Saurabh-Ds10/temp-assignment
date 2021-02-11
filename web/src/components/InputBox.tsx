import React from 'react';
import { TextInput } from 'grommet';

interface InputBoxProps {
  searchText: ((string | number) & (string | number | readonly string[])) | undefined;
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox: React.FC<InputBoxProps> = ({ searchText, searchHandler }) => {
  return <TextInput placeholder="search text" value={searchText} onChange={searchHandler} />;
};
