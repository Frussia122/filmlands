import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './slices/homeCategorySlice';
import userCookieReducer from './slices/userCookieSlice';
import activeFilmReducer from './slices/currentFilmSlice';

const rootReducer = combineReducers({
  category: categoryReducer,
  userCookie: userCookieReducer,
  activeFilm: activeFilmReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;


