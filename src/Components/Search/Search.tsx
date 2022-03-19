import React, {
  ChangeEvent,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';
import { Utility } from '../../Utility/Utility';
import {
  initialSearchState,
  SearchProps,
  SearchState,
} from './Search.interface';
import './Search.scss';

export const Search: React.FC<SearchProps> = (props) => {
  const [searchState, setSearchState] = useState<SearchState>(
    Utility.deepClone(initialSearchState)
  );

  useEffect(() => {
    return () => {
      // second
    };
  }, []);

  const inputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedState = searchState;
    updatedState.value = event.target.value;
    updatedState.hasError = false;
    setSearchState({ ...updatedState });
    props.onSearch(event.target.value);
  };

  const addNewFriend = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const updatedState = searchState;
    if (event.key === 'Enter') {
      if (searchState.value.trim() === '') {
        updatedState.hasError = true;
        updatedState.errorMsg = 'Please enter a valid name';
      } else {
        props.onCreate(updatedState.value);
        updatedState.value = '';
      }
    }
    setSearchState({ ...updatedState });
  };

  return (
    <div className="input-wrapper">
      <input
        className={searchState.hasError ? 'input input-err-border' : 'input'}
        type={props.type}
        onChange={(event) => inputChanged(event)}
        onKeyDown={(event) => addNewFriend(event)}
        value={searchState.value}
      />
      {searchState.hasError && (
        <div className="err-msg">
          {searchState.errorMsg ? searchState.errorMsg : ''}
        </div>
      )}
    </div>
  );
};
