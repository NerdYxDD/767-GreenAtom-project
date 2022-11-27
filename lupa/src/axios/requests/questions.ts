import axios from 'axios';
import { RequestURLs } from '../const';
import {
  GetAllQuestionsDto,
  GetQuestionsByQuizIdDto,
} from '../../types/questions';
import { AxiosData, QuizId } from '../../types/types';

export const getQuestionsByQuizId = async (
  quizId: QuizId
): Promise<GetQuestionsByQuizIdDto> => {
  const { data } = await axios.get<
    void,
    Promise<AxiosData<GetQuestionsByQuizIdDto>>
  >(`${RequestURLs.questions.getQuestionsByQuizId}/${quizId}`);
  return data;
};

export const getAllQuestions = async (): Promise<GetAllQuestionsDto> => {
  const { data } = await axios.get<
    void,
    Promise<AxiosData<GetAllQuestionsDto>>
  >(RequestURLs.questions.getAllQuestions);
  return data;
};
