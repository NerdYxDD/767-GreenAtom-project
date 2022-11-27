import React from 'react';
import { Button, Card, Collapse } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DeleteOutlined } from '@ant-design/icons';
// @ts-ignore
import styles from './EventCard.module.scss';
import EditEventModal from '../EditEventModal/EditEventModal';

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
      <div className={styles.EditButton}>
        <EditEventModal />
        <Button type='primary' danger icon={<DeleteOutlined />} />
      </div>
    </Card>
  );
};
