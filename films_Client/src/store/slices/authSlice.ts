import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import {IUser} from 'models/IUser';
import AuthService from "services/AuthService";
import axios from "axios";
import { API_URL } from "http/index";
import { AuthResponse } from "models/response/AuthResponse";

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
            await AuthService.logout();
            localStorage.removeItem('token');
          } catch (error: any) {
            return error.response?.data?.message;
          }
    }
  );

  export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async () => {
        try {
           const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
           localStorage.setItem('token', response.data.accessToken);

           return response.data.user;
          } catch (error: any) {
            console.log(error.response?.data?.message);
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
    name: 'authorization',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state,action) => {
            state.isAuth = true;
            state.user = action.payload;
        })
        builder.addCase(login.rejected, (state,action) => {
           console.error('Error', action.error)
        })

        builder.addCase(registration.fulfilled, (state,action) => {
            state.isAuth = true;
            state.user = action.payload;
        })
        builder.addCase(registration.rejected, (state,action) => {
           console.error('Error', action.error)
        })
        builder.addCase(logout.fulfilled, (state,action) => {
            state.isAuth = false;
            state.user = {} as IUser;
        })
        builder.addCase(logout.rejected, (state,action) => {
           console.error('Error', action.error)
        })
        builder.addCase(checkAuth.fulfilled, (state,action) => {
          state.isAuth = true;
      })
      builder.addCase(checkAuth.rejected, (state,action) => {
        state.isAuth = false;
      })
    }
})

export default authSlice;

export const isAuth = (state: RootState) => state.auth.isAuth;
