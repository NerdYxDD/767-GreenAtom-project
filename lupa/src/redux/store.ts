import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/User/user.reducer';

const reducer = combineReducers({
  user: userReducer,
});

export const setStore = () =>
  configureStore({
    reducer,
  });

export type RootState = ReturnType<typeof reducer>;
export type RootStore = ReturnType<typeof setStore>;
export type RootDispatch = RootStore['dispatch'];
