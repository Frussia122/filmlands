import { 
  SliderWrapper,
  Film,
  Information,
  Title,
  Date,
  Description,
  Content,
  Actions,
  Info,
  Favorites,
  Wrapper,
 } from './styled';
 
import { Latest, latestFilms } from './films';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { settings } from './sliderSettings';



const LatestMovies: React.FC = () => {
    return (
       <SliderWrapper {...settings}>
         {latestFilms.map((item: Latest) => (
              <Wrapper key={item.id}>
              <Film style={{
                backgroundImage: `url(${item.img})`,
              }}>
                  <Information>
                <Content>
                  <Title>{item.title}</Title>
                  <Date>Date Release: {item.date}</Date>
                  <Description>{item.description}</Description>
                </Content>
                <Actions>
                  <Info>More info</Info>
                  <Favorites icon={faHeart} />
                </Actions>
              </Information>
              </Film>
            </Wrapper>
         ))}
       </SliderWrapper>
    );
}
export default LatestMovies;