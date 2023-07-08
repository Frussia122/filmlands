import {BurgerMenu, BurgerLine} from './styled';

interface BurgerProps {
    isBurger: boolean,
    setIsBurger: (isBurger: boolean) => void
}

const Burger: React.FC<BurgerProps> = ({ isBurger, setIsBurger }) => {
    
    const toggleMenu: React.MouseEventHandler<HTMLUListElement>  = () => {
        setIsBurger(!isBurger);
    }
    
    return (
        <BurgerMenu 
        className={isBurger ? 'burgerActive' : ''}
        onClick={toggleMenu}
        >
            <BurgerLine className="line-1" />
            <BurgerLine className="line-2" />
            <BurgerLine className="line-3" />
        </BurgerMenu>
    )
}
export default Burger;