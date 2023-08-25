import {login} from 'store/slices/authSlice';

export const handleLogin = (values: object) => {
    console.log(login);
    console.log(values);
}