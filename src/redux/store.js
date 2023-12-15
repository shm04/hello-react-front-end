import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './actions/greetingActions';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
