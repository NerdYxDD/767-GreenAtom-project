import axios, { AxiosPromise } from 'axios';
import { AccessKey, RequestURLs } from '../const';

interface CreateGuestRbo {
  email: string;
  username: string;
}

interface CreateGuestDto {
  access_token: string;
}

export const createGuest = async (
  rbo: CreateGuestRbo
): Promise<CreateGuestDto> => {
  const { data } = await axios.post<
    AxiosPromise<CreateGuestRbo>,
    Promise<{ data: CreateGuestDto }>
  >(RequestURLs.guest.create, rbo);
  localStorage.setItem(AccessKey, data.access_token);
  return data;
};
