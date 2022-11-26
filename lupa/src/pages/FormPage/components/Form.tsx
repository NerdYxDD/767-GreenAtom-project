import React, { useState, useMemo } from 'react';
import { Checkbox, Button, Input } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
// @ts-ignore
import styles from './Form.module.scss';

export const Form: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });

  console.log(userInfo);

  const isValid = useMemo(
    (): boolean =>
      userInfo.name !== '' && userInfo.email !== '' && userInfo.phone !== '',
    [userInfo]
  );

  console.log('/////', isValid);

  // const changeHandler = (name: string, value: string) => {
  //   setUserInfo((prevState) => ({ ...prevState, name: value }));
  // };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  };

  const changeCheckboxHandler = (event: CheckboxChangeEvent) => {
    event.target.checked;
  };

  return (
    <div className={styles.Box}>
      <span className={styles.Span}>
        Чтобы узнать, какие востребованные профессии будущего вам подходят
        больше всего, оставьте ваши контактные данные
      </span>

      <br />
      <br />

      <label htmlFor='name' className={styles.Label}>
        Введите свое имя
      </label>

      <Input
        size='middle'
        className={styles.InputContainer}
        onChange={changeHandler}
        type='text'
        id='name'
        required
      />

      <label htmlFor='email' className={styles.Label}>
        Введите свой email
      </label>

      <Input
        size='middle'
        className={styles.InputContainer}
        onChange={changeHandler}
        type='email'
        id='email'
        required
      />

      <label htmlFor='phone' className={styles.Label}>
        Введите номер телефона
      </label>

      <Input
        size='middle'
        className={styles.InputContainer}
        onChange={changeHandler}
        type='tel'
        id='phone'
        required
      />

      <Checkbox onChange={changeCheckboxHandler} className={styles.Checkbox}>
        Я согласен с условиями обработки персональных данных
      </Checkbox>

      <Button disabled={!isValid} type='default' className={styles.Button}>
        Отправить
      </Button>
    </div>
  );
};
