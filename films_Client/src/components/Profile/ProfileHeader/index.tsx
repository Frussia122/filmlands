import { Header, UserInfo, UserName, UserEmail, EditButton } from "./styled";


const ProfileHeader: React.FC = () => {
    return (
        <Header>
        <UserInfo>
            <UserName>John Silverhand</UserName>
            <UserEmail>amidgard@list.ru</UserEmail>
        </UserInfo>
        <EditButton>
            Редактировать профиль
        </EditButton>
        </Header>
    )
}

export default ProfileHeader;