import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "Reglas de casino en línea | CaribeApuesta",
    description: "Descubre las reglas esenciales del casino en linea en CARIBEAPUESTA - Tu guía definitiva para jugar con confianza y responsabilidad. Aprende los términos clave, comprende las obligaciones del jugador, y disfruta de una experiencia segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    keywords: [
        'Reglas del casino en línea',
        'Regles del casino en línea en Venezuela',
    ],
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Reglas de casino en línea",
        description: "Descubre las reglas esenciales del casino en linea en CARIBEAPUESTA - Tu guía definitiva para jugar con confianza y responsabilidad. Aprende los términos clave, comprende las obligaciones del jugador, y disfruta de una experiencia segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!"
    }
};

export default function Rules() {
    return (
        <div className={styles.container}>
            <h2> REGLAS </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum repellendus suscipit maiores, reiciendis maxime nulla modi distinctio possimus recusandae voluptatum accusamus quia quae ex aperiam dolores excepturi odio officiis inventore,
                architecto, numquam vitae voluptas. Hic nostrum natus ullam cupiditate eligendi. Ad perferendis tempora quos? Mollitia facilis voluptas et cum?</p>
        </div>
    )
}