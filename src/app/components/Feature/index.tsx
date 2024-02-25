import FeaturedGames from "./FeaturedGames";
import styles from "./styles.module.css";

export default function Feature() {
    return (
        <section className={styles.container}>
            <article className={styles.headerFeatureContainer} lang="es">
                <h2>JUEGOS DESTACADOS</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil voluptate sequi sapiente, delectus magni possimus, error fugit qui nobis placeat quis.
                    Dolorem neque ullam repudiandae?
                </p>
            </article>
            <div className={styles.featuredGamesContainer}>
                <FeaturedGames />
                <FeaturedGames />
                <FeaturedGames />
            </div>
        </section>
    )
}