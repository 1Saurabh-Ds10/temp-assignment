import React from 'react';
import { Grommet, grommet, Heading } from 'grommet';

import { SearchBox } from './components/SearchBox';
import './App.css';

function App() {
  return (
    <Grommet className="App" theme={grommet}>
      <Heading level="1">Search App</Heading>
      <SearchBox />
    </Grommet>
  );
}

export default App;
