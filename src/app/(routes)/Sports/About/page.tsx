import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "CaribeApuesta - Sobre Sports",
    description: "CaribeApuesta es el sitio número uno de apuestas en Venezuela y uno de los mejores en Hipódromos y Apuestas Deportivas. Ya sea que busques deportes competitivos, probabilidades de apuestas, emocionantes juegos de Casino Online y Slots Machines, o las últimas noticias deportivas, todo está en un mismo lugar. ¡Regístrate gratis y comienza a ganar!",
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Sobre Nosotros",
        description: "El sitio número uno de apuestas en Venezuela"
    }
};

export default function About() {
    return (
        <div className={styles.container}>
            <h2> Apuestas Deportivas en CaribeApuesta </h2>
            <p><mark>CARIBEAPUESTA</mark> es el destino ideal para los amantes de las apuestas deportivas en Venezuela. Si buscas emoción, oportunidades de ganar y una amplia variedad de deportes, estás en el lugar correcto.</p>
            <section>
                <h3>Variedad de Deportes y Mercados</h3>
                <p>En <mark>CARIBEAPUESTA</mark>, encontrarás una selección diversa de deportes y mercados para apostar. Algunos de los deportes disponibles incluyen:</p>
                <ul>
                    <li><p>Fútbol</p></li>
                    <li><p>Baloncesto</p></li>
                    <li><p>Tenis</p></li>
                    <li><p>Béisbol</p></li>
                    <li><p>Hockey</p></li>
                </ul>
            </section>
            <section>
                <h3>Soporte al Cliente</h3>
                <p>
                    El equipo de <mark>CARIBEAPUESTA</mark> está disponible para ayudarte. Si tienes preguntas o necesitas asistencia, no dudes en contactarlos.
                </p>
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