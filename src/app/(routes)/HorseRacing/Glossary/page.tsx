import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "Glosario de términos hipismo | CaribeApuesta",
    description: "Descubre el mundo del hipismo con el glosario definitivo de CARIBEAPUESTA. Aprende la terminología esencial y domina tus estrategias de apuestas en nuestra plataforma segura y confiable. ¡Regístrate y comienza a ganar hoy!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Glosario de términos para hipismo', 'Glosario de terminos para hipismo online', 'Apuestas de carrera de caballos'],
    openGraph: {
        title: "Glosario de términos hipismo",
        description: "Descubre el mundo del hipismo con el glosario definitivo de CARIBEAPUESTA. Aprende la terminología esencial y domina tus estrategias de apuestas en nuestra plataforma segura y confiable. ¡Regístrate y comienza a ganar hoy!"
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