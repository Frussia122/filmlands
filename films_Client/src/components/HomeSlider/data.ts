import { v4 as uuidv4 } from 'uuid';

export type Latest = {
    type: string;
    seasons?: number;
    id: string;
    title: string;
    date: string;
    genre: string;
    description: string;
    img: string;
}

export const latestFilms: Latest[] = [
    {   
        type: 'film',
        id: uuidv4(),
        title: 'Privet poka',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'film',
        id: uuidv4(),
        title: 'asdasd',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'film',
        id: uuidv4(),
        title: 'agsdasd',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'film',
        id: uuidv4(),
        title: 'aaaaaaa',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'film',
        id: uuidv4(),
        title: 'bbbbbbbb',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'film',
        id: uuidv4(),
        title: 'sssssssss',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'film',
        id: uuidv4(),
        title: 'bnbbbbbbbb',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'film',
        id: uuidv4(),
        title: 'hassdasd',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'film',
        id: uuidv4(),
        title: 'hasdasd',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'film',
        id: uuidv4(),
        title: 'hasdasdsadd',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'serial',
        id: uuidv4(),
        seasons: 2,
        title: 'ahasdasdas',
        date: '2022',
        genre: 'Drama',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'serial',
        seasons: 4,
        id: uuidv4(),
        title: 'Black adam',
        date: '2022',
        genre: 'Drama',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'serial',
        seasons: 6,
        id: uuidv4(),
        title: 'Black adam',
        date: '2022',
        genre: 'Drama',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'serial',
        seasons: 12,
        id: uuidv4(),
        title: 'Black adam',
        date: '2022',
        genre: 'Drama',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'serial',
        seasons: 2,
        id: uuidv4(),
        title: 'Black adam',
        date: '2022',
        genre: 'Drama',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'serial',
        seasons: 1,
        id: uuidv4(),
        title: 'Black adam',
        date: '2022',
        genre: 'Drama',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'serial',
        seasons: 6,
        id: uuidv4(),
        title: 'Black adam',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'serial',
        seasons: 9,
        id: uuidv4(),
        title: 'Black adam',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'serial',
        seasons: 2,
        id: uuidv4(),
        title: 'Black adam',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        type: 'serial',
        seasons: 4,
        id: uuidv4(),
        title: 'Black adam',
        date: '2022',
        genre: 'Action',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/1920x',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    
]


