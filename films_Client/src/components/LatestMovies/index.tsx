import { 
  SliderWrapper,
  Film,
  Information,
  Title,
  Date,
  Description,
  Content,
  Actions,
  Wrapper,
 } from './styled';
 
import { Latest, latestFilms } from './films';
import { settings } from './sliderSettings';
import AddToFavorites from 'UI/AddToFavorites';
import MoreInfoButton from 'UI/MoreInfoButton';



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
                  <MoreInfoButton id={item.id}/>
                  <AddToFavorites />
                </Actions>
              </Information>
              </Film>
            </Wrapper>
         ))}
       </SliderWrapper>
    );
}
export default LatestMovies;