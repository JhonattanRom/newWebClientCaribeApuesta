import { NavigationPageItemProps } from "../_types/NavigationPageItemProps";

export const sportNavigationItems: NavigationPageItemProps[] = [
    {
        path: '/Sports/About',
        title: 'Sobre las apuestas deportivas',
    },
    {
        path: '/Sports/Glossary',
        title: 'Glosario de terminos',
    },
    {
        path: '/Sports/Rules',
        title: 'Reglas',
    },
    {
        path: '/PlayGames/Sports',
        title: 'Apostar',
    }
];
export const slotsNavigationItems: NavigationPageItemProps[] = [
    {
        path: '/Slots/About',
        title: 'Sobre las tragamonedas',
    },
    {
        path: '/Slots/Glossary',
        title: 'Glosario de terminos',
    },
    {
        path: '/Slots/Rules',
        title: 'Reglas',
    },
    {
        path: '/Slots/Games',
        title: 'Jugar a las tragamonedas',
    }
];
export const horseRacingNavigationItems: NavigationPageItemProps[] = [
    {
        path: '/HorseRacing/About',
        title: 'Sobre el hipismo',
    },
    {
        path: '/HorseRacing/Glossary',
        title: 'Glosario de terminos',
    },
    {
        path: '/HorseRacing/Rules',
        title: 'Reglas',
    }
];

export const gamesNavigationItems: NavigationPageItemProps[] = [
    {
        path: '/Pragmatic/About',
        title: 'Sobre los juegos Pragmatic',
    },
    {
        path: '/Pragmatic/Glossary',
        title: 'Glosario de terminos',
    },
    {
        path: '/Pragmatic/Rules',
        title: 'Reglas',
    }
];
export const informationNavigationItems: NavigationPageItemProps[] = [
    {
        path: '/Information/AboutUs',
        title: 'Sobre nosotros',
    },
    {
        path: '/Information/Contacts',
        title: 'Contactanos',
    },
    {
        path: '/Information/FAQ',
        title: 'FAQ',
    },
    {
        path: '/Information/TermsAndConditions',
        title: 'Términos y Condiciones',
    },
    {
        path: '/Information/PrivacyPolicy',
        title: 'Política de Privacidad',
    },
    {
        path: '/Information/PlayerObligations',
        title: 'Obligación del Jugador',
    }
];
export const pokerNavigationItems: NavigationPageItemProps[] = [
    {
        path: '/MyPoker/About',
        title: 'Sobre el poker',
    },
    {
        path: '/MyPoker/Glossary',
        title: 'Glosario de terminos'

    }, {
        path: '/MyPoker/Rules',
        title: 'Reglas'
    }
];
export const personalNavigationItems: NavigationPageItemProps[] = [
    {
        path: '/Personal/PartnerBanks',
        title: 'Bancos de asociados',
    },
    {
        path: '/Personal/WithdrawBalance',
        title: 'Retirar saldo'

    }, {
        path: '/Personal/RechargeBalance',
        title: 'Recargar saldo'
    }, {
        path: '/Personal/MyBanks',
        title: 'Mis bancos'
    },
    {
        path: '/Personal/AddBankAccount',
        title: 'Agregar Cuenta Bancaria '
    },
    {
        path: '/Personal/Information',
        title: 'Mis datos'
    }
];



/* For father routes*/
export const liveBettingNavigationItems: NavigationPageItemProps[] = [
    {
        path: '/Live/About',
        title: 'Sobre el live betting',
        toCompare: '/Live/About',
    },
    {
        path: '/Live/Glossary',
        title: 'Glosario de terminos',
        toCompare: '/Live/Glossary',
    },
    {
        path: '/Live/Rules/BeisbolLive',
        title: 'Reglas',
        toCompare: '/Live/Rules',
    }
];
export const casinoNavigationItems: NavigationPageItemProps[] = [
    {
        path: '/Casino/About',
        title: '¿ Que es un casino en linea ?',
        toCompare: '/Casino/About',
    },
    {
        path: '/Casino/Glossary',
        title: 'Glosario de terminos',
        toCompare: '/Casino/Glossary',
    },
    {
        path: '/Casino/Rules/TurboBlackjack',
        title: 'Reglas',
        toCompare: '/Casino/Rules'
    }
];


/* Children Routes */
export const casinoRulesNavigation: NavigationPageItemProps[] = [
    {
        path: '/Casino/Rules/TurboBlackjack',
        title: 'TURBO BLACKJACK'
    },
    {
        path: '/Casino/Rules/AmericanBlackjack',
        title: 'AMERICAN BLACKJACK'
    },
    {
        path: '/Casino/Rules/BlackjackEarlyPayOut',
        title: 'BLACKJACK EARLY PAYOUT'
    },
    {
        path: '/Casino/Rules/Baccarat',
        title: 'BACCARAT'
    },
    {
        path: '/Casino/Rules/AmericanRoulette',
        title: 'AMERICAN ROULETTE'
    },
    {
        path: '/Casino/Rules/EuropeanRoullete',
        title: 'EUROPEAN ROULETTE'
    }
]

export const liveRulesNavigation: NavigationPageItemProps[] = [
    {
        path: '/Live/Rules/BeisbolLive',
        title: 'BEISBOL EN VIVO'
    },
    {
        path: '/Live/Rules/BasketballLive',
        title: 'BASKETBALL EN VIVO'
    },
    {
        path: '/Live/Rules/FootbalLive',
        title: 'FOOTBALL EN VIVO'
    },
    {
        path: '/Live/Rules/IceHockeyLive',
        title: 'ICE HOCKEY EN VIVO'
    },
    {
        path: '/Live/Rules/SoccerLive',
        title: 'SOCCER EN VIVO'
    },
    {
        path: '/Live/Rules/TennisLive',
        title: 'TENNIS EN VIVO'
    }
]