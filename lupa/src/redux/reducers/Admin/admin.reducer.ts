import { createSlice } from '@reduxjs/toolkit';

import { CreateAdminDto } from '../../../types/admin';
import { getAdminProfile } from './admin.requests';
import { ADMIN_PROFILE } from '../../../consts/storageKeys';

interface guestState {
  user: CreateAdminDto,
  isLoading: boolean,
  error: string,
}

const userFromStorage: CreateAdminDto | null = JSON.parse(localStorage.getItem(ADMIN_PROFILE) ?? 'null');

const initialAdmin = {
  id: userFromStorage?.id ?? '',
  email: userFromStorage?.email ?? '',
  firstName: userFromStorage?.firstName ?? '',
  lastName: userFromStorage?.lastName ?? '',
  username: userFromStorage?.username ?? '',
}

const initialState: guestState = {
  user: initialAdmin,
  isLoading: false,
  error: '',
}

export const adminSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        localStorage.setItem(ADMIN_PROFILE, JSON.stringify(action.payload));
        state.user = action.payload;
      })
      .addCase(getAdminProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? '';
        state.user = initialAdmin;
      })
  }
});

export default adminSlice.reducer;
