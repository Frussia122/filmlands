import { useParams } from "react-router-dom";
import  {latestFilms} from 'components/HomeSlider/data'
import { 
    Wrapper,
 } from "./styled";
import { useEffect } from "react";
import MovieTabs from "components/MovieTabs";
import MovieVideo from "components/MovieBackground";
import MovieContent from "components/MovieContent";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFilm, currentFilm } from 'store/slices/currentFilmSlice';


const SingleMovie: React.FC = () => {
  const { id } = useParams();
  const activeFilm = useSelector(currentFilm);
  const dispatch = useDispatch();

  useEffect(() => {
    const movieToDispatch = latestFilms.find((el) => el.id.toString() === id);
    if (movieToDispatch) {
      dispatch(setActiveFilm({ movie: movieToDispatch }));
    }
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  return (
    <Wrapper>
      <MovieVideo url={activeFilm?.trailer} />
      <MovieContent movie={activeFilm ? activeFilm : undefined} />
      <MovieTabs />
    </Wrapper>
  );
};

export default SingleMovie;