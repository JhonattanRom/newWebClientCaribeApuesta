import HorseRacingFactsTable from "./HorseRacingFactsTable";
import styles from "./styles.module.css";

export default function HorseRacingFacts() {
    return (
        <section className={styles.container}>
            <article className={styles.headerHorseRacingFactsContainer} lang="es">
                <h2>HIPISMO INTERNACIONAL</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam facere obcaecati accusamus itaque adipisci illum nihil quibusdam sed repellat molestias recusandae vel officiis dignissimos sunt inventore
                    porro pariatur, ratione at?</p>
            </article>
            <section className={styles.horseRacingFactsContentContainer}>
                <HorseRacingFactsTable />
            </section>
        </section>)
}