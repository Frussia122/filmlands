import Header from 'components/Header'
import HomePage from 'pages/HomePage/index';
import Popular from 'pages/Popular';
import Latest from 'pages/Latest/index';
import MyList from 'pages/MyList/index';
import MovieFreedom from 'components/MovieFreedom';
import Footer from 'components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/popular' element={<Popular />}/>
      <Route path='/latest' element={<Latest />}/>
      <Route path='/favorites' element={<MyList />}/>
    </Routes>
    {/* <MovieFreedom />
    <Footer /> */}
    </>
  );
}

export default App;
