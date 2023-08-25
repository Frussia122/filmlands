import {
    RateWrapper,
    Star,
    StarsWrapper,
    RateDescription,
    RateTitle
} from './styled';



const RateFilm: React.FC = () => {
    return (
        <RateWrapper>
        <RateTitle>
          Поставьте оценку
        </RateTitle>
        <RateDescription>
          Ваши оценки улучшают ваши рекомендации
        </RateDescription>
      <StarsWrapper>
     {Array.from({length: 10}, (_, index) => (
        <Star key={index}>{index+1}</Star>
     ))}

      </StarsWrapper>
      </RateWrapper>
    )
}

export default RateFilm;