import {useState, useEffect} from 'react';
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
    CountSeasons,
} from './styled';
import { Container } from 'assets/Container/styled';

import { Title, Icon } from 'assets/HomeTitle/styled';

import { Latest } from './data';
import AddToFavorites from 'UI/AddToFavorites';
import MoreInfoButton from 'UI/MoreInfoButton';
import Ellipse from 'assets/SliderTitle/ellipse.svg';
import Skeleton from './Skeleton';
interface sliderProps {
    type: string;
    title?: string;
    data: Latest[];
    scroll: number;
    show: number;
}

const HomePageSlider: React.FC<sliderProps> = ({type, title, data, scroll, show }) => {


    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
            setIsloading(false);
    }, [])

    const filteredData = data.filter((item: Latest) => {
      if(item.type === 'film') {
        return item
      } return item.type === 'serial'
    })

    return (
        <Wrapper>
          <Container>
            {title && (
              <Title>
                {title}
                <Icon src={Ellipse} />
              </Title>
            )}
            <SliderWrapper {...settings(scroll, show)}>
              {filteredData.map((film: Latest) => (
                <FilmWrapper key={film.id}>
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <>
                      {type === 'serials' && <CountSeasons>{film.seasons} Seasons</CountSeasons>}
                      <Film
                        style={{
                          backgroundImage: `url(${film.img})`,
                        }}
                      >
                        <Information>
                          <Header>
                            <Name>{film.title}</Name>
                            <AddToFavorites />
                          </Header>
                          <Year>{film.date}</Year>
                          <Footer>
                            <MoreInfoButton id={film.id} />
                          </Footer>
                        </Information>
                      </Film>
                    </>
                  )}
                </FilmWrapper>
              ))}
            </SliderWrapper>
          </Container>
        </Wrapper>
      );
    };
    
    export default HomePageSlider;