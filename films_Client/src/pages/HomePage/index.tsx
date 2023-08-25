import HomeSearchList from 'components/Home/HomeSearchList';
import HomePageSlider from 'components/Home/HomeSlider';
import LatestMovies from 'components/LatestMovies';
import { latestFilms } from 'components/Home/HomeSlider/data';
import { Wrapper } from './styled';
import { Container } from 'assets/Container/styled';

const HomePage: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <LatestMovies />
                <HomePageSlider title={'Popular Films'} type='film' show={5} scroll={5} data={latestFilms}/>
                <HomeSearchList title={'Search Movies By Category'}/>
                <HomePageSlider title={'Based On your last views'} type='film' show={5} scroll={5} data={latestFilms}/>
                <HomePageSlider title={'Popular TV series'} type='serials' show={5} scroll={5} data={latestFilms}/>
            </Container>
        </Wrapper>
    )
}
export default HomePage;