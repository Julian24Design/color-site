import Image from "next/image";
const NFT = () => {
  return (
    <>
      <div className="nft_bg_1 w-full h-[900px] relative max-md:h-[1000px]">
        <div className="flex justify-center pt-4 relative z-[1]">
          <div className="flex items-center gap-4">
            <Image src="/favicon.png" alt="" width={122} height={122} className="w-[122px] max-sm:w-[100px]" />
            <div className=" font-linkfree text-white text-[50px] font-bold max-sm:text-[32px]">
              Colorpepe NFT collection
            </div>
          </div>
        </div>

        <div className=" relative block max-md:hidden w-fit m-auto">
          <Image src="/nft_total.png" alt="" width={200} height={100} className="w-[1000px] m-auto" unoptimized />
          <Image
            src="/me.png"
            unoptimized
            width={100}
            height={50}
            alt=""
            className=" absolute top-[47%] left-[44%] w-[98px] hover:scale-105 transition-transform cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://magiceden.io/collections/base/0x5ca0c41a50fcfec85b91bb4ca5b024b36d9bb120")
            }
          />
          <Image
            src="/nft_btn.png"
            alt=""
            width={0}
            height={0}
            className=" absolute w-[100px] top-[26%] left-[83%] hover:scale-105 transition-transform cursor-pointer"
            unoptimized
            onClick={() =>
              (window.location.href = "https://www.okx.com/zh-hans/web3/marketplace/nft/collection/base/colorpepe-2")
            }
          />
          <Image
            src="/boat.png"
            alt=""
            width={0}
            height={0}
            className=" absolute w-[100px] top-[86%] left-[29%] hover:scale-105 transition-transform cursor-pointer"
            unoptimized
            onClick={() => (window.location.href = "https://opensea.io/collection/colorpepe-bc404")}
          />
        </div>

        <div className=" relative hidden max-md:block z-[9] w-fit m-auto">
          <Image src="/nft_total_2.png" alt="" width={200} height={100} className="w-[600px] m-auto" unoptimized />
          <Image
            src="/me.png"
            unoptimized
            width={0}
            height={0}
            alt=""
            className=" absolute top-[32%] left-[34%] w-[200px] hover:scale-105 transition-transform cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://magiceden.io/collections/base/0x5ca0c41a50fcfec85b91bb4ca5b024b36d9bb120")
            }
          />
          <Image
            src="/nft_btn.png"
            alt=""
            width={0}
            height={0}
            className=" absolute w-[100px] top-[8%] left-[78%] hover:scale-105 transition-transform cursor-pointer"
            unoptimized
            onClick={() =>
              (window.location.href = "https://www.okx.com/zh-hans/web3/marketplace/nft/collection/base/colorpepe-2")
            }
          />
          <Image
            src="/boat.png"
            alt=""
            width={0}
            height={0}
            className=" absolute w-[100px] top-[84%] left-[54%] hover:scale-105 transition-transform cursor-pointer"
            unoptimized
            onClick={() => (window.location.href = "https://opensea.io/collection/colorpepe-bc404")}
          />
        </div>
      </div>
      <div className="relative  max-md:bg-black max-md:h-[150px] max-[414px]:h-[70px]">
        <div className="about_bg_2 w-full h-[250px] absolute bottom-0 max-sm:h-[200px]"></div>
      </div>
    </>
  );
};

export default NFT;
