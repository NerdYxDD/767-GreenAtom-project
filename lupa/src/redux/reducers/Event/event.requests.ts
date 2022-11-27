import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetEventByCodeDto } from '../../../types/event';
import { EventCode } from '../../../types/types';
import { getEventByCode } from '../../../axios/requests/event';

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
