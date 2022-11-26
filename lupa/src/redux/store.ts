import { combineReducers, configureStore } from '@reduxjs/toolkit';

import guestReducer from './reducers/Guest/guest.reducer';
import adminReducer from './reducers/Admin/admin.reducer';

const reducer = combineReducers({
  guest: guestReducer,
  admin: adminReducer,
});

export const setStore = () => configureStore({
  reducer,
})

export type RootState = ReturnType<typeof reducer>;
export type RootStore = ReturnType<typeof setStore>;
export type RootDispatch = RootStore['dispatch'];
