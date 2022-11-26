import React from 'react';
import { Card, Collapse } from 'antd';
// @ts-ignore
import styles from './EventCard.module.scss';

interface EventCardProps {
  name: string;
  desc: string;
  statistic: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  name,
  desc,
  statistic,
}) => {
  return (
    <Card className={styles.Card}>
      <span className={styles.Title}>{name}</span>
      <div className={styles.CardWrapper}>{desc}</div>
      <Collapse>
        <Collapse.Panel key='Статистика:' header='Статистика:'>
          {statistic}
        </Collapse.Panel>
      </Collapse>
    </Card>
  );
};
