import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "CaribeApuesta - Glosario de términos para apuestas deportivas",
    description: "Descubre el mundo de las apuestas deportivas con el glosario definitivo de CARIBEAPUESTA. Aprende la terminología esencial y domina tus estrategias de juego en nuestra plataforma segura y confiable. ¡Regístrate y comienza a ganar hoy!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Glosario de términos para apuestas deportivas', 'Glosario de terminos para apuestas deportivas online'],
    openGraph: {
        title: "Glosario de términos para apuestas deportivas",
        description: "Descubre el mundo de las apuestas deportivas con el glosario definitivo de CARIBEAPUESTA. Aprende la terminología esencial y domina tus estrategias de juego en nuestra plataforma segura y confiable. ¡Regístrate y comienza a ganar hoy!",
    }
};

export default function Glossary() {
    return (
        <div className={styles.container}>
            <h2> GLOSARIO DE TERMINOS </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum repellendus suscipit maiores, reiciendis maxime nulla modi distinctio possimus recusandae voluptatum accusamus quia quae ex aperiam dolores excepturi odio officiis inventore,
                architecto, numquam vitae voluptas. Hic nostrum natus ullam cupiditate eligendi. Ad perferendis tempora quos? Mollitia facilis voluptas et cum?</p>
        </div>
    )
}