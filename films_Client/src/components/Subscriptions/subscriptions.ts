export interface Subscription {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    isRecommended: boolean;
    discount?: number;    // Скидка в процентах (например, 20)
    trial?: string;       // Пробный период (например, "14 дней бесплатно")
    popular?: boolean;    // Флаг, указывающий, является ли тариф популярным
  }
  
  export const subscriptions: Subscription[] = [
    {
      id: 'asdnjasmdn256j18wjnasd',
      name: "Бесплатный тариф",
      price: 0,
      description: "Бесплатный доступ ко всем фильмам на сайте",
      features: ["Рекламные вставки", "Ограниченный доступ к эксклюзивным контентам"],
      isRecommended: false,
      trial: "7 дней бесплатно",
    },
    {
      id: 'asdaop[iksdnmklja8a67as',
      name: "Продвинутый тариф",
      price: 9.99,
      description: "Полный доступ ко всем фильмам на сайте, без рекламы",
      features: ["Полный доступ ко всем фильмам", "Возможность скачивания фильмов", "Эксклюзивный контент"],
      isRecommended: true,
      discount: 10,
      popular: true,
    },
  ];