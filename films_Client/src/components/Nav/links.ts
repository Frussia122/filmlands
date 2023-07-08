
export type NavItem = {
    title: string;
    url: string;
  };
  
  const nav: NavItem[] = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Popular Films',
      url: '/popular',
    },
    {
      title: 'Latest Films',
      url: '/latest',
    }
    ,
    {
      title: 'My List',
      url: '/favorites',
    }
  ];
  
  export default nav;