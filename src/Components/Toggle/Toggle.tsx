import React from 'react';
import './Toggle.scss';

const Toggle: React.FC = () => {
  return (
    <div className="toogle-wrapper">
      <div className="text">Favorite First</div>
      <div className="toggle-control">
        <input type="checkbox" checked={true} />
        <span className="control"></span>
      </div>
    </div>
  );
};

export default Toggle;
