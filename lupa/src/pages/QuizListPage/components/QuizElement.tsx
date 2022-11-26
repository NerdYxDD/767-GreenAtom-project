import React from 'react';
import { Card } from 'antd';
// @ts-ignore
import styles from './QuizElement.module.scss';

export const QuizElement: React.FC = () => {
  return (
    <Card className={styles.Card}>
      <div className={styles.CardWrapper}>
        <Card.Meta
          title='Card title (change me)'
          description='Description (change me) Description (change me) Description (change me)'
        />

        <img
          className={styles.Img}
          alt='example'
          src='https://248006.selcdn.ru/LandGen/desktop_2_f45739431c73c8ab9581f51a67e18189179c7433.webp'
        />
      </div>
    </Card>
  );
};
