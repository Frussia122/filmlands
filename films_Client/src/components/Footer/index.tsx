import { 
    Wrapper,
    Connect,
    FooterTitle,
    NavContent,
} from './styled';
import { Container } from 'assets/Container/styled';
import Socials from 'components/Socials';
import FooterLinks from 'components/FooterLinks';


const Footer: React.FC = () => {
    return (
        <Container>
          <Wrapper>
           <Connect>
                <FooterTitle>
                    connect with us
                </FooterTitle>
            <Socials />
            </Connect>
            <NavContent>
                <FooterLinks />
            </NavContent>
          </Wrapper>
        </Container>
    )
}

export default Footer;