import AwarenesssArea from "./ui/AwarenessArea";
import Feature from "./ui/Feature";
import HorseRacingFacts from "./ui/HorseRacingFacts";
import NewProducts from "./ui/NewProducts";
import RegulationByProdcuts from "./ui/RegulationByProducts";
import Results from "./ui/Results";
import SlickCarrousel from "./ui/SlickCarrousel";
import StepsBySteps from "./ui/StepsBySteps";

export default function PublicHome() {
    return (
        <>
            <SlickCarrousel />
            <StepsBySteps />
            <Feature />
            <HorseRacingFacts />
            <NewProducts />
            <Results />
            <RegulationByProdcuts />
            <AwarenesssArea />
        </>
    )
}