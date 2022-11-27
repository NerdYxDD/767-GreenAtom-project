import axios, { AxiosPromise } from 'axios';
import {
  CreateEventDto,
  CreateEventRbo,
  GetEventByCodeDto,
} from '../../types/event';
import { RequestURLs } from '../const';
import { AxiosData, EventCode } from '../../types/types';

export const getEventByCode = async (
  code: EventCode
): Promise<GetEventByCodeDto> => {
  const { data } = await axios.get<
    void,
    Promise<AxiosData<GetEventByCodeDto>>
  >(`${RequestURLs.event.getEventByCode}/${code}`);
  return data;
};

export const createEvent = async (
  rbo: CreateEventRbo
): Promise<CreateEventDto> => {
  const { data } = await axios.post<
    AxiosPromise<CreateEventRbo>,
    Promise<AxiosData<CreateEventDto>>
  >(RequestURLs.event.createEvent, rbo);
  return data;
};
