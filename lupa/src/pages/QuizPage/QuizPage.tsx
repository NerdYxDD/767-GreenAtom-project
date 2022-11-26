import React from 'react';
import QuestionForm from './components/QuestionForm/QuestionForm';
// @ts-ignore
import styles from './QuizPage.module.scss';

const QuizPage = () => {
  return (
    <div className={styles.QuizPage}>
      <QuestionForm />
    </div>
  );
};

export default QuizPage;
