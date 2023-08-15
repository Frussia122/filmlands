import {Container} from 'assets/Container/styled';
import { Link } from 'react-router-dom';
import {
    Wrapper,
    TypeBlock,
    Background,
    Type
} from './styled';
import {collection} from './Collection';


const CollectionBlocks: React.FC = () => {
  return (
    <Container>
        <Wrapper>
            {collection.map((block, index) => (
                <Link key={index} to={block.link}>
                  <TypeBlock>
                   <Background src={block.background} alt="" />
                  <Type>{block.name}</Type>
                </TypeBlock>
                </Link>
            ))}
        </Wrapper>
    </Container>
  )
}

export default CollectionBlocks