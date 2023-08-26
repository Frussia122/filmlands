import { v4 as uuidv4 } from 'uuid';

export type Latest = {
    id: string,
    title: string,
    date: string,
    description: string,
    img: string,
}

export const latestFilms: Latest[] = [
    {   
        id: uuidv4(),
        title: 'Black adam',
        date: '21 October 20022',
        img: 'https://caribbeancinemas.com/wp-content/uploads/2022/10/blackadambanner.jpg',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        id: uuidv4(),
        title: 'M3GAN',
        date: '6 January, 2023',
        img: 'https://i.ytimg.com/vi/4Cafsrf6_Mw/maxresdefault.jpg',
        description: `
            10-year-old Cady gets into a car accident 
            with her mom and dad. Parents die, and the 
            girl goes to live with Aunt Gemma. Gemma 
            introduces Cady to an experimental android doll, 
            M3gan, who has artificial intelligence. 
            The primary task of the new "girlfriend" 
            is to protect the child from all sorts of 
            physical and moral harm, and M3gan takes 
            this too literally.
        `,
    },
    {   
        id: uuidv4(),
        title: 'Black adam',
        date: '21 October 20022',
        img: 'https://caribbeancinemas.com/wp-content/uploads/2022/10/blackadambanner.jpg',
        description: `
            5,000 years ago, Black Adam was empowered
            by the Egyptian gods and imprisoned. 
            Now he is freed from his tomb and is 
            preparing to show the world a unique approach 
            to the fight for justice.
        `,
    },
    {   
        id: uuidv4(),
        title: 'M3GAN',
        date: '6 January, 2023',
        img: 'https://i.ytimg.com/vi/4Cafsrf6_Mw/maxresdefault.jpg',
        description: `
            10-year-old Cady gets into a car accident 
            with her mom and dad. Parents die, and the 
            girl goes to live with Aunt Gemma. Gemma 
            introduces Cady to an experimental android doll, 
            M3gan, who has artificial intelligence. 
            The primary task of the new "girlfriend" 
            is to protect the child from all sorts of 
            physical and moral harm, and M3gan takes 
            this too literally.
        `,
    }
]

