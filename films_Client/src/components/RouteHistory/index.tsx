import {Wrapper, GoBack, CurrentLocation} from './styled';

type RouteHistoryProps = {
    defaultState?: string;
    state?: string;
}

const RouteHistory: React.FC<RouteHistoryProps> = ({defaultState, state}) => {
    return (
        <Wrapper>
          <GoBack to='/profile'>{defaultState}</GoBack>
          <CurrentLocation>{state}</CurrentLocation>   
        </Wrapper>
    )
}

export default RouteHistory;