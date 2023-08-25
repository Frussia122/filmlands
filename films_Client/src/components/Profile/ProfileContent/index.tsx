import { Content, UserAction, UserActionContent, Icon } from "./styled";
import { ActionsData } from "./actions";
import { useNavigate } from "react-router-dom";
const ProfileContent: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: string, state: string) => {
        navigate(path, {state})
    }
    return (
        <Content>
        {ActionsData.map((action, index: number) => (
            <UserAction onClick={() => handleNavigate(action.link, action.state)} key={index}>
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