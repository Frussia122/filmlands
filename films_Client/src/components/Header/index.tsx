import { Wrapper, Logo, Controls } from './styled';
import logo from 'assets/Header/logo.svg';
import HeaderNav from 'components/Nav';
import HeaderSearch from 'UI/Search';
import HeaderProfile from 'UI/Profile';

const Header: React.FC = () => {
    
    return (
        <Wrapper>
            <Logo src={logo} alt="Logo" />
            <HeaderNav />
            <Controls>
                <HeaderSearch />
                <HeaderProfile />
            </Controls>
        </Wrapper>
    )
}
export default Header;
