import React from 'react';
import { Button, Card, List } from 'antd';
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions,import/no-extraneous-dependencies
import { DeleteOutlined } from '@ant-design/icons';
// @ts-ignore
import styles from './EventCardList.module.scss';
import StatisticsModal from '../StatisticsModal/StatisticsModal';
import { CustomEvent } from '../../../../types/types';
import EditEventModal from '../EditEventModal/EditEventModal'

type EventCardListProps = {
  cards: CustomEvent[];
  // eslint-disable-next-line react/no-unused-prop-types
  onRemove: (id: string) => void;
};

export const EventCardList: React.FC<EventCardListProps> = ({
  cards,
  onRemove,
}) => {
  if (cards.length === 0) {
    return <p className={styles.Center}>Событий пока нет!</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {cards.map((card) => {
        const classes = ['card'];
        if (!card.active) {
          classes.push('deleted');
        }
        return (
          <List className={classes.join(' ')} key={card.id}>
            <Card className={styles.Card}>
              <span className={styles.Title}>{card.title}</span>
              <div className={styles.EditButton}>
                <EditEventModal />
                <Button
                  type='primary'
                  danger
                  onClick={(event) => removeHandler(event, card.id)}
                  icon={<DeleteOutlined />}
                />
              </div>
            </Card>
            <StatisticsModal />
          </List>
        );
      })}
    </ul>
  );
};
