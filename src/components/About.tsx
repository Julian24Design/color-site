import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css/effect-fade";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRafInterval } from "ahooks";

const About = () => {
  return (
    <>
      <div className="about_bg_1 w-full h-[800px] relative max-md:h-[900px] max-md:flex">
        <div className="flex items-center gap-4 pt-8 ml-16 absolute max-md:ml-8">
          <Image src="/favicon.png" alt="" width={122} height={122} className="w-[122px] max-md:w-[100px]" />
          <div className=" font-linkfree text-white text-[50px] font-bold">About</div>
        </div>

        <div className=" absolute w-full overflow-hidden h-[calc(100%_+_150px)]">
          <div className="flex justify-center relative z-[9] items-end h-full w-full">
            <div className="flex items-center gap-[200px] max-[1000px]:gap-[50px] max-md:flex-col-reverse max-md:gap-0 max-[448px]:absolute max-[448px]:top-0">
              <div className=" relative">
                <Image
                  src="/book_2.png"
                  width={200}
                  height={400}
                  alt=""
                  className="w-[720px] max-md:w-[650px]"
                  quality={100}
                  unoptimized
                />
                <div className="flex absolute gap-[16px] z-[9] right-[10%] top-[67%]">
                  <Link href="https://x.com/color_pepe?s=21">
                    <Image
                      src="x.png"
                      unoptimized
                      width={100}
                      height={100}
                      className="w-[70px] hover:scale-105 transition-transform cursor-pointer max-md:w-[60px]"
                      alt=""
                    />
                  </Link>
                  <Link href="https://t.me/Color_ERC404">
                    <Image
                      src="tg.png"
                      unoptimized
                      width={100}
                      height={100}
                      className="w-[70px] hover:scale-105 transition-transform cursor-pointer max-md:w-[60px]"
                      alt=""
                    />
                  </Link>
                  <Link href="https://discord.gg/colorprotocol">
                    <Image
                      src="discord.png"
                      unoptimized
                      width={100}
                      height={100}
                      className="w-[70px] hover:scale-105 transition-transform cursor-pointer max-md:w-[60px]"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className=" relative top-[130px] max-md:absolute max-md:right-[20px] flex-shrink-0 max-[414px]:top-[100px]">
                <img src="/nft_box.png" alt="" className="h-[600px] max-md:h-[350px] max-[414px]:h-[320px]" />
                <div className=" absolute w-[calc(100%_-_22%)] h-[calc(100%_-_14%)] top-[7%] left-[11%] overflow-hidden">
                  <SwiperComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[150px] relative">
        <div className="about_bg_2 w-full h-[250px] absolute bottom-0"></div>
      </div>
    </>
  );
};

export default About;

const NFTS = [
  "/about/nft_1.png",
  "/about/nft_2.png",
  "/about/nft_3.png",
  "/about/nft_4.png",
  "/about/nft_5.png",
  "/about/nft_6.png",
  "/about/nft_7.png",
];

const SwiperComponent = () => {
  const [currentNFT, setCurrentNFT] = useState<number>(0);
  //第一轮
  const round = useRef<number>(0);

  useRafInterval(() => {
    setCurrentNFT((pre) => {
      if (pre >= NFTS.length - 1) {
        round.current = round.current + 1;
        return 0;
      }
      return pre + 1;
    });
  }, 2010);

  return (
    <div className=" w-full h-full">
      {NFTS.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="colorpepe"
          width={0}
          height={0}
          className={`w-full object-cover absolute ${
            index === currentNFT || index === currentNFT - 1 ? "animationClass" : ""
          }`}
          style={{ zIndex: index + round.current + NFTS.length, transform: `translateY(-100%)` }}
          unoptimized
        />
      ))}
    </div>
  );
};
