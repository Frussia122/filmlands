import {Notify} from 'components/ProfileNotification/notifyTest' 
import {
    Message,
    Date,
    SingleNotify,
    Wrapper,

} from './styled';
type ProfileNotifyListProps = {
    notifyList: Notify[];
}

const ProfileNotifyList: React.FC<ProfileNotifyListProps> = ({notifyList}) => {
  return (
    <Wrapper>
        {notifyList.map((notify) => (
            <SingleNotify key={notify.id}>
             <Message>{notify.message}</Message>
             <Date>{notify.date}</Date>
            </SingleNotify>
        ))}
    </Wrapper>
  )
}

export default ProfileNotifyList;