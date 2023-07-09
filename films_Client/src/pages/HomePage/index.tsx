import HomePageSlider from 'components/HomePageSlider';
import LatestMovies from 'components/LatestMovies';
import { Wrapper } from './styled';

const HomePage: React.FC = () => {
    return (
        <Wrapper>
            <LatestMovies />
            <HomePageSlider title={'Popular Films'}/>
            <HomePageSlider title={'Based On your last views'} />
        </Wrapper>
    )
}
export default HomePage;