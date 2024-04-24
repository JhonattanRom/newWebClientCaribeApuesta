"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { includePath } from "@/app/helpers/includePath";
import styles from "./styles.module.css";

export const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className={styles.navigationContainer}>
            <ul className={styles.links}>
                <li className={`${includePath({ pathname, path: '/Sports/About' }) ? styles.active : ''}`}>
                    <Link href="/Sports/About">Sobre las apuestas deportivas</Link>
                </li>
                <li className={`${includePath({ pathname, path: '/Sports/Glossary' }) ? styles.active : ''}`}>
                    <Link href="/Sports/Glossary">Glosario de terminos</Link>
                </li>
                <li className={`${includePath({ pathname, path: '/Sports/Rules' }) ? styles.active : ''}`}>
                    <Link href="/Sports/Rules">Reglas</Link>
                </li>
                <li className={`${includePath({ pathname, path: '/PlayGames/Sports' }) ? styles.active : ''}`}>
                    <Link href="/PlayGames/Sports">Apostar</Link>
                </li>
            </ul>
        </nav>
    )

}