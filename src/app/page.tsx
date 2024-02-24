import AwarenesssArea from "./components/AwarenessArea";
import HorseRacingFactsData from "./components/HorseRacingFacts";
import NewProducts from "./components/NewProducts";
import RegulationByProdcuts from "./components/RegulationByProducts";
import Results from "./components/Results";
import SlickCarrousel from "./components/SlickCarrousel";
import StepsBySteps from "./components/StepsBySteps";

export default function Page() {
  return (
    <>
      <SlickCarrousel />
      <StepsBySteps />
      <Results />
      <HorseRacingFactsData />
      <RegulationByProdcuts />
      <AwarenesssArea />
      <NewProducts />
    </>
  )
}