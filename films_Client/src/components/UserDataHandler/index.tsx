import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectEncryptData, setUserData, getUserData, selectDecryptData } from 'store/slices/userCookieSlice';

type UserDataHandlerProps = {
  encryptedData: string;
};

const UserDataHandler: React.FC<UserDataHandlerProps> = ({ encryptedData }) => {
  const dectyptedValue = useSelector(selectDecryptData);
  const [cookies, setCookie] = useCookies(['myCookie']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(encryptedData));
    setCookie('myCookie', encryptedData, { path: '/' });
  }, [encryptedData]);

  useEffect(() => {
    console.log(dectyptedValue);
  }, [dectyptedValue]);

  return null;
};

export default UserDataHandler;