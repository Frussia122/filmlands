import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {Latest} from 'components/Home/HomeSlider/data';

interface CurrentFilmState {
    activeMovie: Latest | null; 
}

const initialState: CurrentFilmState = {
    activeMovie: null
}

const currentFilmSlice = createSlice({
    name: 'activeFilm',
    initialState,
    reducers: {
        setActiveFilm: (state, action: PayloadAction<{movie: Latest}>) => {
            state.activeMovie = action.payload.movie;
        }
    }
})

export const {setActiveFilm} = currentFilmSlice.actions;
export const currentFilm = (state: RootState) => state.activeFilm.activeMovie;

export default currentFilmSlice.reducer;