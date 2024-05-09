interface includePathProps {
    actualPathname: string;
    path: string;
}

export const includePath = ({ actualPathname, path }: includePathProps): boolean => {
    console.log(actualPathname, "actualPathname");
    console.log(path, 'path');

    const isIncluded = actualPathname.includes(path);

    console.log(isIncluded, "isIncluded");
    return isIncluded;
} 