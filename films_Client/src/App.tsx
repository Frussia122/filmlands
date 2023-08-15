import HomePage from 'pages/HomePage/index';
import Popular from 'pages/Popular';
import Latest from 'pages/Latest/index';
import MyList from 'pages/MyList/index';
import Collection from 'pages/Collection';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { useCookies } from 'react-cookie';
import Profile from 'pages/Profile/index';
import { Routes, Route } from 'react-router-dom';

import { 
  FavoriteUrl,
  HomeUrl,
  LatestUrl,
  PopularUrl,
  SignInUrl,
  SignUpUrl,
  CollectionUrl,
  ProfileUrl
} from 'constants/pages/urls';
import SingleMovie from 'components/SingleMovie';
import MainLayout from 'components/MainLayout/index';
import ProfileLayout from 'components/ProfileLayout';
import ProfileSubscription from 'components/ProfileSubscription';
import ProfileNotification from 'components/ProfileNotification';
import CollectionTypePage from 'components/CollectionTypePage';



function App() {
  const [cookies] = useCookies(['myCookie']);
  
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
    <Routes>
      <Route path={HomeUrl} element={<MainLayout />}>  
        <Route index element={<HomePage />}/>
        <Route path={LatestUrl} element={<Latest />}/>
        <Route path={FavoriteUrl} element={<MyList />}/>
        <Route path={CollectionUrl} element={<Collection />} />
        <Route path={`${CollectionUrl}/Series`} element={<CollectionTypePage type={'Series'} />} />
        <Route path={`${CollectionUrl}/Films`} element={<CollectionTypePage type={'Fims'}/>} />
        <Route path={`${CollectionUrl}/Child`} element={<CollectionTypePage type={'Child'}/>} />

        <Route path={`${CollectionUrl}/:id`} element={<SingleMovie />} />
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
