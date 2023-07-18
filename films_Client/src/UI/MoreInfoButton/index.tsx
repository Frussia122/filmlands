import { Info } from './styled';

type MoreINfoButtonProps = {
    id: string,
}
const MoreInfoButton: React.FC<MoreINfoButtonProps> = ({id}) => {
    return (
        <Info to={`/collection/${id}`}>More info</Info>
    );
}
export default MoreInfoButton;