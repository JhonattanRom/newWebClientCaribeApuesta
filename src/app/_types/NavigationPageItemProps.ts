export interface NavigationPageItemProps {
    path: string; // PathName for navigate
    title: string; // Label for links
    toCompare?: string; // For active styles link
}

export interface NavigationPageProps {
    actualPathname: string;
    navigationPageItems: NavigationPageItemProps[];
}