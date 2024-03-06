import Link from "next/link";
import styles from "./styles.module.css";

export default function InformationLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.container}>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav className={styles.navigationContainer}>
                <ul className={styles.links}>
                    <li><Link href="/Information/AboutUs">Sobre Nosotros</Link></li>
                    <li><Link href="/Information/Contacts">Contactanos</Link></li>
                    <li><Link href="/Information/FAQ">FAQ</Link></li>
                    <li><Link href="/Information/TermsAndConditions">Terminos y Condiciones</Link></li>
                    <li><Link href="/Information/PlayerObligations">Obligaciones del jugador</Link></li>
                </ul>
            </nav>
            {children}
        </section>
    )
}