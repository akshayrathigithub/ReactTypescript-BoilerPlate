import React, { useState } from 'react';
import { List } from './Components/List/List';
import Toast from './Components/Toast/Toast';
import { TOAST_TYPE } from './Enum/Enum';
import './GlobalStyle.scss';

const App: React.FC = () => {
  const [toast, setToast] = useState({
    showToast: false,
    message: '',
    type: TOAST_TYPE.SUCCESS,
  });

  const showToast = (message: string, toastType: TOAST_TYPE) => {
    const updatedState = toast;
    updatedState.showToast = true;
    updatedState.type = toastType;
    updatedState.message = message;
    setToast({ ...updatedState });
    setTimeout(() => {
      updatedState.showToast = false;
      setToast({ ...updatedState });
    }, 4000);
  };
  return (
    <div className="main-app">
      {toast.showToast && <Toast message={toast.message} type={toast.type} />}
      <List showToast={(message, type) => showToast(message, type)} />
    </div>
  );
};
export default App;
