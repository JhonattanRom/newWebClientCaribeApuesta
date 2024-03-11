import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "CaribeApuesta - Reglas de casino en línea",
    description: "",
    keywords: [
        'Casino en línea',
        'Casino en línea en Venezuela',

    ],
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Sobre Nosotros",
        description: "El sitio número uno de apuestas en Venezuela"
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