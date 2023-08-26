import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {encryptValue, decryptValue } from 'Utils/CryptoData/index'
const SECRET_KEY = process.env.REACT_APP_USERDATA_SECRET_KEY || 'asdagasdagashas2asdf';


interface userCookieState {
  encrypt: string | null;
  decrypt: string | null;
}

const initialState: userCookieState = {
  encrypt: null,
  decrypt: null,
};

const userCookieSlice = createSlice({
  name: 'userCookie',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<object | null>) => {
      if (SECRET_KEY) {
        const encryptedValue = encryptValue(action.payload, SECRET_KEY);
        state.encrypt = encryptedValue;
      } else {
        console.warn('SECRET_KEY is not defined. Skipping encryption.');
      }
    },
    removeUserData: (state, action: PayloadAction<object | null>) => {
        state.encrypt = null;
        state.decrypt = null;
    },
    getUserData: (state, action: PayloadAction<string | null>) => {
        const decryptedValue = decryptValue(action.payload, SECRET_KEY)
        state.decrypt = decryptedValue;
    }
  },
});

export const { setUserData, removeUserData, getUserData } = userCookieSlice.actions;
export const selectEncryptData = (state: RootState) => state.userCookie.encrypt;
export const selectDecryptData = (state: RootState) => state.userCookie.decrypt;


export default userCookieSlice.reducer;