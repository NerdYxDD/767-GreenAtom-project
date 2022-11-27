import axios, { AxiosPromise } from 'axios';
import { RequestURLs } from '../const';
import { CreateQuizDto, CreateQuizRbo } from '../../types/quiz';
import { AxiosData } from '../../types/types';

export const createQuiz = async (
  rbo: CreateQuizRbo
): Promise<CreateQuizDto> => {
  const { data } = await axios.post<
    AxiosPromise<CreateQuizRbo>,
    Promise<AxiosData<CreateQuizDto>>
  >(RequestURLs.quiz.createQuiz, rbo);
  return data;
};
