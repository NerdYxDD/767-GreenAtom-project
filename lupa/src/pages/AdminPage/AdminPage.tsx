import React, { useEffect } from 'react';
import { EventCardList } from './components/EventCardList/EventCardList';
import CreateEventModal from './components/CreateEventModal/CreateEventModal';
// @ts-ignore
import styles from './AdminPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux.hooks';
import { eventSelector } from '../../redux/selectors/event.selector';
import { createEventThunk, delEventThunk, getAdminEventsThunk } from '../../redux/reducers/Event/event.requests';

const AdminPage = () => {
  const dispatch = useAppDispatch();

  const { adminEvents } = useAppSelector(eventSelector);


  const addCardHandler = (title: string) => {
    dispatch(createEventThunk(title))
  };

  const removeHandler = (id: string) => {
    const shouldRemove = window.confirm(
      'Вы уверены, что хотите удалить событие?'
    );
    if (shouldRemove) {
      dispatch(delEventThunk(id))
    }
  };

  useEffect(() => {
    dispatch(getAdminEventsThunk())
  }, [])

  return (
    <div className={styles.AdminPageContainer}>
      <div>
        <CreateEventModal onCardAdd={addCardHandler} />
      </div>
      <EventCardList cards={adminEvents} onRemove={removeHandler} />
    </div>
  );
};

export default AdminPage;
