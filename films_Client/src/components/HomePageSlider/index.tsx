import { settings } from './sliderSettings';
import { 
    Wrapper,
    FilmWrapper, 
    SliderWrapper,
    Film,
    Information,
    Header,
    Name,
    Year,
    Footer,
    Title,
    Icon,
} from './styled';
import { Latest, latestFilms } from './data';
import AddToFavorites from 'UI/AddToFavorites';
import MoreInfoButton from 'UI/MoreInfoButton';
import Ellipse from 'assets/SliderTitle/ellipse.svg'
interface sliderProps {
    title: string;
}

const HomePageSlider: React.FC<sliderProps> = ({ title }) => {
    return (
            <Wrapper>
            <Title> 
                {title}
                <Icon src={Ellipse} />
            </Title>
            <SliderWrapper {...settings}>
                {latestFilms.map((film: Latest) => (
                   <FilmWrapper key={film.id}>
                     <Film style={{
                        backgroundImage: `url(${film.img})`
                    }}>
                       <Information>
                            <Header>
                                <Name>{film.title}</Name>
                                <AddToFavorites />
                            </Header>
                            <Year>{film.date}</Year>
                            <Footer> 
                                <MoreInfoButton />
                            </Footer>
                       </Information>
                    </Film>
                   </FilmWrapper>
                ))}
            </SliderWrapper>
            </Wrapper>
    )
}
export default HomePageSlider;