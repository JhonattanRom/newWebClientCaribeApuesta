import { Metadata } from "next";
import GamesContainer from "./components/GamesContainer";


export const metadata: Metadata = {
    title: "Máquinas tragamonedas | CaribeApuesta",
    description: "En CaribeApuesta puedes descubrir el mundo de las tragamonedas online, donde encontrarás reseñas detalladas, estrategias ganadoras y los últimos lanzamientos. ¡Juega responsablemente y vive la emoción del casino desde la comodidad de tu hogar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Máquinas tragamonedas', 'Máquinas tragamonedas online', 'Máquinas tragamonedas en caribeapuesta'],
    openGraph: {
        title: "Máquinas tragamonedas",
        description: "En CaribeApuesta puedes descubrir el mundo de las tragamonedas online, donde encontrarás reseñas detalladas, estrategias ganadoras y los últimos lanzamientos. ¡Juega responsablemente y vive la emoción del casino desde la comodidad de tu hogar!",
    }
};

export default function Games() {
    return (
        <>
            <GamesContainer />
        </>
    )
}