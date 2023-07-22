import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import {IUser} from 'models/IUser';
import AuthService from "services/AuthService";

export const login = createAsyncThunk<IUser, { email: string, password: string }>(
    "auth/login",
    async ({ email, password }) => {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            return response.data.user;
          } catch (error: any) {
            return error.response?.data?.message;
          }
    }
  );

  export const registration = createAsyncThunk<IUser, { email: string, password: string }>(
    "auth/registration",
    async ({ email, password }) => {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);

            return response.data.user;
          } catch (error: any) {
            return error.response?.data?.message;
          }
    }
  );

  export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
          } catch (error: any) {
            return error.response?.data?.message;
          }
    }
  );


interface CurrentUser {
    user: IUser | null;
    isAuth: boolean;
} 

const initialState: CurrentUser = {
    user: null,
    isAuth: false,
}

const authSlice = createSlice({
    name: 'authorisation',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state,action) => {
            state.isAuth = true;
            state.user = action.payload;
        })
        builder.addCase(login.rejected, (state,action) => {
           console.error('ошибка', action.error)
        })

        builder.addCase(registration.fulfilled, (state,action) => {
            state.isAuth = true;
            state.user = action.payload;
        })
        builder.addCase(registration.rejected, (state,action) => {
           console.error('ошибка', action.error)
        })
        builder.addCase(logout.fulfilled, (state,action) => {
            state.isAuth = false;
            state.user = {} as IUser;
        })
        builder.addCase(logout.rejected, (state,action) => {
           console.error('ошибка', action.error)
        })
    }
})

export default authSlice;

