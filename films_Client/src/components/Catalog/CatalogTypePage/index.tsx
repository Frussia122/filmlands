import { Container } from 'assets/Container/styled';
import CatalogCategory from 'components/Catalog/CatalogCategory';
import RouteHistory from 'components/RouteHistory';
import {
    Wrapper
} from './styled';


type CatalogTypePageProps = {
    type: string,
}
const CatalogTypePage:React.FC<CatalogTypePageProps> = ({type}) => {
    return (
        <Wrapper>
           <Container>
              <RouteHistory url='/catalog' defaultState='Каталог' state={type} />
              <CatalogCategory />
           </Container>
        </Wrapper>
    )
}

export default CatalogTypePage;