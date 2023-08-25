import Backgound from 'assets/Collection/CollectionBlockBack.png';

export interface ICollection {
    background: string;
    name: string;
    link: string;
}

export const collection: ICollection[] = [
    {
        background: Backgound,
        name: 'Сериалы',
        link: 'series',
    },
    {
        background: Backgound,
        name: 'Фильмы',
        link: 'films',
    },
    {
        background: Backgound,
        name: 'Детям',
        link: 'child',
    },

]