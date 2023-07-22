import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './slices/homeCategorySlice';
import userCookieReducer from './slices/userCookieSlice';
import activeFilmReducer from './slices/currentFilmSlice';
import authSlice from './slices/authSlice';

const rootReducer = combineReducers({
  category: categoryReducer,
  userCookie: userCookieReducer,
  activeFilm: activeFilmReducer,
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;


