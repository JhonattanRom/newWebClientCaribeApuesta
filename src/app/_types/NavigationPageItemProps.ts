export interface NavigationPageItemProps {
    path: string;
    title: string;
}

export interface NavigationPageProps {
    pathname: string;
    navigationPageItems: NavigationPageItemProps[];
}