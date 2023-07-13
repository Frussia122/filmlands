import { Latest, latestFilms } from 'components/HomeSlider/data'

const filmFilter = (genre: string) => {
    return latestFilms.filter((film: Latest) => film.genre === genre)
}
export default filmFilter;