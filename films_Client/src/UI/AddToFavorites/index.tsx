import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Favorites } from './styled';

const AddToFavorites:React.FC = () => {
    return (
        <Favorites icon={faHeart} />
    )
} 
export default AddToFavorites;