import Image from "next/image";
const Foot = () => {
  return (
    <div className="foot_bg w-full h-[500px] flex justify-center items-center max-sm:h-[800px] ">
      <div className="flex items-center gap-14 max-sm:flex-col max-sm:gap-7">
        <Image
          src="/foot_logo.png"
          alt=""
          width={100}
          height={100}
          className="w-[300px] max-sm:w-[200px]"
          unoptimized
        />
        <div className=" font-linkfree text-white text-4xl max-sm:px-[20px] max-sm:text-center font-semibold">
          <div>
            $ Colorpepe is powered by ColorProtocol, has no <br />
            cooperation with $ PEPE and Matt Furie.
          </div>
          <div className="mt-20 max-sm:mt-10">
            Just the same as $ pepe. $Colorpepe is a meme
            <br /> coin with no intrinsic value or expecyation of
            <br /> financial return.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
