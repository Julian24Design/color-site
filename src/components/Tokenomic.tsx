import Image from "next/image";

const Tokenomic = () => {
  return (
    <div>
      <div className="bg_5 w-full h-[600px] font-semibold">
        <div className=" font-linkfree text-white text-7xl text-center pt-8 max-md:text-6xl">Tokenomic</div>
        <div className="flex justify-center mt-8">
          <div className="font-linkfree text-white text-4xl max-[1000px]:px-[20px] max-[1000px]:text-center">
            100% converted from native asset SPEPE and supported revert at anytime Fair launch ,<br /> no more bullshit.
            keep it simple and CTO!
          </div>
        </div>
        <Image
          src="/tokenomic.png"
          alt=""
          width={100}
          height={100}
          unoptimized
          className="w-[250px] mx-auto mt-16 max-md:mt-4"
        />
      </div>
      <div className="wall_bg w-full h-[90px]"></div>
    </div>
  );
};

export default Tokenomic;
