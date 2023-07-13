import {Title, Icon} from 'assets/HomeTitle/styled';
import Ellipse from 'assets/SliderTitle/ellipse.svg'

import {
    Wrapper,
} from './styled';
import { Container } from 'assets/Container/styled';

import HomeSearchCategory from 'components/HomeSearchCategory';
import HomeSearchContent from 'components/HomeSearchContent';

interface HomeCategoryProps {
    title: string;
}

const HomeSearchList: React.FC<HomeCategoryProps> = ({title}) => {
    return (
        <Container>
          <Title> 
            {title}
          <Icon src={Ellipse} />
          </Title>
          <Wrapper>
            <HomeSearchCategory />
            <HomeSearchContent /> 
          </Wrapper>
        </Container>
    )
}

export default HomeSearchList;