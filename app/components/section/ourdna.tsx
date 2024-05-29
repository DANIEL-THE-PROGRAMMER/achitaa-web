import Image from "next/image";

export const OurDna = () => {
  return (
    <>
      <div className="h-[740px] relative z-10">
        <div className="h-[656px] w-[85%] bg-[#070F0F] flex gap-[56px] items-end pb-[61px]">
          <div className="w-[35%] shrink-0 mb-[-150px]">
            <Image
              src="/asests/Rectangle 8.png"
              alt=""
              layout="responsive"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              
            />
          </div>
          <div className="w-[60%]">
            <div className="flex flex-col gap-[29px]">
              <div className="flex gap-[21px] items-center ml-[-120px]">
                <span className="text-[60px] font-fair text-white">
                  Our DNA
                </span>
                <div className="w-[305px] mt-[10px] h-[3px] bg-[#FFC94B]"></div>
              </div>
              <div className="flex flex-col text-[16px] text-[#C4C4C4] font-sans ">
                <span>
                  Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                  tellus ultricies
                </span>
                <span>
                  velit elementum ut dui sed augue ultrices phasellus
                  <span className="text-[#FFC94B] underline">
                    ullamcorper condimentum
                  </span>
                </span>
                <span>ut suspendisse viverra ornare sit venenatis</span>
              </div>
              <span className="text-[28px] font-fair text-[#6B6B6B] pr-[200px]">
                Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                tellus ultricies velit{" "}
              </span>
            </div>
            <div className="mt-[50px]">
              <button className="flex w-[170px] h-[45px] items-center justify-center outline-none border-none bg-[#FFC94B]">
                <a href="#">Read more</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
