import { createSlice } from '@reduxjs/toolkit';
import { createEventThunk, delEventThunk, getAdminEventsThunk, getEventByCodeRequest } from './event.requests';

import { CustomEvent } from '../../../types/types';


interface IInitials {
  adminEvents: CustomEvent[],
  event: CustomEvent,
  isLoading: boolean,
  error: string,
}

const initialState: IInitials = {
  adminEvents: [],
  event: {
    id: '',
    code: '',
    title: '',
    active: false,
    ownerId: '',
  },
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

    builder
      .addCase(getAdminEventsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminEventsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adminEvents = action.payload;
      })
      .addCase(getAdminEventsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? '';
      });

    builder
      .addCase(delEventThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(delEventThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adminEvents = action.payload;
      })
      .addCase(delEventThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? '';
      });

    builder
      .addCase(createEventThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEventThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adminEvents = action.payload;
      })
      .addCase(createEventThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? '';
      });
  },
});

export default eventSlice.reducer;
