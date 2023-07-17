import HomePage from 'pages/HomePage/index';
import Popular from 'pages/Popular';
import Latest from 'pages/Latest/index';
import MyList from 'pages/MyList/index';
import withLayout  from 'Hoc/RouteWithLayout';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { useCookies } from 'react-cookie';

import { Routes, Route } from 'react-router-dom';
import { 
  FavoriteUrl,
  HomeUrl,
  LatestUrl,
  PopularUrl,
  SignInUrl,
  SignUpUrl 
} from 'constants/pages/urls';


const HomePageLayout = withLayout(HomePage);
const PopularLayout = withLayout(Popular);
const LatestLayout = withLayout(Latest);
const MyListLayout = withLayout(MyList);


function App() {
  const [cookies] = useCookies(['myCookie']);

  return (
    <>
    <Routes>
      <Route path={HomeUrl} element={<HomePageLayout />} />
      <Route path={PopularUrl} element={<PopularLayout />}/>
      <Route path={LatestUrl} element={<LatestLayout />}/>
      <Route path={FavoriteUrl} element={<MyListLayout />}/>
      <Route path={SignInUrl} element={<SignIn/>}/>
      <Route path={SignUpUrl} element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
