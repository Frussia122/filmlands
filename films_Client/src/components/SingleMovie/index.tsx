import { useParams } from "react-router-dom";
import  {latestFilms} from 'components/HomeSlider/data'
import { Container } from "assets/Container/styled";
import { 
    Wrapper,
    Video,
    Content,
    Title,
    Description,
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
 import ReactPlayer from 'react-player';


const SingleMovie: React.FC = ( ) => {
    const { id } = useParams();
    console.log(id);

    const movie = latestFilms.find(el => el.id === id)
    return (
        <>
        <Wrapper>
          <Video>
                <ReactPlayer
                    url={movie?.trailer}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                />
          </Video>
            <Content>
                  <Container>
                  <Title>
                    {movie?.title}
                  </Title>
                  <Info>
                        <Rating>{movie?.rating}</Rating>
                        <Date>{movie?.date}</Date>
                        <Genre>{movie?.genre}</Genre>
                        <Age>{movie?.age}</Age>
                    </Info>
                  <Description>
                    {movie?.description}
                  </Description>

                  <Directors>
                    Режисер: {movie?.directors.map((person, index)=> <Person key={index}>{person},</Person>)}
                  </Directors>
                  <Actors>
                    Актеры: {movie?.actors.map((person, index)=> <Person key={index}>{person},</Person>)}
                  </Actors>

                  <Controls>
                    <Trailer>Watch Trailer</Trailer>
                    <Watch>Watch Movies</Watch>
                  </Controls>
                  </Container>
                </Content>
        </Wrapper>
       
        </>
      
    )
}
export default SingleMovie;