import React from 'react';
import { Button, Typography } from 'antd';
// @ts-ignore
import styles from './QuizPage.module.scss';
import Controls from './components/Controls/Controls';

export interface QuizItemType {
  id: number;
  question: string;
  answers: string[];
}

const quizList: QuizItemType[] = [
  {
    id: 0,
    question: 'question 1',
    answers: ['answers 1', 'answers 2', 'answers 3'],
  },
  {
    id: 1,
    question: 'question 2',
    answers: ['answers 1', 'answers 2', 'answers 3'],
  },
  {
    id: 2,
    question: 'question 3',
    answers: ['answers 1', 'answers 2', 'answers 3'],
  },
  {
    id: 3,
    question: 'question 4',
    answers: ['answers 1', 'answers 2', 'answers 3'],
  },
];

const QuizPage = () => {
  const { question, answers } = quizList[0];

  return (
    <div className={styles.QuizPage}>
      <div className={styles.QuestionForm}>
        <Typography.Title level={1}>{question}</Typography.Title>

        <div className={styles.VariantList}>
          {answers.length > 0 &&
            answers.map((answer) => <Button block>{answer}</Button>)}
        </div>

        <Controls />
      </div>
    </div>
  );
};

export default QuizPage;
