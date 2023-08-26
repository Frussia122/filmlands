import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, registration, isAuth, checkAuth } from 'store/slices/authSlice';
import { AppDispatch } from 'store/store';

const Latest: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const currentAuth = useSelector(isAuth);
  
  const handleLogin = async () => {
    dispatch(login({email, password}));
  }

  const handleRegistration = async () => {
    dispatch(registration({email, password}));
  }

  const checkAuthhhh = () => {
    if(localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }
  return (
    <div>
      <h1>{currentAuth ? 'Авторизован' : 'Не авторизован'}</h1>
        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegistration}>Registration</button>
        <button onClick={checkAuthhhh}>check</button>
    </div>
  )
}
export default Latest;
