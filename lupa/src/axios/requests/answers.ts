import axios from 'axios';
import { RequestURLs } from '../const';
import { AxiosData, QuestionId } from '../../types/types';
import { GetAllAnswers, GetAnswersForQuestionDto } from '../../types/answers';

export const getAnswersForQuestion = async (
  questionId: QuestionId
): Promise<GetAnswersForQuestionDto> => {
  const { data } = await axios.get<
    void,
    Promise<AxiosData<GetAnswersForQuestionDto>>
  >(`${RequestURLs.questions.getQuestionsByQuizId}/${questionId}`);
  return data;
};

export const getAllAnswers = async (): Promise<GetAllAnswers> => {
  const { data } = await axios.get<void, Promise<AxiosData<GetAllAnswers>>>(
    RequestURLs.answers.getAllAnswers
  );
  return data;
};
