import Link from "next/link";
import styles from "./styles.module.css";

export default function MyPokerLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.container}>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav className={styles.navigationContainer}>
                <ul className={styles.links}>
                    <li><Link href="/MyPoker/About">Sobre MyPoker</Link></li>
                    <li><Link href="/MyPoker/Glossary">Glosario de terminos</Link></li>
                    <li><Link href="/MyPoker/Rules">Reglas</Link></li>
                    {/* <li><Link href="/Sports/Play">Jugar Sports</Link></li> */}
                </ul>
            </nav>
            {children}
        </section>
    )
}

