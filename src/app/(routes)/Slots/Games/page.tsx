import { Metadata } from "next";
import GamesContainer from "./components/GamesContainer";


export const metadata: Metadata = {
    title: "CaribeApuesta",
    /*es el sitio número uno de apuestas en Venezuela y uno de los mejores en Hipódromos y Apuestas Deportivas. Ya sea que busques deportes competitivos, probabilidades de apuestas, emocionantes juegos de Casino Online y Slots Machines, o las últimas noticias deportivas, todo está en un mismo lugar. ¡Regístrate gratis y comienza a ganar! */
    description: "CaribeApuesta es el sitio número uno de apuestas en Venezuela, donde encontraras una variedad de opciones como apuestas deportivas, carreras de caballos nacionales e internacionales, tragamonedas, casino en vivo, entre otros juegos.",
    keywords: [
        'Apuestas deportivas',
        'Apuestas en vivo',
        'Apuestas en Venezuela',
        'Pronósticos deportivos',
        'Apuestas deportivas en línea en Venezuela',
        'Casino en línea',
        'Casino en línea en Venezuela',
        'Juegos de azar',
        'Hipódromo',
        'Carrera de caballos',
        'Apuestas Hípicas',
        'Caballos de carrera',
        'Resultados de carreras de caballos',
        'Tragamonedas',
        'Juegos',
        'Mejores apuestas deportivas en línea en Venezuela',
        'Tragamonedas emocionantes en CaribeApuesta',
    ],
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "¡Te damos la bienvenida a CaribeApuesta!",
        description: "El sitio número uno de apuestas en Venezuela."
    }
};

export default function Games() {
    return (
        <>
            <GamesContainer />
        </>
    )
}