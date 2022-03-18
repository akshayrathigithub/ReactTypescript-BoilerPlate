import React from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';
import './Card.scss';
import FavoriteIcon from '../../Assests/Icons/favorite.svg';
import DeleteIcon from '../../Assests/Icons/delete.svg';

export const Card: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="friend">
        <div className="section">
          <div className="photo">A</div>
          <div className="detail">
            <div className="name">Akshay Rathi</div>
            <div className="text">is your best friend</div>
          </div>
        </div>
        <div className="action-btn">
          <div className="favorite">
            <SVGIcon>
              <FavoriteIcon />
            </SVGIcon>
          </div>

          <div className="delete">
            <SVGIcon>
              <DeleteIcon />
            </SVGIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
