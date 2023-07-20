import { useSelector } from "react-redux";
import {currentFilm} from 'store/slices/currentFilmSlice';


const MovieDescription: React.FC = () => {
    const activeFilm = useSelector(currentFilm);
    
    return (
        <div>{activeFilm?.title}</div>
    )
}

export default MovieDescription;