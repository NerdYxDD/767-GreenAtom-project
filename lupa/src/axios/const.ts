import axios from 'axios';

const BaseURL = 'http://45.86.182.135:8000';
export const AccessKey = 'ACCESS_KEY';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Authorization = `${localStorage.getItem(
  AccessKey
)}`;

export const RequestURLs = {
  guest: {
    create: `${BaseURL}/guest/create?code`,
  },
  admin: {
    create: `${BaseURL}/admin/create`,
    login: `${BaseURL}/admin/login`,
    getMyProfile: `${BaseURL}/admin/current`,
    getMyEvents: `${BaseURL}/events/active-events`,
    delEvents: `${BaseURL}/events/changeStatus/`,
  },
  events: {
    getEventByCode: `${BaseURL}/events/getEventByCode`,
    createEvent: `${BaseURL}/events/create`,
  },
  quiz: {
    createQuiz: `${BaseURL}/quiz/create`,
    getQuizsByEventId: `${BaseURL}/quiz/getByEventId`,
  },
  questions: {
    getQuestionsByQuizId: `${BaseURL}/questions`,
    getAllQuestions: `${BaseURL}/questions`,
  },
  answers: {
    getAnswersForQuestion: `${BaseURL}/answers`,
    getAllAnswers: `${BaseURL}/answers`,
  },
};
