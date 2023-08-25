import { 
    faMoneyBillAlt, 
    IconDefinition,
    faIdBadge,
    faBell,
    faBook,
    faHeart,
    faFilm,
    faPlay,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons'

export interface ProfileActions {
    name: string;
    icon: IconDefinition;
    link: string;
    state: string;
}

export const ActionsData: ProfileActions[] = [
    {
        name: ' Все подписки',
        icon: faMoneyBillAlt,
        link: 'subscription',
        state: 'Подписки'
    },
    {
        name: 'Баджики и достижения',
        icon: faIdBadge,
        link: 'subscription',
        state: 'Достижения'
        },
    {
        name: 'Баджики и достижения',
        icon: faIdBadge,
        link: 'subscription',
        state: 'Достижения'
        },
    {
        name: 'Уведомления',
        icon: faBell,
        link: 'notification',
        state: 'Уведомления'
        },
    {
        name: 'Просмотры',
        icon: faBook,
        link: 'subscription',
        state: 'Просмотры'
        },
    {
        name: 'Любимые актеры',
        icon: faHeart,
        link: 'subscription',
        state: 'Любимые актеры'
        },
    {
        name: 'Любимые фильмы',
        icon: faFilm,
        link: 'subscription',
        state: 'Любимые фильмы'
        },
    {
        name: 'Любимые сериалы',
        icon: faPlay,
        link: 'subscription',
        state: 'Любимые сериалы'
        },
    {
        name: 'Статистика',
        icon: faInfoCircle,
        link: 'subscription',
        state: 'Статистика'
    }
];