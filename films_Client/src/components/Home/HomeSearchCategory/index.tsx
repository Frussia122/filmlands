import {Categories, Category} from './styled';
import { CategoryType, AllCategories } from 'components/Home/HomeSearchList/Categories'
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveIndex, setActive } from 'store/slices/homeCategorySlice';

const HomeSearchCategory: React.FC = () => {
    const activeIndex = useSelector(selectActiveIndex);
    const dispatch = useDispatch();


    const handleClick = (index: number, genre: string) => {
        dispatch(setActive({index, genre}));
    }
    return (
     <Categories>
        {AllCategories.map((el: CategoryType, index:number) => (
          <Category 
          key={index}
          className={activeIndex === index ? 'activeCategory' : ''}
          onClick={() => handleClick(index, el.genre)}
          >
             {el.genre}
          </Category>
        ))}
    </Categories>
    )
}

export default HomeSearchCategory;
