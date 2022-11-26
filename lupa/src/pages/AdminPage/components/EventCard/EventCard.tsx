import React from 'react';
import { Card } from 'antd';
// @ts-ignore
import styles from './EventCard.module.scss';

interface EventCardProps {
  name: string;
  desc: string;
}

export const EventCard: React.FC<EventCardProps> = ({ name, desc }) => {
  return (
    <Card className={styles.Card}>
      <span className={styles.Title}>{name}</span>
      <div className={styles.CardWrapper}>{desc}</div>
    </Card>
  );
};
