import { HeroHEader } from "./components/heroheader";
import { OurDna } from "./components/section/ourdna";
import { SelectedWork } from "./components/section/selectedwork";
import { WhyUs } from "./components/section/whyus";


export default function Home() {
  return (
    <>
      <div >
        <HeroHEader />
        <OurDna />
        <SelectedWork />
        <WhyUs />
      </div>
    </>
  );
}
