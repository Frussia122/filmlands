import { Container } from 'assets/Container/styled';
import { 
    Content,
    Title,
    PreviewDescription,
    Info,
    Rating,
    Date,
    Genre,
    Age,
    Directors,
    Person,
    Actors,
    Watch,
    Controls,
    Trailer,
 } from "./styled";
 import {Latest} from 'components/HomeSlider/data';


type MovieDescriptionProps = {
    movie?: Latest
}

const MovieDescription:React.FC<MovieDescriptionProps> = ({ movie }) => {
  return (
    <Content>
      <Container>
        <Title>{movie?.title}</Title>
        <Info>
          <Rating>{movie?.rating}</Rating>
          <Date>{movie?.date}</Date>
          <Genre>{movie?.genre}</Genre>
          <Age>{movie?.age}</Age>
        </Info>
        <PreviewDescription>
          {movie?.description}
        </PreviewDescription>
        <Directors>
          Режисер: {movie?.directors.map((person, index) => <Person key={index}>{person},</Person>)}
        </Directors>
        <Actors>
          Актеры: {movie?.actors.map((person, index) => <Person key={index}>{person},</Person>)}
        </Actors>
        <Controls>
          <Trailer>Watch Trailer</Trailer>
          <Watch>Watch Movies</Watch>
        </Controls>
      </Container>
    </Content>
  );
};

export default MovieDescription;