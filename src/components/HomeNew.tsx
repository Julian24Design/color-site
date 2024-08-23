import Image from 'next/image'
import grail from '/public/home-new/grail.png'
import symbol from '/public/home-new/symbol.png'
import symbolGlow from '/public/home-new/symbol-glow.png'

const HomeNew = () => {
  return (
    <section className="relative h-[900px] bg-[url('/home-new/bg-with-paintings.png')] bg-cover bg-center">
      <div className='absolute left-0 right-0 top-[470px] mx-auto w-[190px] translate-x-2 xl:w-[210px]'>
        <Image src={symbolGlow} alt='symbol-glow' className='animate-glow' />
        <Image src={symbol} alt='symbol' className='absolute left-0 top-0' />
      </div>
      <Image
        src={grail}
        alt='grail'
        className='absolute bottom-[120px] left-0 right-0 mx-auto h-[130px] w-auto translate-x-[120px] lg:bottom-[10px] lg:h-[280px] lg:translate-x-[380px] xl:translate-x-[420px]'
      />
    </section>
  )
}

export default HomeNew
