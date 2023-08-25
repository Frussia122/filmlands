import HomePageSlider from "components/Home/HomeSlider/index";
import { latestFilms } from "components/Home/HomeSlider/data";
import MovieDescription from "components/Movie/MovieDescription";
import React from "react";

interface Tab {
  title: string;
  content: React.ReactNode;
}

export const tabs: Tab[] = [
  { title: 'Описание', content: <MovieDescription /> },
  { title: 'Актеры', content: 'Контент для Актеров' },
  { title: 'Сюжет', content: 'Контент для Сюжета' },
  { title: 'Похожие', content: <HomePageSlider type='serial' show={5} scroll={5} data={latestFilms}/>
},
];
