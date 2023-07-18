import { useParams } from "react-router-dom";
import  {Latest, latestFilms} from 'components/HomeSlider/data'

const SingleMovie: React.FC = ( ) => {
    const { id } = useParams();
    console.log(id);

    const movie = latestFilms.find(el => el.id === id)
    return (
        <div>{movie?.title}</div>
    )
}
export default SingleMovie;