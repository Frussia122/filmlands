import { Info } from './styled';

type MoreINfoButtonProps = {
    id: string,
}
const MoreInfoButton: React.FC<MoreINfoButtonProps> = ({id}) => {
    return (
        <Info to={`/catalog/${id}`}>More info</Info>
    );
}
export default MoreInfoButton;