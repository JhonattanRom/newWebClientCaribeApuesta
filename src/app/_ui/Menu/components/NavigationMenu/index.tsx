"use client";
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
import Link from 'next/link'
import { includePath } from '@/app/helpers/includePath';
import { useSession } from "next-auth/react";

export const NavigationMenu = () => {
    const actualPathname = usePathname();
    const { data: session } = useSession();

    return (<>
        <nav className={styles.Navigation}>
            <ul className={styles.links}>
                { /* SECCION DE PARLEY */}
                <li className={`${includePath({ actualPathname, path: '/Sports' }) ? styles.active : ''}`}>
                    <Link href="/Sports/About" prefetch={false}>SPORTS</Link>
                </li>
                { /* SECCION DE SLOTS (PRAGMATIC) */}
                <li className={`${includePath({ actualPathname, path: '/Slots' }) ? styles.active : ''}`}>
                    <Link href="/Slots/About" prefetch={false}>TRAGAMONEDAS</Link>
                </li>
                <li className={`${includePath({ actualPathname, path: '/HorseRacing' }) ? styles.active : ''}`}>
                    <Link href="/HorseRacing/About" prefetch={false}>HIPISMO</Link>
                </li>{/* Falta ruta para hipismo */}
                <li className={`${includePath({ actualPathname, path: '/Live' }) ? styles.active : ''}`}>
                    <Link href="/Live/About" prefetch={false}>LIVEBETTING</Link>
                </li> {/* Falta ruta para livebetting */}
                <li className={`${includePath({ actualPathname, path: '/Casino' }) ? styles.active : ''}`}>
                    <Link href="/Casino/About" prefetch={false}>CASINO ONLINE</Link>
                </li>{/**/}
                <li className={`${includePath({ actualPathname, path: '/Pragmatic' }) ? styles.active : ''}`}>
                    <Link href="/Pragmatic/About" prefetch={false}>JUEGOS</Link>
                </li>
                <li className={`${includePath({ actualPathname, path: '/Information' }) ? styles.active : ''}`}>
                    <Link href="/Information/AboutUs" prefetch={false}>NOSOTROS</Link>
                </li>{/*
                    session?.user && <li className={`${includePath({ actualPathname, path: '/Personal' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Personal/Information" prefetch={false}>MI CUENTA</Link>
                    </li>*/}
                <li className={`${includePath({ actualPathname, path: '/Personal' }) ? styles.active : ''}`}>
                    <Link href="/Personal/Information" prefetch={false}>MI CUENTA</Link>
                </li>
            </ul>
        </nav>
    </>)
}