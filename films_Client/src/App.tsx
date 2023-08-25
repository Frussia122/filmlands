import HomePage from 'pages/HomePage/index';
import Latest from 'pages/Latest/index';
import MyList from 'pages/MyList/index';
import Catalog from 'pages/Catalog';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Profile from 'pages/Profile/index';
import { Routes, Route } from 'react-router-dom';

import { 
  FavoriteUrl,
  HomeUrl,
  LatestUrl,
  SignInUrl,
  SignUpUrl,
  CatalogUrl,
  ProfileUrl
} from 'constants/pages/urls';
import SingleMovie from 'components/SingleMovie';
import MainLayout from 'components/MainLayout/index';
import ProfileLayout from 'components/Profile/ProfileLayout';
import ProfileSubscription from 'components/Profile/ProfileSubscription';
import ProfileNotification from 'components/Profile/ProfileNotification';
import CatalogTypePage from 'components/Catalog/CatalogTypePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {checkAuth, isAuth} from 'store/slices/authSlice';
import { AppDispatch } from 'store/store';

function App() {
  
  const dispatch = useDispatch<AppDispatch>();  const authStatus = useSelector(isAuth);
  
  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [])
  
  // useEffect(() => {
  //   axios.get('http://bebracoderr-001-site1.ctempurl.com/movies?api-key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiSm9objMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjRmOTdmNDNlLTY1OGEtNDVhZS1hMjFjLTBmZWYxYTM5ZWEyZiIsImV4cCI6MTY4OTk3MzAwMSwiaXNzIjoiUGxhdGludW0iLCJhdWQiOiJQbGF0aW51bSJ9.2gFeFXhO0FQ_TzRXzCemJPB1wiUZHr9_cu_DOa4tFRw', {

  //   })
  // .then(response => {
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.error(error);
  // });
  // }, [])


  return (
    <>
    <h1>{authStatus ? 'Пользователь авторизован' : 'Пользователь не авторизован'}</h1>
    <Routes>
      <Route path={HomeUrl} element={<MainLayout />}>  
        <Route index element={<HomePage />}/>
        <Route path={LatestUrl} element={<Latest />}/>
        <Route path={FavoriteUrl} element={<MyList />}/>
        <Route path={CatalogUrl} element={<Catalog />} />
        <Route path={`${CatalogUrl}/Series`} element={<CatalogTypePage type={'Series'} />} />
        <Route path={`${CatalogUrl}/Films`} element={<CatalogTypePage type={'Films'}/>} />
        <Route path={`${CatalogUrl}/Child`} element={<CatalogTypePage type={'Child'}/>} />

        <Route path={`${CatalogUrl}/:id`} element={<SingleMovie />} />
      </Route>
      <Route path={ProfileUrl} element={<ProfileLayout />} >
        <Route index element={<Profile />} />
        <Route path={`${ProfileUrl}/subscription`} element={<ProfileSubscription />} />
        <Route path={`${ProfileUrl}/notification`} element={<ProfileNotification />} />

      </Route>
      <Route path={SignInUrl} element={<SignIn/>}/>
      <Route path={SignUpUrl} element={<SignUp/>}/>
      <Route path={ProfileUrl} element={<Profile />} />

    </Routes>
    </>
  );
}

export default App;
