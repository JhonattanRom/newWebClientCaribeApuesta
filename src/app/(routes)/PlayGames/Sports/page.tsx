import { Metadata } from "next";
import styles from "./styles.module.css"
import SportsGamesContainer from "./components/SportsGamesContainer";

export const metadata: Metadata = {
    title: "CaribeApuesta - Sobre Sports",
    description: "CaribeApuesta es el sitio número uno de apuestas en Venezuela y uno de los mejores en Hipódromos y Apuestas Deportivas. Ya sea que busques deportes competitivos, probabilidades de apuestas, emocionantes juegos de Casino Online y Slots Machines, o las últimas noticias deportivas, todo está en un mismo lugar. ¡Regístrate gratis y comienza a ganar!",
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Sobre Nosotros",
        description: "El sitio número uno de apuestas en Venezuela"
    }
};


export default function Sports() {

    return (
        <>
            <SportsGamesContainer />
        </>
        )
}