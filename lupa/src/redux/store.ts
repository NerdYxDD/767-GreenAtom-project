import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/User/user.reducer';
import eventReducer from './reducers/Event/event.reducer';

const reducer = combineReducers({
  user: userReducer,
  event: eventReducer,
});

export const setStore = () =>
  configureStore({
    reducer,
  });

export type RootState = ReturnType<typeof reducer>;
export type RootStore = ReturnType<typeof setStore>;
export type RootDispatch = RootStore['dispatch'];
