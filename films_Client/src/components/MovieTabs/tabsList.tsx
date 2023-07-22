import HomePageSlider from "components/HomeSlider/index";
import { latestFilms } from "components/HomeSlider/data";
import MovieDescription from "components/MovieDescription";
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
