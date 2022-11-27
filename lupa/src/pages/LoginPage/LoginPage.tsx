import React, { useState } from 'react';
import UserLoginForm from './components/UserLoginForm/UserLoginForm';
import AdminLoginForm from './components/AdminLoginForm/AdminLoginForm';
// @ts-ignore
import styles from './LoginPage.module.scss';

export const emailCheck = /\S+@\S+\.\S+/;

const LoginPage = () => {
  const [adminsRegistration, setAdminsRegistration] = useState(false);

  const changeLoginMode = () =>
    setAdminsRegistration((prevState) => !prevState);

  return (
    <div className={styles.LoginPage}>
      {adminsRegistration ? (
        <AdminLoginForm changeMode={changeLoginMode} />
      ) : (
        <UserLoginForm changeMode={changeLoginMode} />
      )}
    </div>
  );
};
export default LoginPage;
