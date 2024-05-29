import Image from "next/image";

export const HeaderCarousel = () => {
  return (
    <>
      <div className="h-[724px] container mx-auto flex items-center">
        <div className="flex flex-col w-[20%] shrink-0 pl-[50px] relative z-10">
          <div className="flex flex-col text-[60px] font-fair text-white pl-[25px]">
            <span>Architecture</span>
            <span>Studio</span>
          </div>
          <div className="mt-[83px]">
            <div className="flex flex-col gap-[32px]">
              <div className="flex gap-[11px] items-center text-white">
                <div className="w-[79px] h-[1px] bg-[#FFC94B]"></div>
                <span className="text-[18px] font-sans">Next</span>
              </div>
              <div className="flex gap-[11px] items-center text-white">
                <span className="text-[18px] font-sans">Prev</span>
                <div className="w-[79px] h-[1px] bg-[#FFC94B]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] h-[87vh] z-0 relative pt-[65px]">
          <Image
            src="/asests/Rectangle 1 (1).png"
            alt=""
            width={0}
            height={0}
            layout="responsive"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            className="relative z-0"
          />
          <span className="absolute z-10 right-[10px] bottom-[-75px] font-sans text-white/[0.2] text-[180px] font-[300] leading-[-26.1px]">
            01
          </span>
        </div>
      </div>
    </>
  );
};
