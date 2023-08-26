import { Profile, ProfileImage } from './styled';
import user from 'assets/Header/user.svg';
import { Link } from 'react-router-dom';
import { ProfileUrl } from 'constants/pages/urls';
import { isAuth } from 'store/slices/authSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const HeaderProfile: React.FC = () => {
    const authStatus = useSelector(isAuth);
    

    return (
       <Link to={authStatus ? ProfileUrl : '/sign-in'}>
         <Profile>
            <ProfileImage src={user} />
        </Profile>
       </Link>
    )
}
export default HeaderProfile;


