import HorseRacingFactsTable from "./HorseRacingFactsTable";
import styles from "./styles.module.css";

export default function HorseRacingFacts() {
    return (
        <section className={styles.container}>
            <article className={styles.headerHorseRacingFactsContainer} lang="es">
                <h2>HIPISMO INTERNACIONAL</h2>
                <p>Participa en la emoción de las carreras internacionales con Polla Hípica. En nuestra plataforma, puedes apostar en tus eventos favoritos y disfrutar de una variedad de opciones para ganar. Sumérgete en la experiencia hípica con una amplia gama de apuestas disponibles, 
                    asegurando emociones intensas y oportunidades gratificantes.</p>
            </article>
            <section className={styles.horseRacingFactsContentContainer}>
                <HorseRacingFactsTable />
            </section>
        </section>)
}