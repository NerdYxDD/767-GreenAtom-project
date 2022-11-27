import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetEventByCodeDto } from '../../../types/events';
import { EventCode } from '../../../types/types';
import { getEventByCode } from '../../../axios/requests/events';

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
