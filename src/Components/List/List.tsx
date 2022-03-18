import React from 'react';
import { Card } from '../Card/Card';
import { Search } from '../Search/Search';
import './List.scss';

export const List: React.FC = () => {
  // Update the state when the input is changed
  const formUpdated = (value: string) => {
    console.log(value, 'value');
  };
  return (
    <div className="container">
      <div className="header">
        <div className="name">Friends List</div>
        <div className="favorite-only">FA</div>
      </div>
      <div className="content">
        <Search
          type="text"
          value={'Hello'}
          hasError={true}
          errorMsg={'error'}
          onUpdate={(updatedValue: string) => formUpdated(updatedValue)}
        />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
