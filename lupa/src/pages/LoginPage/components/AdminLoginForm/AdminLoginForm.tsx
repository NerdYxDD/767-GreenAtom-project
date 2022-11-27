import React, { useMemo, useState } from 'react';
import { Button, Input } from 'antd';
// @ts-ignore
import styles from '../../LoginPage.module.scss';
import { LoginAdminRbo } from '../../../../types/admin';
import { emailCheck } from '../../LoginPage';
import { useAppDispatch } from '../../../../redux/hooks/redux.hooks';
import {
  adminLoginRequest,
  getAdminProfile,
} from '../../../../redux/reducers/User/user.requests';

interface AdminLoginFormProps {
  changeMode: () => void;
}

const AdminLoginForm: React.FC<AdminLoginFormProps> = ({ changeMode }) => {
  const dispatch = useAppDispatch();

  const [adminInfo, setAdminInfo] = useState<LoginAdminRbo>({
    password: '',
    email: '',
  });

  const isValid = useMemo(
    (): boolean =>
      adminInfo.password !== '' && emailCheck.test(adminInfo.email),
    [adminInfo]
  );

  const changeHandler = (
    type: keyof LoginAdminRbo,
    value: LoginAdminRbo[typeof type]
  ) =>
    setAdminInfo((prevState) => ({
      ...prevState,
      [type]: value,
    }));

  const loginAdmin = () => {
    dispatch(adminLoginRequest(adminInfo));
    dispatch(getAdminProfile());
    // dispatch(setAuthorization(true));
  };

  return (
    <div className={styles.LoginContainer}>
      <span>Войти как админ</span>
      <div className={styles.Inputs}>
        <Input
          required
          placeholder='Введите эл. почту'
          size='middle'
          type='email'
          onChange={(event) => changeHandler('email', event.target.value)}
        />

        <Input.Password
          required
          placeholder='Введите пароль'
          size='middle'
          onChange={(event) => changeHandler('password', event.target.value)}
        />
      </div>

      <div className={styles.ButtonWrap}>
        <Button disabled={!isValid} type='default' onClick={loginAdmin}>
          Отправить
        </Button>
        <div onClick={changeMode}>Вернуться</div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
