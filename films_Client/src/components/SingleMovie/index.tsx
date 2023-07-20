import { useParams } from "react-router-dom";
import  {latestFilms} from 'components/HomeSlider/data'
import { 
    Wrapper,
 } from "./styled";
import { useEffect } from "react";
import MovieTabs from "components/MovieTabs";
import MovieVideo from "components/MovieBackground";
import MovieDescription from "components/MovieContent";


const SingleMovie: React.FC = ( ) => {
    const { id } = useParams();
    console.log(id);
    
    useEffect(()=> {
      window.scrollTo(0, 0);
    }, [])


    const movie = latestFilms.find(el => el.id === id)


    
    return (
        <Wrapper>
          <MovieVideo url={movie?.trailer} />
          <MovieDescription movie={movie}/>
          <MovieTabs />

          {/* <iframe className="asssssss" src="https://player.vimeo.com/video/839457843?h=6907875b93" width="640" height="270" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> */}
        </Wrapper>
      
    )
}
export default SingleMovie;