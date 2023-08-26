import { Container } from 'assets/Container/styled';
import ProfileHeader from 'components/Profile/ProfileHeader';
import ProfileContent from 'components/Profile/ProfileContent';
import {
    Wrapper,
} from './styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from 'store/slices/authSlice';
import { AppDispatch } from 'store/store';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>(); 
    const navigate = useNavigate();
    


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