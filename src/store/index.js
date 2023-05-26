import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: [thunk],
});

export default store;
