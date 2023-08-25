import {Wrapper, GoBack, CurrentLocation} from './styled';

type RouteHistoryProps = {
    url: string;
    defaultState?: string;
    state?: string;
}

const RouteHistory: React.FC<RouteHistoryProps> = ({url,defaultState, state}) => {
    return (
        <Wrapper>
          <GoBack to={url}>{defaultState}</GoBack>
          <CurrentLocation>{state}</CurrentLocation>   
        </Wrapper>
    )
}

export default RouteHistory;