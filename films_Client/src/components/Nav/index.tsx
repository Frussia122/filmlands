import { NavLinks, LinkItem, Link} from './styled';
import nav, { NavItem } from './links';
import { useState } from 'react';
import Burger from 'UI/Burger/index'

const HeaderNav: React.FC = () => {
    const [isBurger, setIsBurger] = useState(false);
    
    return (
      <>
        <NavLinks className={isBurger ? 'menuActive' : ''}>
            {nav.map((link: NavItem, index:number) => (
                <LinkItem key={index}>
                    <Link href={link.url}>{link.title}</Link>
                </LinkItem>
            ))}
        </NavLinks>
        <Burger isBurger = {isBurger} setIsBurger={setIsBurger}/>
      </>
    )  
}
export default HeaderNav;