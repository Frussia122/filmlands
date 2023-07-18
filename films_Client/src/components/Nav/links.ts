import { 
  FavoriteUrl,
  HomeUrl,
  LatestUrl,
  PopularUrl,
} from 'constants/pages/urls';

export type NavItem = {
    title: string;
    url: string;
  };
  
  const nav: NavItem[] = [
    {
      title: 'Home',
      url: HomeUrl,
    },
    {
      title: 'Films',
      url: FavoriteUrl,
    },
    {
      title: 'TV Series',
      url: LatestUrl,
    }
    ,
    {
      title: 'Kids',
      url: PopularUrl,
    },
    {
      title: 'TV',
      url: '/tv',
    }
  ];
  
  export default nav;