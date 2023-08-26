import {
    Wrapper,
    CategoryList,
    Category,
} from './styled';
import { categories } from "./Categories";




const CatalogCategory: React.FC = () => {
    return (
        <Wrapper>
            <CategoryList>
                {categories.map((category, index) => (
                    <Category key={index}>
                        {category.name}
                    </Category>
                ))}
            </CategoryList>
        </Wrapper>
    )
}
export default CatalogCategory;
