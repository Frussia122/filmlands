import LatestMovies from 'components/LatestMovies';
import { Wrapper } from './styled';

const HomePage: React.FC = () => {
    return (
        <Wrapper>
            <LatestMovies />
        </Wrapper>
    )
}
export default HomePage;