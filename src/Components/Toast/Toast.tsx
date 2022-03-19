import React from 'react';
import { TOAST_TYPE } from '../../Enum/Enum';
import { ToastProps } from './Toast.interface';
import './Toast.scss';

const Toast: React.FC<ToastProps> = (props) => {
  return (
    <div
      className={`toast-wrapper ${
        props.type === TOAST_TYPE.SUCCESS ? 'success' : 'error'
      }`}
    >
      <div className="text">{props.message}</div>
    </div>
  );
};

export default Toast;
