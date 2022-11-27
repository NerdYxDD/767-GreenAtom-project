import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Checkbox, Input } from 'antd';
import { useAppDispatch } from '../../../../redux/hooks/redux.hooks';
import { guestLoginRequest } from '../../../../redux/reducers/User/user.requests';
// @ts-ignore
import styles from '../../LoginPage.module.scss';
import { emailCheck } from '../../LoginPage';

interface UserInfo {
  name: string;
  email: string;
  eventCode?: string;
  agreement: boolean;
}

interface UserLoginFormProps {
  changeMode: () => void;
}

const UserLoginForm: React.FC<UserLoginFormProps> = ({ changeMode }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const eventCodeParams = new URLSearchParams(location.search).get('eventCode');

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    agreement: false,
    eventCode: eventCodeParams ?? undefined,
  });

  const isValid = useMemo(
    (): boolean =>
      userInfo.name !== '' &&
      emailCheck.test(userInfo.email) &&
      userInfo.agreement,
    [userInfo]
  );

  const changeHandler = (type: keyof UserInfo, value: UserInfo[typeof type]) =>
    setUserInfo((prevState) => ({ ...prevState, [type]: value }));

  const login = () => {
    localStorage.setItem('eventCode', JSON.stringify(userInfo.eventCode));

    dispatch(
      guestLoginRequest({ username: userInfo.name, email: userInfo.email })
    );
  };

  return (
    <div className={styles.LoginContainer}>
      <span>
        Чтобы узнать, какие востребованные профессии будущего вам подходят
        больше всего, оставьте ваши контактные данные
      </span>

      <div className={styles.Inputs}>
        <Input
          required
          value={userInfo.name}
          placeholder='Введите никнейм'
          size='middle'
          type='text'
          onChange={(event) => changeHandler('name', event.target.value)}
        />

        <Input
          required
          value={userInfo.email}
          placeholder='Введите эл. почту'
          size='middle'
          onChange={(event) => changeHandler('email', event.target.value)}
        />

        <Input
          size='middle'
          value={userInfo.eventCode}
          placeholder='Введите код комнаты (при наличии)'
          onChange={(event) => changeHandler('eventCode', event.target.value)}
        />

        <Checkbox
          className={styles.Checkbox}
          checked={userInfo.agreement}
          onChange={(event) => changeHandler('agreement', event.target.checked)}
        >
          Я согласен с условиями обработки персональных данных
        </Checkbox>
      </div>
      <div className={styles.ButtonWrap}>
        <Button onClick={login} disabled={!isValid} type='default'>
          Отправить
        </Button>

        <div onClick={changeMode}>Войти как админ</div>
      </div>
    </div>
  );
};

export default UserLoginForm;
