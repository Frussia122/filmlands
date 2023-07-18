import HomePage from 'pages/HomePage/index';
import Popular from 'pages/Popular';
import Latest from 'pages/Latest/index';
import MyList from 'pages/MyList/index';
import Collection from 'pages/Collection';
import withLayout  from 'Hoc/RouteWithLayout';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { 
  FavoriteUrl,
  HomeUrl,
  LatestUrl,
  PopularUrl,
  SignInUrl,
  SignUpUrl,
  CollectionUrl
} from 'constants/pages/urls';
import { useEffect } from 'react';
import SingleMovie from 'components/SingleMovie';


const HomePageLayout = withLayout(HomePage);
const PopularLayout = withLayout(Popular);
const LatestLayout = withLayout(Latest);
const MyListLayout = withLayout(MyList);
const CollectionLayout = withLayout(Collection);
const SingleMovieListLayout = withLayout(SingleMovie);
function App() {
  const [cookies] = useCookies(['myCookie']);
  
  useEffect(() => {
    axios.get('http://bebracoderr-001-site1.ctempurl.com/api-key?asojdnajsmdnamsdn/movies', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTmFuY3kiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImUzMjRhZTQ3LWE5OGMtNDYwNy05NTRkLWIzMThlZWUzZDdiNCIsImV4cCI6MTY4OTYxOTgyMiwiaXNzIjoiUGxhdGludW0iLCJhdWQiOiJQbGF0aW51bSJ9.mArHZNzk4PbtwBy_3KLq4-hMH7NAnX4hwcdB-oRPK8g'
      },
    })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  }, [])
  return (
    <>
    <Routes>
      <Route path={HomeUrl} element={<HomePageLayout />} />
      <Route path={PopularUrl} element={<PopularLayout />}/>
      <Route path={LatestUrl} element={<LatestLayout />}/>
      <Route path={FavoriteUrl} element={<MyListLayout />}/>
      <Route path={CollectionUrl} element={<CollectionLayout />} />
      <Route path={`${CollectionUrl}/:id`} element={<SingleMovieListLayout />} />
      <Route path={SignInUrl} element={<SignIn/>}/>
      <Route path={SignUpUrl} element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
