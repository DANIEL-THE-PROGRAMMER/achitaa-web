import { HamburgerVertical, Facebook, Instagram } from "./icons";

export const Nav = () => {
    return (
      <div className="absolute  top-0 left-0 w-full pt-[24px]">
        <div className="flex container mx-auto pl-[80px] items-center justify-between">
          <div className="flex items-center gap-[30px]">
            <Facebook />
            <Instagram />
          </div>
          <div className="relative">
            <div className="absolute h-[1px] w-[355px] bg-[#FFC94B] -left-[200%] top-[50%]"></div>
            <span className="text-[32px] relative z-10 font-bold text-white font-sans">ARCHITAA</span>
          </div>
          <div className="">
            <HamburgerVertical />
          </div>
        </div>
      </div>
    );
}