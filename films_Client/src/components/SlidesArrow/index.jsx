import { Arrow, Icon } from "./styled";

import arrowIcon from 'assets/Arrows/arrow.svg'

export function SampleNextArrow(props) {
  const { className, onClick } = props;
    return (
        <Arrow
            className={className}
            onClick={onClick}
        > 
        <Icon src={arrowIcon} alt="" />
        </Arrow>
    );
  }
  
export function SamplePrevArrow(props) {
  const { className, onClick } = props;
    return (
        <Arrow
        className={className}
        onClick={onClick}
        > 
        <Icon className="rotate180" src={arrowIcon} alt="" />
        </Arrow>
    );
}