import { Metadata } from "next";
import SportsGamesContainer from "./components/SportsGamesContainer";

export const metadata: Metadata = {
    title: "CaribeApuesta - Apuestas deportivas",
    description: "CARIBEAPUESTA es el destino ideal para los amantes de las apuestas deportivas en Venezuela. Si buscas emoción, oportunidades de ganar y una amplia variedad de deportes, estás en el lugar correcto.",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Apuestas deportivas', 'Apuestas deportivas online', 'Resultados de apuestas deportivas'],
    openGraph: {
        title: "Apuestas deportivas",
        description: "CARIBEAPUESTA es el destino ideal para los amantes de las apuestas deportivas en Venezuela. Si buscas emoción, oportunidades de ganar y una amplia variedad de deportes, estás en el lugar correcto."
    },
};

export default function Sports() {
    return (
            <SportsGamesContainer />
        )
}