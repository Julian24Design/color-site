import Image from "next/image";
const HowToPlay = () => {
  return (
    <>
      <div className="pay_bg_2 w-full h-[630px] max-md:h-[700px]">
        <div className="flex justify-center ">
          <div className="flex items-center gap-8 mt-2">
            <Image
              src="/favicon.png"
              alt=""
              width={122}
              height={122}
              className="w-[122px] max-md:w-[100px]"
              unoptimized
            />
            <div className=" font-linkfree text-white text-[50px] font-bold">How to play</div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex font-linkfree text-white font-semibold text-[48px] leading-none gap-[150px] max-md:flex-col max-md:text-[32px] max-md:gap-[20px]">
            <div className="text-center">
              <Image
                src="/buy_step_1.png"
                width={128}
                height={62}
                alt=""
                className="w-[450px] inline-block max-md:w-[200px]"
                quality={100}
                unoptimized
              />
              <div className="mt-4">
                Step 1: Buy $ Colorpepe <br />
                as more as possible
              </div>
              <button
                className="bg-[#0450C2] rounded-full px-[16px] py-[8px] hover:scale-105 transition-transform mt-6"
                onClick={() =>
                  (window.location.href =
                    "https://app.uniswap.org/explore/tokens/base/0x5ca0c41a50fcfec85b91bb4ca5b024b36d9bb120")
                }
              >
                buy on uniswap
              </button>
            </div>
            <div className=" relative text-center left-[16px] bottom-[62px] max-md:static">
              <Image
                src="/buy_step_2.png"
                width={128}
                height={62}
                alt=""
                className="w-[300px] inline-block max-md:w-[200px]"
                quality={100}
              />
              <div className="mt-4">
                Step 2: Check the colorpepe
                <br /> PFP collection your wallet
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wall_bg w-full h-[90px]"></div>
      <div className="pay_bg_3 w-full h-[300px] max-sm:h-[400px] max-sm:px-[10px]">
        <div className="flex justify-center items-center relative top-1/2 -translate-y-1/2">
          <div className=" font-linkfree text-white font-semibold text-[48px] flex items-center gap-[100px] max-[1000px]:text-[36px] max-[1000px]:gap-[20px] max-md:flex-col">
            <div className="max-sm:leading-10">
              How much $ Coloepepe can NFT ?<br /> Actually it is complex… but it is an impressive design…
              <br /> maybe you can check the rules here.
            </div>
            <button
              className="bg-[#1CA94D] w-[150px] h-[150px] rounded-full flex justify-center items-center hover:scale-105 transition-transform max-md:h-auto"
              onClick={() => (window.location.href = "https://docs.colorprotocol.com/?v=25")}
            >
              rules
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToPlay;
