import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  adminLoginRequest,
  getAdminProfile,
  guestLoginRequest,
} from './user.requests';

import { ADMIN_PROFILE, AUTHORIZATION_KEY } from '../../../consts/storageKeys';
import { AccessKey } from '../../../axios/const';
import { CreateAdminDto } from '../../../types/admin';

const userFromStorage: CreateAdminDto | null = JSON.parse(
  localStorage.getItem(ADMIN_PROFILE) ?? 'null'
);

const initialAdmin = {
  id: userFromStorage?.id ?? '',
  email: userFromStorage?.email ?? '',
  firstName: userFromStorage?.firstName ?? '',
  lastName: userFromStorage?.lastName ?? '',
  username: userFromStorage?.username ?? '',
};

interface userState {
  admin: CreateAdminDto;
  authorized: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: userState = {
  admin: initialAdmin,
  authorized: JSON.parse(localStorage.getItem(AUTHORIZATION_KEY) ?? 'false'),
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorization(state, action: PayloadAction<boolean>) {
      state.authorized = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(guestLoginRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(guestLoginRequest.fulfilled, (state) => {
        state.isLoading = false;
        state.authorized = true;
        state.error = '';
        localStorage.setItem(
          AUTHORIZATION_KEY,
          JSON.stringify(state.authorized)
        );
      })
      .addCase(guestLoginRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.authorized = false;
        state.error = action.payload ?? '';
      });

    builder
      .addCase(getAdminProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        localStorage.setItem(ADMIN_PROFILE, JSON.stringify(action.payload));
        state.admin = action.payload;
      })
      .addCase(getAdminProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? '';
        state.admin = initialAdmin;
      });

    builder
      .addCase(adminLoginRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminLoginRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authorized = true;
        state.error = '';
        localStorage.setItem(AccessKey, action.payload.access_token);
      })
      .addCase(adminLoginRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.authorized = false;
        state.error = action.payload ?? '';
        state.admin = initialAdmin;
      });
  },
});

export default userSlice.reducer;
