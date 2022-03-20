import React, { ChangeEvent, useState } from 'react';
import { ToggleProps } from './Toggle.interface';
import './Toggle.scss';

const Toggle: React.FC<ToggleProps> = (props) => {
  const [toggleState, setToggleState] = useState<boolean>(false);

  const toggleUpdated = (value: boolean) => {
    setToggleState(value);
    props.onToggle(value);
  };

  return (
    <div className="toogle-wrapper">
      <div className="text">Favorite On Top</div>
      <label className="toggle-control">
        <input
          type="checkbox"
          name="favorite"
          checked={toggleState}
          onChange={(event) => toggleUpdated(event.target.checked)}
        />
        <span className="control"></span>
      </label>
    </div>
  );
};

export default Toggle;
