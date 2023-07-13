import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './slices/homeCategorySlice';

const rootReducer = combineReducers({
  category: categoryReducer,
  // Другие срезы состояния
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;


