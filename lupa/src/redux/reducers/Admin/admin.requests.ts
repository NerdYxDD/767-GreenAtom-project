import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfile } from '../../../axios/requests/admin';
import { CreateAdminDto } from '../../../types/admin';


export const getAdminProfile = createAsyncThunk<CreateAdminDto, void, { rejectValue: string }>(
  'admin/profile',
  async (_, { rejectWithValue }) => {
    try {
      return await getProfile();
    } catch (e: any) {
      return rejectWithValue(e?.response?.data.message ?? 'unknown')
    }
  }
);
