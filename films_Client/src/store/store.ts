import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './slices/homeCategorySlice';
import userCookieReducer from './slices/userCookieSlice';

const rootReducer = combineReducers({
  category: categoryReducer,
  userCookie: userCookieReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;


