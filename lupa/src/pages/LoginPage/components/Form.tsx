import React, { useState, useMemo, useEffect } from 'react';
import { Checkbox, Button, Input } from 'antd';
// @ts-ignore
import styles from './Form.module.scss';
import { createGuest } from '../../../axios/requests/guest';

const emailCheck = /\S+@\S+\.\S+/;

interface UserInfo {
  name: string;
  email: string;
  eventId?: string;
  agreement: boolean;
}

export const Form: React.FC = () => {
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
    <div className={styles.Box}>
      <span className={styles.Span}>
        Чтобы узнать, какие востребованные профессии будущего вам подходят
        больше всего, оставьте ваши контактные данные
      </span>

      <Input
        required
        placeholder='Введите никнейм'
        size='middle'
        type='text'
        className={styles.InputContainer}
        onChange={(event) => changeHandler('name', event.target.value)}
      />

      <Input
        required
        placeholder='Введите эл. почту'
        size='middle'
        className={styles.InputContainer}
        onChange={(event) => changeHandler('email', event.target.value)}
      />

      <Input
        size='middle'
        placeholder='Введите код комнаты (при наличии)'
        className={styles.InputContainer}
        onChange={(event) => changeHandler('eventId', event.target.value)}
      />

      <Checkbox
        checked={userInfo.agreement}
        onChange={(event) => changeHandler('agreement', event.target.checked)}
        className={styles.Checkbox}
      >
        Я согласен с условиями обработки персональных данных
      </Checkbox>

      <Button disabled={!isValid} type='default' className={styles.Button}>
        Отправить
      </Button>
    </div>
  );
};
