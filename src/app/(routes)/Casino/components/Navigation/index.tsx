"use client";

import { usePathname } from "next/navigation";
import { NavigationPage } from "@/app/_components/NavigationPage/NavigationPage";
import { casinoNavigationItems } from "@/app/helpers/navigationsPages";

export const Navigation = () => {
    const pathname = usePathname();
    return <NavigationPage pathname={pathname} navigationPageItems={casinoNavigationItems} />
}