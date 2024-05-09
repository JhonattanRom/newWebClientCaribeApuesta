import Link from "next/link";
import styles from "./styles.module.css";

export default function LiveRulesLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.rulesNavigation}>
                    <li>
                        <Link href={'/Live/Rules/BeisbolLive'}>BEISBOL EN VIVO</Link>
                    </li>
                    <li>
                        <Link href={'/Live/Rules/BasketballLive'}>BASKETBALL EN VIVO</Link>
                    </li>
                    <li>
                        <Link href={'/Live/Rules/FootbalLive'}>FOOTBALL EN VIVO</Link>
                    </li>
                    <li>
                        <Link href={'/Live/Rules/IceHockeyLive'}>ICE HOCKEY EN VIVO</Link>
                    </li>
                    <li>
                        <Link href={'/Live/Rules/SoccerLive'}>SOCCER EN VIVO</Link>
                    </li>
                    <li>
                        <Link href={'/Live/Rules/TennisLive'}>TENNIS EN VIVO</Link>
                    </li>
                </ul>
                <section >
                    {children}
                </section>
            </div>
        </div>

    )
}