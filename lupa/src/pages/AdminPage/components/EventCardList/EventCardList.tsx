import React from 'react';
import { Button, Card, List, Modal } from 'antd';
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions,import/no-extraneous-dependencies
import { DeleteOutlined } from '@ant-design/icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ICard } from './interfaces';
// @ts-ignore
import styles from './EventCardList.module.scss';
import StatisticsModal from '../StatisticsModal/StatisticsModal';

type EventCardListProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  cards: ICard[];
  // eslint-disable-next-line react/no-unused-prop-types
  onRemove: (id: number) => void;
};

export const EventCardList: React.FC<EventCardListProps> = ({
  cards,
  onRemove,
}) => {
  if (cards.length === 0) {
    return <p className={styles.Center}>Событий пока нет!</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {cards.map((card) => {
        const classes = ['card'];
        if (card.deleted) {
          classes.push('deleted');
        }
        return (
          <List className={classes.join(' ')} key={card.id}>
            <Card className={styles.Card}>
              <span className={styles.Title}>{card.title}</span>
              <div className={styles.EditButton}>
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
