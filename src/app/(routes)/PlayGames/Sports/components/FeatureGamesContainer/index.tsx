import FeaturedGames from '@/app/_components/FeaturedGames'
import styles from './styles.module.css'

export function FeaturedGamesContainer() {
    return (
        <div className={styles.featuredGamesContainer}>
            <FeaturedGames />
            <div className={styles.divider}></div>
            <FeaturedGames />
            <div className={styles.divider}></div>
            <FeaturedGames />
        </div>
    )
}