import { createSlice } from '@reduxjs/toolkit';
import { getEventByCodeRequest } from './event.requests';

const initialState = {
  event: {},
  isLoading: false,
  error: '',
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEventByCodeRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEventByCodeRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.event = action.payload;
      })
      .addCase(getEventByCodeRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? '';
      });
  },
});

export default eventSlice.reducer;
