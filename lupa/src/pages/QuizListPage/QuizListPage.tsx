import React, { useEffect } from 'react';
import { QuizElement } from './components/QuizElement';
// @ts-ignore
import styles from './QuizListPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux.hooks';
import { getEventByCodeRequest } from '../../redux/reducers/Event/event.requests';

const QuizListPage = () => {
  const dispatch = useAppDispatch();

  const eventCode = localStorage.getItem('eventCode');
  const event = useAppSelector((state) => state.event);

  useEffect(() => {
    if (eventCode) dispatch(getEventByCodeRequest(eventCode));
  }, [eventCode]);

  return (
    <div>
      <QuizElement />
    </div>
  );
};
export default QuizListPage;
