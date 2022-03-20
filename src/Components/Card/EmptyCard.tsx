import React from 'react';
import { EmptyCardProps } from './Card.interface';
import './Card.scss';

const EmptyCard: React.FC<EmptyCardProps> = (props) => {
  return (
    <div className="empty-wrapper">
      <div className="text">{props.text}</div>
    </div>
  );
};

export default EmptyCard;
