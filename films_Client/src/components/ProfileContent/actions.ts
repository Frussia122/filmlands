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
}

export const ActionsData: ProfileActions[] = [
    {
        name: ' Все подписки',
        icon: faMoneyBillAlt,
    },
    {
        name: 'Баджики и достижения',
        icon: faIdBadge,
    },
    {
        name: 'Баджики и достижения',
        icon: faIdBadge,
    },
    {
        name: 'Уведомления',
        icon: faBell,
    },
    {
        name: 'Просмотры',
        icon: faBook,
    },
    {
        name: 'Любимые актеры',
        icon: faHeart,
    },
    {
        name: 'Любимые фильмы',
        icon: faFilm,
    },
    {
        name: 'Любимые сериалы',
        icon: faPlay,
    },
    {
        name: 'Статистика',
        icon: faInfoCircle,
    }
];