import axios from 'axios';

const BaseURL = 'http://45.86.182.135:8000';
export const AccessKey = 'ACCESS_KEY';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  AccessKey
)}`;

export const RequestURLs = {
  guest: {
    create: `${BaseURL}/guest/create`,
  },
  admin: {
    create: `${BaseURL}/admin/create`,
    login: `${BaseURL}/admin/login`,
  },
};

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
};
