import { Profile, ProfileImage } from './styled';
import user from 'assets/Header/user.svg';

const HeaderProfile: React.FC = () => {
    return (
        <Profile>
            <ProfileImage src={user} />
        </Profile>
    )
}
export default HeaderProfile;