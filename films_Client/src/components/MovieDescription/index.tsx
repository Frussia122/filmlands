import RateFilm from "components/RateFilm";
import { useSelector } from "react-redux";
import {currentFilm} from 'store/slices/currentFilmSlice';
import {
    Wrapper,
    Description,

} from './styled';

const MovieDescription: React.FC = () => {
    const activeFilm = useSelector(currentFilm);
    
    return (
        <Wrapper>
            <Description>
                {activeFilm?.description}
            </Description>
            <RateFilm />
           
        </Wrapper>
    )
}

export default MovieDescription;