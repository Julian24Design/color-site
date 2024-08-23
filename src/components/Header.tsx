import Link from 'next/link'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useClickAway } from 'ahooks'

const Menu = (
  <>
    <Link href='/'>home</Link>
    <div className='tooltip tooltip-bottom' data-tip='Coming soon'>
      <p className='cursor-pointer'>museum</p>
    </div>
    <div className='tooltip tooltip-bottom' data-tip='Coming soon'>
      <p className='cursor-pointer'>mint</p>
    </div>
    <div className='tooltip tooltip-bottom' data-tip='Coming soon'>
      <p className='cursor-pointer'>stake</p>
    </div>
  </>
)

const MenuMobile = (
  <>
    <Link href='/'>home</Link>
    <div>
      <p>museum</p>
      <p className='text-lg opacity-70'>Coming soon</p>
    </div>
    <div>
      <p>mint</p>
      <p className='text-lg opacity-70'>Coming soon</p>
    </div>
    <div>
      <p>stake</p>
      <p className='text-lg opacity-70'>Coming soon</p>
    </div>
  </>
)

const Header = () => {
  const [menuShow, setMenuShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useClickAway(() => setMenuShow(false), ref)

  return (
    <div className='head_bg sticky top-0 z-40 h-[116px] w-full'>
      <div className='relative flex h-[110px] w-full items-center justify-between px-[100px] max-xl:px-[32px]'>
        <Image src='/logo.png' width={250} height={100} alt='colorpepe' className='w-[250px]' unoptimized />
        <div className='flex items-center gap-16 font-linkfree text-3xl font-bold text-white max-lg:gap-8'>
          <div className='visible flex items-center gap-16 max-lg:hidden'>{Menu}</div>
          <Link
            className='rounded-full bg-[#25A031] px-[10px] py-[4px] transition-transform hover:scale-105'
            href={'https://app.uniswap.org/explore/tokens/base/0x5ca0c41a50fcfec85b91bb4ca5b024b36d9bb120'}
          >
            buy now
          </Link>
          <Image
            src='/menu.png'
            alt=''
            width={100}
            height={100}
            className='hidden w-[32px] max-lg:block'
            onClick={() => setMenuShow(!menuShow)}
          />
        </div>

        {menuShow && (
          <div className='menu_bg absolute right-[10px] top-[80px] z-[9] h-[400px] w-[200px] lg:hidden' ref={ref}>
            <div className='flex flex-col items-start gap-7 px-[20px] pt-[36px] text-left font-linkfree text-3xl text-white'>
              {MenuMobile}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
