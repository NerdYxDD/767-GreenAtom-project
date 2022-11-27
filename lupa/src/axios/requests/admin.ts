import axios, { AxiosPromise } from 'axios';
import { AccessKey, RequestURLs } from '../const';
import { AxiosData } from '../../types/types';
import {
  CreateAdminDto,
  CreateAdminRbo,
  LoginAdminDto,
  LoginAdminRbo,
} from '../../types/admin';
import { getEvents } from '../../types/events';

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

export const getProfile = async (): Promise<CreateAdminDto> => {
  const { data } = await axios.get<
    void,
    Promise<AxiosData<CreateAdminDto>>
    >(RequestURLs.admin.getMyProfile, { headers: { 'Authorization': localStorage.getItem(AccessKey) } });
  return data;
};

export const getAdminEvents = async (): Promise<getEvents[]> => {
  const { data } = await axios.get<
    void,
    Promise<AxiosData<getEvents[]>>
    >(RequestURLs.admin.getMyEvents, { headers: { 'Authorization': localStorage.getItem(AccessKey) } });

  return data;
};

export const delEvents = async (eventId: string): Promise<getEvents[]> => {
  const { data } = await axios.put<
    void,
    Promise<AxiosData<getEvents[]>>
    >(RequestURLs.admin.delEvents + eventId);

  return data;
};
