import { v4 as uuidv4 } from 'uuid';

export type NavItem = {
    title: string;
    id: string;
    url: string;
  };
  
  const nav: NavItem[] = [
    {
      title: 'Home',
      id: uuidv4(),
      url: '/',
    },
    {
      title: 'Popular Films',
      id: uuidv4(),
      url: '/popular',
    },
    {
      title: 'Latest Films',
      id: uuidv4(),
      url: '/latest',
    }
    ,
    {
      title: 'My List',
      id: uuidv4(),
      url: '/favorites',
    }
  ];
  
  export default nav;