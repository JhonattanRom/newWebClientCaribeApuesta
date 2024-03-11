import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "Casinos en Línea: ¡Apuesta desde la Comodidad de tu Hogar!  | CaribeApuesta",
    description: "",
    keywords: [
        'Casino en línea',
        'Casino en línea en Venezuela',
        '¿ Que es un casino en línea ?',
        'Los mejores juegos de casino en línea',
        'Juegos populares en los casinos en línea'
    ],
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Casinos en Línea: ¡Apuesta desde la Comodidad de tu Hogar! ",
        description: "El sitio número uno de apuestas en Venezuela"
    }
};

export default function About() {
    return (
        <div className={styles.container}>
            <h2>Hipismo: La Pasión de las Carreras de Caballos</h2>
            <p>
                En <mark>CARIBEAPUESTA</mark>, compartimos tu pasión por el hipismo y queremos guiarte en esta
                emocionante aventura. A continuación, te presentamos todo lo que debes saber sobre
                las carreras de caballos y cómo puedes apostar para ganar:
            </p>
            <section>
                <h3>
                    El Mundo del Hipismo
                </h3>
                <p>
                    El hipismo es un mundo apasionante donde los caballos y jinetes se enfrentan en las pistas de
                    los hipódromos. Estos majestuosos animales galopan hacia la gloria mientras los espectadores
                    contienen la respiración.
                </p>
            </section>
            <section>
                <h3>
                    Apuestas en las Carreras
                </h3>
                <p>
                    En <mark>CARIBEAPUESTA</mark>, te ofrecemos una amplia variedad de mercados para tus apuestas hípicas. Algunos aspectos clave incluyen:
                </p>
                <ul>
                    <li><p><mark>Carreras nacionales e internacionales</mark>: Disfruta de emocionantes competencias en Venezuela y otros países.</p></li>
                    <li><p><mark>Diversidad de apuestas</mark>: Desde las apuestas clásicas (ganador, lugar, show) hasta las más exóticas y combinadas.</p></li>
                    <li><p><mark>Seguimiento en vivo</mark>: Sigue las carreras en tiempo real y realiza apuestas mientras se despliega la acción.</p></li>
                </ul>
            </section>
            <section>
                <h3>
                    Juega responsablemente
                </h3>
                <p>
                    Recuerda que el juego debe ser una actividad divertida y no una fuente de estrés. Establece límites y juega de manera responsable.
                </p>
                <p className={styles.responsibleGaming}>
                    ¡Buena suerte en tus apuestas en línea!
                </p>
            </section>
        </div>
    )
}