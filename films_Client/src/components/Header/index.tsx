import { Wrapper, Logo, Controls } from './styled';
import logo from 'assets/Header/logo.svg';
import HeaderNav from 'components/Nav';
import HeaderSearch from 'UI/Search';
import HeaderProfile from 'UI/Profile';
import { Container } from 'assets/Container/styled'
const Header: React.FC = () => {
    
    return (
        <Container>
          <Wrapper>
            <Logo src={logo} alt="Logo" />
            <HeaderNav />
            <Controls>
                <HeaderSearch />
                <HeaderProfile />
            </Controls>
         </Wrapper>
        </Container>
    )
}
export default Header;
