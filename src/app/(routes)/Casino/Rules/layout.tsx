import Link from "next/link";
import styles from "./styles.module.css";

export default function CasinoRulesLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.rulesNavigation}>
                    <li>
                        <Link href={'/Casino/Rules/TurboBlackjack'}>TURBO BLACKJACK</Link>
                    </li>
                    <li>
                        <Link href={'/Casino/Rules/AmericanBlackjack'}>AMERICAN BLACKJACK</Link>
                    </li>
                    <li>
                        <Link href={'/Casino/Rules/BlackjackEarlyPayOut'}>BLACKJACK EARLY PAYOUT</Link>
                    </li>
                    <li>
                        <Link href={'/Casino/Rules/Baccarat'}>BACCARAT</Link>
                    </li>
                    <li>
                        <Link href={'/Casino/Rules/AmericanRoulette'}>AMERICAN ROULETTE</Link>
                    </li>
                    <li>
                        <Link href={'/Casino/Rules/EuropeanRoullete'}>EUROPEAN ROULETTE</Link>
                    </li>
                </ul>
                <section >
                    {children}
                </section>
            </div>
        </div>

    )
}