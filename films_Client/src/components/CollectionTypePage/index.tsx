import {
    Wrapper
} from './styled';


type CollectionTypePageProps = {
    type: string,
}
const CollectionTypePage:React.FC<CollectionTypePageProps> = ({type}) => {
    return (
        <Wrapper>
            {type}
        </Wrapper>
    )
}

export default CollectionTypePage;