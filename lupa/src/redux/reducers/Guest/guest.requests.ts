import { createAsyncThunk } from '@reduxjs/toolkit';

import { createGuest } from '../../../axios/requests/guest';

import { CreateGuestDto, CreateGuestRbo } from '../../../types/guest';


export const guestLoginRequest = createAsyncThunk<CreateGuestDto, CreateGuestRbo, { rejectValue: string }>(
  'guest/login',
  async (data, { rejectWithValue }) => {
    try {
      return await createGuest(data);
    } catch (e: any) {
      return rejectWithValue(e?.response?.data.message ?? 'unknown')
    }
  }
);
