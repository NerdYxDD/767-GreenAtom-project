import React, { useState } from 'react';
import { Button } from 'antd';
import { EventCardList } from './components/EventCardList/EventCardList';
import CreateEventModal from './components/CreateEventModal/CreateEventModal';
import { ICard } from './components/EventCardList/interfaces';
// @ts-ignore
import styles from './AdminPage.module.scss';

const AdminPage = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  const addCardHandler = (title: string) => {
    const newEvent: ICard = {
      title,
      id: Date.now(),
      deleted: false,
    };
    setCards((prevState) => [newEvent, ...prevState]);
  };

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm(
      'Вы уверены, что хотите удалить событие?'
    );
    if (shouldRemove) {
      setCards((prevState) => prevState.filter((card) => card.id !== id));
    }
  };

  return (
    <div className={styles.AdminPageContainer}>
      <div>
        <CreateEventModal onCardAdd={addCardHandler} />
      </div>
      <EventCardList cards={cards} onRemove={removeHandler} />
    </div>
  );
};

export default AdminPage;
