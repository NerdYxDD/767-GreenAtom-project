import axios, { AxiosPromise } from 'axios';
import { RequestURLs } from '../const';
import { AxiosData } from '../../types/types';
import {
  CreateAdminDto,
  CreateAdminRbo,
  LoginAdminDto,
  LoginAdminRbo,
} from '../../types/admin';

export const createAdmin = async (
  rbo: CreateAdminRbo
): Promise<CreateAdminDto> => {
  const { data } = await axios.post<
    AxiosPromise<CreateAdminRbo>,
    Promise<AxiosData<CreateAdminDto>>
  >(RequestURLs.admin.create, rbo);
  return data;
};

export const loginAdmin = async (
  rbo: LoginAdminRbo
): Promise<LoginAdminDto> => {
  const { data } = await axios.post<
    AxiosPromise<LoginAdminRbo>,
    Promise<AxiosData<LoginAdminDto>>
  >(RequestURLs.admin.login, rbo);
  return data;
};
