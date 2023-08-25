import { Container } from 'assets/Container/styled';
import ProfileHeader from 'components/Profile/ProfileHeader';
import ProfileContent from 'components/Profile/ProfileContent';
import {
    Wrapper,
} from './styled';

const Profile: React.FC = () => {
    return (
        <Wrapper>
            <Container>
            <ProfileHeader />
            <ProfileContent />
            </Container>
        </Wrapper>
    )
}

export default Profile;