import { 
  CatalogUrl,
  HomeUrl,
  
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
      title: 'Catalog',
      url: CatalogUrl,
    },
    {
      title: 'Catalog',
      url: CatalogUrl,
    }
    ,
    {
      title: 'Catalog',
      url: CatalogUrl,
    },
    {
      title: 'Catalog',
      url: '/tv',
    }
  ];
  
  export default nav;