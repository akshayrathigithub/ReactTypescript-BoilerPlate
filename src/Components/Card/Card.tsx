import React from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';
import './Card.scss';
import FavoriteIcon from '../../Assests/Icons/favorite.svg';
import DeleteIcon from '../../Assests/Icons/delete.svg';
import { CardProps } from './Card.interface';

export const Card: React.FC<CardProps> = (props) => {
  const { friend, emptyState } = props;
  if (emptyState) {
    return <div className="wrapper">No Record Found!!!</div>;
  }
  return (
    <div className="wrapper">
      <div className="friend">
        <div className="section">
          <div className="photo">{friend.avator}</div>
          <div className="detail">
            <div className="name">{friend.name}</div>
            <div className="text">is your best friend</div>
          </div>
        </div>
        <div className="action-btn">
          <div
            className={`favorite ${friend.isFavorite ? 'is-favorite' : ''}`}
            onClick={() => {
              props.onFavorite(friend.id);
            }}
            role="presentation"
          >
            <SVGIcon>
              <FavoriteIcon />
            </SVGIcon>
          </div>

          <div
            className="delete"
            onClick={() => {
              props.onDelete(friend.id);
            }}
            role="presentation"
          >
            <SVGIcon>
              <DeleteIcon />
            </SVGIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
