import Link from "next/link";
import styles from "./styles.module.css";

export default function HorseRacingLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.container}>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav className={styles.navigationContainer}>
                <ul className={styles.links}>
                    <li><Link href="/HorseRacing/About">¿ Que es el hipismo ?</Link></li>
                    <li><Link href="/HorseRacing/Glossary">Glosario de terminos</Link></li>
                    <li><Link href="/HorseRacing/Rules">Reglas</Link></li>
                    {/* <li><Link href="/HorseRacing/Play">Jugar Sports</Link></li> */}
                </ul>
            </nav>
            {children}
        </section>
    )
}