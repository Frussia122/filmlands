import { Container } from "assets/Container/styled";
import RouteHistory from "components/RouteHistory";
import Subscriptions from "components/Subscriptions";
import { useLocation } from "react-router-dom";
import { 
    Wrapper,
 } from "./styled";

const ProfileSubscription: React.FC = () =>{
    const Location = useLocation();
    return (
        <Wrapper> 
            <Container>
                <RouteHistory defaultState='Профиль' state={Location.state} />
                <Subscriptions />
            </Container>
        </Wrapper>
    )
}
export default ProfileSubscription;