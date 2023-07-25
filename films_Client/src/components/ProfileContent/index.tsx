import { Content, UserAction, UserActionContent, Icon } from "./styled";
import { ActionsData } from "./actions";

const ProfileContent: React.FC = () => {
    return (
        <Content>
        {ActionsData.map((action, index: number) => (
            <UserAction key={index}>
                <Icon icon={action.icon}/>
                <UserActionContent>
                    {action.name}
                </UserActionContent>
            </UserAction>
        ) )}
        </Content>
    )
}

export default ProfileContent;