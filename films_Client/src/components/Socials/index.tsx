import { 
    SocialsList,
    Social,
    SocialImg,
} from './styled';
import { SocialsType, SocialsLink } from './socials';


const Socials: React.FC = () => {
    return (
        <SocialsList>
            {SocialsLink.map((social: SocialsType) => (
                <Social key={social.name}>
                    <SocialImg src={social.img} />
                </Social>
            ))}
        </SocialsList>
    )
}

export default Socials;