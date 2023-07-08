import { NavLinks, LinkItem, Link } from './styled';
import nav, { NavItem } from './links';

const HeaderNav: React.FC = () => {
    return (
        <NavLinks>
            {nav.map((link: NavItem) => (
                <LinkItem key={link.id}>
                    <Link href={link.url}>{link.title}</Link>
                </LinkItem>
            ))}
        </NavLinks>
    )
}
export default HeaderNav;