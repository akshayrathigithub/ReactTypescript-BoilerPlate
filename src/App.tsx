import React from 'react';
import { List } from './Components/List/List';
import './GlobalStyle.scss';

const App: React.FC = () => {
  return (
    <div className="main-app">
      <List />
    </div>
  );
};
export default App;
