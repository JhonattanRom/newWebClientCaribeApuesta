import Link from "next/link";
import styles from "./styles.module.css";

export default function PersonalLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.container}>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav className={styles.navigationContainer}>
                <ul className={styles.links}>
                    <li><Link href="/Personal/WithdrawBalance">Retirar saldo</Link></li>
                    <li><Link href="/Personal/RechargeBalance">Recargar saldo</Link></li>
                    <li><Link href="/Personal/MyBanks">Mis bancos</Link></li>
                    {/* <li><Link href="/Sports/Play">Jugar Sports</Link></li> */}
                </ul>
            </nav>
            {children}
        </section>
    )
}