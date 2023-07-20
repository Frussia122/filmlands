import { Container } from "assets/Container/styled";
import React from "react";

interface Tab {
  title: string;
  content: React.ReactNode;
}

export const tabs: Tab[] = [
  { title: 'Описание', content: <Container /> },
  { title: 'Актеры', content: 'Контент для Актеров' },
  { title: 'Сюжет', content: 'Контент для Сюжета' },
  { title: 'Похожие', content: 'Контент для Похожих' },
];
