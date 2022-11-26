import React, { useState } from 'react'
import { Checkbox, Button, Input  } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
// @ts-ignore
import styles from './Form.module.scss'



export const Form: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
         setName(event.target.value)
    }

    const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const changePhoneNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value)
    }

    const changeCheckboxHandler = (event: CheckboxChangeEvent) => {
        event.target.checked
    }

    return (
        <div className={styles.Box}>

            <span className={styles.Span}>
                Чтобы узнать, какие востребованные профессии будущего вам подходят больше всего, оставьте ваши контактные данные
            </span>

            <br/>
            <br/>

            <label htmlFor='name' className={styles.Label}>
                Введите свое имя
            </label>

            <Input
                size='middle'
                className={styles.InputContainer}
                onChange={changeNameHandler}
                value={name}
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
                onChange={changeEmailHandler}
                value={email}
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
                onChange={changePhoneNumberHandler}
                value={phone}
                type='tel'
                id='phone'
                required
            />

            <Checkbox onChange={changeCheckboxHandler} className={styles.Checkbox}>
                Я согласен с условиями обработки персональных данных
            </Checkbox>

            <Button
                type='primary'
                className={styles.Button}>
                Отправить
            </Button>

        </div>
    )
}
