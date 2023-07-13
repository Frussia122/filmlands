
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
      title: 'Films',
      url: '/films',
    },
    {
      title: 'TV Series',
      url: '/series',
    }
    ,
    {
      title: 'Kids',
      url: '/kids',
    },
    {
      title: 'TV',
      url: '/tv',
    }
  ];
  
  export default nav;