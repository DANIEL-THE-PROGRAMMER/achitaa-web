import { Leaf, Time, Tools } from "../icons";

export const WhyUs = () => {
  return (
    <div className="">
      <div className="mx-auto container">
        <div className="relative h-[509px]">
          <div className="absolute z-10 w-[370px] bottom-0 pt-[116px] pb-[106px] px-[39px] bg-[#FFC94B]">
            <span className="text-[#0E1B1B] text-[16px] font-semibold font-sans text-center inline-block">
              Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
              tellus ultricies velit elementum ut dui sed augue ultrices
              phasellus ullamcorper condimentum ut suspendisse viverra ornare
              sit venenatis
            </span>
          </div>
          <div className="absolute top-0 right-0 w-[85%] bg-[#0E1B1B] h-[367px]">
            <div className="relative w-full h-full flex flex-col px-[35px]">
              <div className="flex gap-[20px] items-center pt-[35px] pb-[23px]">
                <div className="w-[305px] h-[3px] bg-white"></div>
                <span className="text-white inline-block font-fair text-[60px] ">
                  Why Us
                </span>
              </div>
              <div className="w-[70%] mx-auto flex flex-col gap-[78px]">
                <div className="flex flex-col text-[16px] text-[#C4C4C4] font-sans ">
                  <span>
                    Amet eu facilisi posuere ut at cras non ipsum proin nunc
                    purus tellus ultricies
                  </span>
                  <span>
                    velit elementum ut dui sed augue ultrices phasellus
                    <span className="text-[#FFC94B] underline">
                      ullamcorper condimentum
                    </span>
                  </span>
                  <span>ut suspendisse viverra ornare sit venenatis</span>
                </div>
                <div className="flex gap-[30px]">
                  <div className="w-[170px] bg-white h-[170px] flex items-center justify-center flex-col gap-[14px]">
                    <Leaf />
                    <span className="text-[18px] font-semibold font-sans">
                      Eco-Friendly
                    </span>
                  </div>
                  <div className="w-[170px] bg-white h-[170px] flex items-center justify-center flex-col gap-[14px]">
                    <Tools />
                    <span className="text-[18px] font-semibold font-sans">
                      Eco-Friendly
                    </span>
                  </div>
                  <div className="w-[170px] bg-white h-[170px] flex items-center justify-center flex-col gap-[14px]">
                    <Time />
                    <span className="text-[18px] font-semibold font-sans">
                      Eco-Friendly
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
