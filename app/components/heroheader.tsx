import { Nav } from "./nav";
import { HeaderCarousel } from "./headercarousel";

export const HeroHEader = () => {
  return (
    <>
      <div className="relative bg-[#0E1B1B] h-[90vh]">
        <Nav />
        <div className="pt-[113px]">
          <HeaderCarousel />
        </div>
      </div>
    </>
  );
};
