"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { configResponsive, useResponsive } from "ahooks";

configResponsive({
  xs: 0,
  sm: 576,
  md: 780,
  lg: 992,
  xl: 1200,
});

const Home = () => {
  const swiperRef = useRef<any>(null);
  const responsive = useResponsive();

  const [swiperProps, setSwiperProps] = useState({ slidesPerView: 3, width: "80rem" });

  useEffect(() => {
    let clientWidth = document.body.clientWidth;
    if (clientWidth <= 640) {
      setSwiperProps({ slidesPerView: 1, width: "25rem" });
    } else if (clientWidth <= 912) {
      setSwiperProps({ slidesPerView: 2, width: "55rem" });
    } else if (clientWidth <= 1024) {
      setSwiperProps({ slidesPerView: 3, width: "80rem" });
    }
  }, [responsive]);

  return (
    <>
      <div className="bg_1 w-full h-[100px]"></div>
      <div className="bg_2 w-full h-[500px] flex items-center justify-center">
        <div className="relative home-swiper-warp" style={{ width: swiperProps.width }}>
          <div className="swiper-pre" onClick={() => swiperRef.current?.slidePrev()}></div>
          <Swiper
            slidesPerView={swiperProps.slidesPerView}
            spaceBetween={"50px"}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop
          >
            {new Array(15).fill(null).map((_, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={`/home/nft_${idx + 1}.png`}
                  alt="colorpepe"
                  width={0}
                  height={0}
                  className="w-full"
                  unoptimized
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-next" onClick={() => swiperRef.current?.slideNext()}></div>
        </div>
      </div>
      <div className="bg_3 w-full h-[484px] relative">
        <Image
          src="/object_1.webp"
          alt=""
          width={360}
          height={360}
          className="bottom-0 absolute left-[60px] z-[1] w-[360px] h-[360px] max-lg:hidden"
        />
        <Image
          src="/object_2.webp"
          alt=""
          width={1086}
          height={264}
          className="bottom-0 absolute left-1/2 -translate-x-1/2 z-[2] h-[450px] w-auto object-cover"
        />
        <Image
          src="/object_3.webp"
          alt=""
          width={360}
          height={360}
          className="bottom-0 absolute right-[60px] z-[1] w-[360px] max-lg:hidden"
        />
      </div>
    </>
  );
};

export default Home;
