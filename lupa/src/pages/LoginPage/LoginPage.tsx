import React, { useMemo, useState } from 'react';
import { Button, Checkbox, Input } from 'antd';
// @ts-ignore
import styles from './LoginPage.module.scss';

const emailCheck = /\S+@\S+\.\S+/;

interface UserInfo {
  name: string;
  email: string;
  eventId?: string;
  agreement: boolean;
}

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    agreement: false,
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

  return (
    <div className={styles.LoginContainer}>
      <span>
        Чтобы узнать, какие востребованные профессии будущего вам подходят
        больше всего, оставьте ваши контактные данные
      </span>

      <div className={styles.Inputs}>
        <Input
          required
          placeholder='Введите никнейм'
          size='middle'
          type='text'
          onChange={(event) => changeHandler('name', event.target.value)}
        />

        <Input
          required
          placeholder='Введите эл. почту'
          size='middle'
          onChange={(event) => changeHandler('email', event.target.value)}
        />

        <Input
          size='middle'
          placeholder='Введите код комнаты (при наличии)'
          onChange={(event) => changeHandler('eventId', event.target.value)}
        />

        <Checkbox
          className={styles.Checkbox}
          checked={userInfo.agreement}
          onChange={(event) => changeHandler('agreement', event.target.checked)}
        >
          Я согласен с условиями обработки персональных данных
        </Checkbox>
      </div>

      <Button disabled={!isValid} type='default'>
        Отправить
      </Button>
    </div>
  );
};
export default LoginPage;
