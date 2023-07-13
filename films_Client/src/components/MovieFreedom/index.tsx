import {
    Wrapper,
    Title,
    Description,
    Button,
    Content,
    Background,
    Red,
    MainWrapper
} from './styled';
import { Container } from 'assets/Container/styled';
import img from 'assets/MovieFreedom/back.png'

const MovieFreedom: React.FC = () => {
    return (
        <MainWrapper>
          <Container>
            <Wrapper>
                <Content>
                    <Title>Watch Everywhere</Title>
                    <Description>
                        You can find everything related to movies here. 
                        Be without limited. You can browse anywhere on your phone, 
                        tablet, laptop.
                        You can be flexible.
                        <Red>Find Watch Chill Repeat</Red> 
                    </Description>
                    <Button>Lets Start</Button>
                </Content>
                <Background src={img} alt="back"/>
            </Wrapper>
          </Container>
        </MainWrapper>

    )
}

export default MovieFreedom;