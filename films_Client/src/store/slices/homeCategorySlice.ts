import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CategoryState {
  activeIndex: number;
  activeGenre: string;
}

const initialState: CategoryState = {
  activeIndex: 0,
  activeGenre: 'Action',
};

const homeCategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<{ index: number; genre: string }>) => {
      state.activeIndex = action.payload.index;
      state.activeGenre = action.payload.genre;
    },
  },
});

export const { setActive } = homeCategorySlice.actions;
export const selectActiveIndex = (state: RootState) => state.category.activeIndex;
export const selectActiveGenre = (state: RootState) => state.category.activeGenre;

export default homeCategorySlice.reducer;

