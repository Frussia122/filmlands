import { Profile, ProfileImage } from './styled';
import user from 'assets/Header/user.svg';
import { Link } from 'react-router-dom';
import { ProfileUrl } from 'constants/pages/urls';
const HeaderProfile: React.FC = () => {
    return (
       <Link to={ProfileUrl}>
         <Profile>
            <ProfileImage src={user} />
        </Profile>
       </Link>
    )
}
export default HeaderProfile;