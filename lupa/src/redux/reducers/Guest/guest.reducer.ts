import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { guestLoginRequest } from './guest.requests';

import { AUTHORIZATION_KEY } from '../../../consts/storageKeys';

interface guestState {
  authorized: boolean,
  isLoading: boolean,
  error: string,
}

const initialState: guestState = {
  authorized: JSON.parse(localStorage.getItem(AUTHORIZATION_KEY) ?? 'false'),
  isLoading: false,
  error: '',
}

export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    setAuthorization(state, action: PayloadAction<boolean>) {
      state.authorized = action.payload
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
        localStorage.setItem(AUTHORIZATION_KEY, JSON.stringify(state.authorized));
      })
      .addCase(guestLoginRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.authorized = false;
        state.error = action.payload ?? '';
      })
  }
});

export default guestSlice.reducer;
