import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateEventDto, GetEventByCodeDto } from '../../../types/events';
import { EventCode } from '../../../types/types';
import { createEvent, getEventByCode } from '../../../axios/requests/events';
import { delEvents, getAdminEvents } from '../../../axios/requests/admin';

export const getEventByCodeRequest = createAsyncThunk<
  GetEventByCodeDto,
  EventCode,
  { rejectValue: string }
>('event/getByCode', async (data, { rejectWithValue }) => {
  try {
    return await getEventByCode(data);
  } catch (e: any) {
    return rejectWithValue(e?.response?.data.message ?? 'unknown');
  }
});

export const getAdminEventsThunk = createAsyncThunk<
  CreateEventDto,
  void,
  { rejectValue: string }
  >('event/all', async (data, { rejectWithValue }) => {
  try {
    return await getAdminEvents();
  } catch (e: any) {
    return rejectWithValue(e?.response?.data.message ?? 'unknown');
  }
});

export const delEventThunk = createAsyncThunk<
  CreateEventDto,
  string,
  { rejectValue: string }
  >('event/del', async (eventId, { rejectWithValue }) => {
  try {
    return await delEvents(eventId);
  } catch (e: any) {
    return rejectWithValue(e?.response?.data.message ?? 'unknown');
  }
});

export const createEventThunk = createAsyncThunk<
  CreateEventDto,
  string,
  { rejectValue: string }
  >('event/create', async (title, { rejectWithValue }) => {
  try {
    return await createEvent({ title });
  } catch (e: any) {
    return rejectWithValue(e?.response?.data.message ?? 'unknown');
  }
});
