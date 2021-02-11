import React, { useState, useEffect } from 'react';

import { Box, List } from 'grommet';

interface SearchResultProps {
  searchResult: (string | null)[];
}

const getResultObj = (result: (string | null)[]) => result.map((res) => ({ name: res }));

export const SearchResultBox: React.FC<SearchResultProps> = ({ searchResult }) => {
  const [showResult, setShowResult] = useState<boolean>(false);
  console.log(searchResult);
  useEffect(() => {
    if (searchResult && searchResult.length > 0) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, [searchResult]);
  return (
    <>
      {showResult ? (
        <Box pad="medium" background="light-3" className="searchResultBox">
          <List primaryKey="name" data={getResultObj(searchResult)} />
        </Box>
      ) : null}
    </>
  );
};
