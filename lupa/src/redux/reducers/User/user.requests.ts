import { createAsyncThunk } from '@reduxjs/toolkit';

import { createGuest } from '../../../axios/requests/guest';

import { CreateGuestDto, CreateGuestRbo } from '../../../types/guest';
import {
  CreateAdminDto,
  LoginAdminDto,
  LoginAdminRbo,
} from '../../../types/admin';
import { getProfile, loginAdmin } from '../../../axios/requests/admin';
import { EventCode } from '../../../types/types';

export const guestLoginRequest = createAsyncThunk<
  CreateGuestDto,
  { rbo: CreateGuestRbo; eventCode?: EventCode },
  { rejectValue: string }
>('guest/login', async ({ eventCode, rbo }, { rejectWithValue }) => {
  try {
    return await createGuest(rbo, eventCode);
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
