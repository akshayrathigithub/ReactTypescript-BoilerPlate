import React, { ChangeEvent } from 'react';
import { SearchProps } from './Search.interface';
import './Search.scss';

export const Search: React.FC<SearchProps> = (props) => {
  return (
    <div className="input-wrapper">
      <input
        className={props.hasError ? 'input input-err-border' : 'input'}
        type={props.type}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          props.onUpdate ? props.onUpdate(event.target.value) : null
        }
        value={props.value}
      />
      {props.hasError && (
        <div className="err-msg">{props.errorMsg ? props.errorMsg : ''}</div>
      )}
    </div>
  );
};
