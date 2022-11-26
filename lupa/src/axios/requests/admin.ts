import axios from 'axios';
import { RequestURLs } from '../const';

interface CreateAdminRbo {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
}

export const createAdmin = async (rbo: CreateAdminRbo) => {
  const { data } = await axios.post(RequestURLs.admin.create, rbo);
  return data;
};

interface LoginAdminRbo {
  password: string;
  email: string;
}

export const loginAdmin = async (rbo: LoginAdminRbo) => {
  const { data } = await axios.post(RequestURLs.admin.login, rbo);
  return data;
};
