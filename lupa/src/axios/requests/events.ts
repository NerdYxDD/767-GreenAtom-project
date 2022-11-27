import axios, { AxiosPromise } from 'axios';
import {
  CreateEventDto,
  CreateEventRbo,
  GetEventByCodeDto,
} from '../../types/events';
import { AccessKey, RequestURLs } from '../const';
import { AxiosData, EventCode } from '../../types/types';

export const getEventByCode = async (
  eventCode: EventCode
): Promise<GetEventByCodeDto> => {
  const { data } = await axios.get<void, Promise<AxiosData<GetEventByCodeDto>>>(
    `${RequestURLs.events.getEventByCode}/${eventCode}`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkdvZCIsInN1YiI6IjZjNjcyMWM3LWEyODEtNGE1Yy04NzEyLTU5NDAwZmJjZDkyNiIsImVtYWlsIjoic2hpdEBsb2xAbWFpbC5ydSIsInJvbGVJZCI6MSwicm9sZU5hbWUiOiJhZG1pbiIsImlhdCI6MTY2OTQ5NDQyNSwiZXhwIjoxNjY5NTMwNDI1fQ.EIXDVs6OIUG5DNzXlk3srW416Ic8lt0b6xlLQ19_h6c',
      },
    }
  );
  return data;
};

export const createEvent = async (
  rbo: CreateEventRbo
): Promise<CreateEventDto> => {
  const { data } = await axios.post<
    AxiosPromise<CreateEventRbo>,
    Promise<AxiosData<CreateEventDto>>
  >(RequestURLs.events.createEvent, rbo);
  return data;
};
