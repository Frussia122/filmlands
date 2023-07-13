import { Content, Name, Description } from './styled';
import { AllCategories, CategoryType } from 'components/HomeSearchList/Categories';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectActiveGenre } from 'store/slices/homeCategorySlice';
import { useEffect, useState } from 'react';
import { Latest } from 'components/HomeSlider/data';
import HomePageSlider from 'components/HomeSlider';
import filmFilter from 'Utils/HomeSearchContent/index'
import ErrorBoundary from './ErrorBoundary';


const HomeSearchContent: React.FC = () => {
    const activeGenre = useSelector(selectActiveGenre);
    const [currentHomeSearchFilm, setCurrentHomeSearchFilm] = useState<Latest[] | []>([]);

    useEffect(() => {
        setCurrentHomeSearchFilm(filmFilter(activeGenre));
    }, [activeGenre])

    return (
        <Content>
              <Name>
                    {activeGenre} Films
              </Name>
              {AllCategories.filter((el: CategoryType) => el.genre === activeGenre)
              .map((el: CategoryType) => (
                    <Description key={el.genre}>
                        {el.description}
                    </Description>
                ))}     
            {currentHomeSearchFilm.length !== 0 ? <HomePageSlider type='film' scroll={1} show={4} data={currentHomeSearchFilm}/> : <ErrorBoundary />}
        </Content>
    )
}

export default HomeSearchContent;