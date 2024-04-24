interface includePathProps {
    pathname: string;
    path: string;
}

export const includePath = ({ pathname, path }: includePathProps): boolean => {
    const isIncluded = pathname.includes(path);
    return isIncluded;
} 