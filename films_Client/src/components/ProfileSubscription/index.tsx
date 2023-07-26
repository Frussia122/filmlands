import { Container } from "assets/Container/styled";
import RouteHistory from "components/RouteHistory";
import { useLocation } from "react-router-dom";
import { 
    Wrapper,
    Subscriptions,
    Content,
    Name,
    Price,
    Description,
    Feature,
    Button,
    DiscountBadge,
    FeatureList,
    PopularBadge,
    TrialInfo
 } from "./styled";
import { subscriptions } from "./subscriptions";

const ProfileSubscription: React.FC = () =>{
    const Location = useLocation();
    return (
        <Wrapper> 
            <Container>
                <RouteHistory defaultState='Профиль' state={Location.state} />
                <Subscriptions>
                {subscriptions.map(sub => (
                    <Content key={sub.id}>
                    <Name>{sub.name}</Name>
                    <Price>{sub.price}$</Price>
                    {sub.discount && <DiscountBadge>{sub.discount}% OFF</DiscountBadge>}
                    <Description>{sub.description}</Description>
                    <FeatureList>
                        {sub.features.map((feature, index) => (
                        <Feature key={index}>{feature}</Feature>
                        ))}
                    </FeatureList>
                    {sub.trial && <TrialInfo>{sub.trial}</TrialInfo>}
                    {sub.popular && <PopularBadge>Popular</PopularBadge>}
                    <Button>Выбрать</Button>
                    </Content>
                ))}
                </Subscriptions>
               

            </Container>
        </Wrapper>
    )
}
export default ProfileSubscription;