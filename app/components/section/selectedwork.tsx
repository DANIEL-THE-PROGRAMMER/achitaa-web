import Image from "next/image";

export const SelectedWork = () => {
  return (
    <div className="">
      <div className="pt-[120px] pb-[163px] flex flex-col">
        <div className="px-[15px] items-center flex gap-[20px]">
          <div className="w-[305px] mt-[10px] h-[3px] bg-[#0E1B1B]"></div>
          <span className="text-[#0E1B1B] font-fair font-semibold text-[60px]">
            Selected Work
          </span>
        </div>
        <div className="mx-auto container mt-[26px]">
          <span className="text-[16px] text-[#0E1B1B]">
            Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
            tellus ultricies velit elementum ut dui sed augue ultrices phasellus
            ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
          </span>
        </div>
        <div className="mt-[77px] min-h-[652px]">
          <div className="flex gap-[33px] min-h-[652px]">
            <div className="grow relative min-h-[552px]">
              <div className="absolute z-0 w-full right-0 top-0 flex gap-[33px] justify-end items-start">
                <span className="text-[#0E1B1B]/[0.1] text-[120px] font-sans mt-[-40px]">
                  01
                </span>
                <div className="w-[65%]">
                  <Image
                    src="/asests/Rectangle 10.png"
                    alt=""
                    width={0}
                    height={0}
                    layout="responsive"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="absolute z-10   bottom-0 flex items-end gap-[41px] pl-[20px]">
                <div className="h-[449px] w-[55%] shrink-0">
                  <Image
                    src="/asests/Rectangle 11.png"
                    alt=""
                    width={0}
                    height={0}
                    layout="responsive"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <button className="flex w-[170px] min-h-[45px] items-center justify-center outline-none border-none bg-[#FFC94B] mb-[7px]">
                  <a href="#">View Case</a>
                </button>
              </div>
            </div>
            <div className="w-[30%] shrink-0 flex flex-col justify-between pr-[100px]">
              <div className="pt-[75px] flex gap-[33px] flex-col items-center">
                <h5 className="text-[#0E1B1B] font-fair text-[48px]">
                  Louis Vuitton
                </h5>
                <div className="flex flex-col text-[#0E1B1B] text-[16px] ">
                  <span>
                    Amet eu facilisi posuere ut at cras non ipsum proin
                  </span>
                  <span>
                    nunc purus tellus ultricies velit elementum ut dui sed{" "}
                  </span>
                  <span>
                    augue ultrices phasellus ullamcorper condimentum ut
                  </span>
                  <span>suspendisse viverra ornare sit venenatis</span>
                </div>
              </div>
              <div className="flex flex-col gap-[32px] items-end pr-[120px]">
                <div className="flex gap-[11px] items-center text-white">
                  <div className="w-[79px] h-[1px] bg-[#0E1B1B]"></div>
                  <span className="text-[18px] font-sans text-[#0E1B1B]">
                    Next
                  </span>
                </div>
                <div className="flex gap-[11px] items-center text-white">
                  <span className="text-[18px] font-sans text-[#0E1B1B]">
                    Prev
                  </span>
                  <div className="w-[79px] h-[1px] bg-[#0E1B1B]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
