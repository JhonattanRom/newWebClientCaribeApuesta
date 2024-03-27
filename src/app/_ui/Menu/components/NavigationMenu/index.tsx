"use client";
import styles from './styles.module.css';
import Link from 'next/link'

export const NavigationMenu = () => {
    return (<>
        <nav className={styles.Navigation}>
            <ul className={styles.links}>
                { /* SECCION DE PARLEY */}
                <li><Link href="/Sports/About" prefetch={false}>SPORTS</Link></li>
                { /* SECCION DE SLOTS (PRAGMATIC) */}
                <li><Link href="/Slots/About" prefetch={false}>TRAGAMONEDAS</Link></li>

                <li><Link href="/HorseRacing/About" prefetch={false}>HIPISMO</Link></li>{/* Falta ruta para hipismo */}
                <li><Link href="/Live/About" prefetch={false}>LIVEBETTING</Link></li>{/* Falta ruta para livebetting */}
                <li><Link href="/Live/About" prefetch={false}>PROPS</Link></li>{/* Falta ruta para props */}

                <li><Link href="/Casino/About" prefetch={false}>CASINO ONLINE</Link></li>
                <li><Link href="/Pragmatic/About" prefetch={false}>JUEGOS</Link></li>{/*  */}

                <li><Link href="/Information/AboutUs" prefetch={false}>NOSOTROS</Link></li>
            </ul>
        </nav>
    </>)
}