
import { Container } from 'assets/Container/styled';
import RouteHistory from 'components/RouteHistory';
import {
    Wrapper,
    ProfileStatus
} from './styled';
import { useLocation } from "react-router-dom";
import { NotifyDate } from './notifyTest';
import ProfileNotifyList from 'components/Profile/ProfileNotifyList';


const ProfileNotification: React.FC = () => {
    const Location = useLocation();
    return (
        <Wrapper>
            <Container>
                <RouteHistory url='/profile' defaultState='Профиль' state={Location.state}/>
                {NotifyDate.length > 0 
                ? <ProfileNotifyList notifyList={NotifyDate}/>
                : <ProfileStatus>Тут будут отображаться важные уведомления</ProfileStatus>
            }
            </Container>
        </Wrapper>
    )
}

export default ProfileNotification;