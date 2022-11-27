import { createAsyncThunk } from '@reduxjs/toolkit';

import { createGuest } from '../../../axios/requests/guest';

import { CreateGuestDto, CreateGuestRbo } from '../../../types/guest';
import {
  CreateAdminDto,
  LoginAdminDto,
  LoginAdminRbo,
} from '../../../types/admin';
import { getProfile, loginAdmin } from '../../../axios/requests/admin';

export const guestLoginRequest = createAsyncThunk<
  CreateGuestDto,
  CreateGuestRbo,
  { rejectValue: string }
>('guest/login', async (data, { rejectWithValue }) => {
  try {
    return await createGuest(data);
  } catch (e: any) {
    return rejectWithValue(e?.response?.data.message ?? 'unknown');
  }
});

export const getAdminProfile = createAsyncThunk<
  CreateAdminDto,
  void,
  { rejectValue: string }
>('admin/profile', async (_, { rejectWithValue }) => {
  try {
    return await getProfile();
  } catch (e: any) {
    return rejectWithValue(e?.response?.data.message ?? 'unknown');
  }
});

export const adminLoginRequest = createAsyncThunk<
  LoginAdminDto,
  LoginAdminRbo,
  { rejectValue: string }
>('admin/login', async (rbo, { rejectWithValue }) => {
  try {
    return await loginAdmin(rbo);
  } catch (e: any) {
    return rejectWithValue(e?.response?.data.message ?? 'unknown');
  }
});
