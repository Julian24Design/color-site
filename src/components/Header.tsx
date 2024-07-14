import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useClickAway } from "ahooks";

const Menu = (
  <>
    <Link href="#home">home</Link>
    <Link href="#play">how to play</Link>
    <Link href="#about">about</Link>
    <Link href="#tokenomic">tokenomic</Link>
    {/* <Link href="#roadmp">roadmp</Link> */}
  </>
);

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(() => setMenuShow(false), ref);

  return (
    <div className="head_bg w-full h-[116px] sticky top-0 z-40">
      <div className="w-full px-[100px] max-xl:px-[32px] h-[110px] flex items-center justify-between relative">
        <Image src="/logo.png" width={250} height={100} alt="colorpepe" className="w-[250px]" unoptimized />
        <div className=" text-white font-linkfree text-3xl gap-16 max-lg:gap-8 flex items-center font-bold">
          <div className="gap-16 flex items-center visible max-lg:hidden">{Menu}</div>
          <Link
            className="bg-[#25A031] rounded-full px-[10px] py-[4px] hover:scale-105 transition-transform"
            href={"https://app.uniswap.org/explore/tokens/base/0x5ca0c41a50fcfec85b91bb4ca5b024b36d9bb120"}
          >
            buy now
          </Link>
          <Image
            src="/menu.png"
            alt=""
            width={100}
            height={100}
            className="w-[32px] hidden  max-lg:block"
            onClick={() => setMenuShow(!menuShow)}
          />
        </div>

        {menuShow && (
          <div className=" absolute right-[10px] w-[200px] h-[400px] menu_bg top-[80px] z-[9] lg:hidden" ref={ref}>
            <div className="flex flex-col text-white font-linkfree text-3xl gap-8 pt-[36px] pl-[20px]">{Menu}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
