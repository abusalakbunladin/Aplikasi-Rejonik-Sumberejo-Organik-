import { useState, useEffect } from 'react'

export default function App() {
  return (
    <div className='app'>
      <Hero />
      <Product />
      <Advantages />
    </div>
  )
}

function useScrollTrigger(elementId, offset = 500) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return

      const trigger = document.getElementById(elementId)

      if (trigger) {
        const rect = trigger.getBoundingClientRect()
        setIsScrolled(rect.top < window.innerHeight - offset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    handleScroll()

    return () => {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)
    }
  }, [elementId, offset])

  return isScrolled
}

// Hero //
function Hero() {
  return (
    <div className='hero'>
      <section id='home' className='pt-40 pb-20 bg-green-900 relative overflow-hidden'>
        <div className='container mx-auto relative z-2'>
          <div className='w-full px-4'>
            <div className='flex flex-col lg:flex-row lg:gap-10 xl:gap-20 lg:items-end lg:justify-center md:mt-35 lg:mt-40'>
              <div className='mb-10 xl:mb-0'>
                <h2 className='font-semibold text-side text-sm lg:text-lg text'>Beras Organik Bersertifikat</h2>
                <h1 className='font-black text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase mb-4'>Sumberejo Organik</h1>

                <p className='max-w-md font-medium text-white text-xs mb-7 xl:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates itaque veniam dolorem eius atque ipsum in aut consectetur amet eligendi.</p>

                <a href="#">
                  <button className='h-8 px-4 font-semibold text-primary bg-tertiary rounded-lg shadow-lg ring-side hover:text-side hover:bg-white hover:ring-1 active:opacity-70 transition-all duration-200 select-none group'>
                    Pesan Sekarang
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline-block mb-0.5 group-hover:translate-x-2 transition-all duration-300" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                  </button>
                </a>
              </div>
              
              <div className='flex flex-col gap-3 sm:gap-5'>
                <div className='font-bold text-white text-xl text-center bg-side/50 rounded-lg sm:rounded-xl outline-white outline-1 p-2 select-none'>
                  <p>Pencapaian</p>
                </div>

                <div className='sm:bg-white/15 outline-white sm:outline-1 sm:shadow-xl rounded-xl sm:p-3 select-none'>
                  <div className="flex flex-col gap-2 sm:gap-5 sm:flex-row sm:items-center sm:justify-center cursor-default">
                    <div className="flex flex-col xl:gap-1 px-2 bg-white/15 rounded-lg outline-white outline-1 sm:bg-white/0 sm:outline-0 p-2 sm:p-0">
                      <p className='font-extrabold text-white text-lg sm:text-2xl md:text-3xl xl:text-4xl'>1.300.000</p>
                      <p className='font-semibold text-white text-xs sm:text-sm xl:text-xs'>Karung Terjual</p>
                    </div>

                    <div className="w-1 h-15 bg-white rounded-xl hidden sm:block"></div>

                    <div className="flex flex-col xl:gap-1 px-2 bg-white/15 rounded-lg outline-white outline-1 sm:bg-white/0 sm:outline-0 p-2 sm:p-0">
                      <p className='font-extrabold text-white text-lg sm:text-2xl md:text-3xl xl:text-4xl'>90%</p>
                      <p className='font-semibold text-white text-xs sm:text-sm xl:text-xs'>Kepuasan Pelanggan</p>
                    </div>

                    <div className="w-1 h-15 bg-white rounded-xl hidden sm:block"></div>

                    <div className="flex flex-col xl:gap-1 px-2 bg-white/15 rounded-lg outline-white outline-1 sm:bg-white/0 sm:outline-0 p-2 sm:p-0">
                      <p className='font-extrabold text-white text-lg sm:text-2xl md:text-3xl xl:text-4xl'>50+</p>
                      <p className='font-semibold text-white text-xs sm:text-sm xl:text-xs'>Petani Mitra</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <img src="/img/hinabobok2.png" alt="brand-product" className='absolute top-70 sm:top-30 md:top-70 lg:top-15 xl:top-0 right-0 xl:right-30 opacity-30 lg:scale-150 xl:scale-200 select-none' />
      </section>
    </div>
  )
}
// Hero //

// Product //
function Product() {
  const isScrolled = useScrollTrigger('produk', 900)

  const proCard = 'max-w-sm mx-auto lg:mx-0 bg-tertiary border-accentThrd border-2 rounded-xl shadow-xl p-4 relative z-6 transition-all duration-800 ease-in-out lg:max-w-none'
  const proBgEffct = 'w-full h-100 lg:h-120 xl:h-130 lg:max-w-3xl xl:max-w-4xl bg-linear-to-tr from-primary to-side rounded-4xl absolute -translate-y-15 transition-all duration-600 hidden lg:block' 

  const deco1 = 'w-50 h-30 rounded-xl lg:left-10 xl:left-30 lg:top-10 xl:top-25 absolute z-5 transition-all duration-1000 ease-out hidden xl:block'
  const deco2 = 'w-50 h-40 rounded-xl lg:right-4 xl:right-12 lg:-bottom-10 xl:-bottom-27 absolute z-5 transition-all duration-1000 ease-out hidden xl:block'
  const deco3 = 'w-25 h-25 rounded-xl lg:left-60 xl:left-100 lg:-bottom-20 xl:-bottom-50 absolute z-5 -translate-y-15 transition-all duration-500 delay-300 ease-out hidden xl:block'
  const deco4 = 'w-30 h-30 rounded-xl lg:right-20 xl:right-40 lg:top-10 xl:top-25 absolute z-5 transition-all duration-500 delay-300 ease-out hidden xl:block'

  return (
    <div className="product">
      <section id="produk" className="pt-36 pb-50">
        <div className="container mx-auto">
          <div className="w-full px-4 relative">
            <div className="mx-auto mb-15 lg:mb-30 select-none">
              <div className="flex gap-3 items-center justify-center mb-3">
                <div className='w-5 h-0.5 bg-side rounded-lg'></div>
                <h3 className='font-light text-side text-sm lg:text-lg uppercase'>Product</h3>
                <div className='w-5 h-0.5 bg-side rounded-lg'></div>
              </div>

              <div className="flex gap-7 items-center justify-center">
                <div className="hidden md:block">
                  <div className="flex gap-2">
                    <div className='w-2.5 h-1 bg-side rounded-lg'></div>
                    <div className='w-5 h-1 bg-side rounded-lg'></div>
                    <div className='w-10 h-1 bg-side rounded-lg'></div>
                  </div>
                </div>

                <h2 className='max-w-lg font-extrabold text-quaternary text-4xl lg:text-5xl'>Produk dari Rejonik</h2>

                <div className="hidden md:block">
                  <div className="flex gap-2">
                    <div className='w-10 h-1 bg-side rounded-lg'></div>
                    <div className='w-5 h-1 bg-side rounded-lg'></div>
                    <div className='w-2.5 h-1 bg-side rounded-lg'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 justify-center mx-auto">
              <div className={`${deco1} ${!isScrolled ? '-translate-x-10' : 'bg-side/50 translate-x-10'}`} ></div>

              <div className={`${deco4} ${!isScrolled ? 'scale-0' : 'bg-primary/50 scale-150'}`} ></div>

              <div id='pro1' className={`${proCard} ${!isScrolled ? 'lg:-rotate-5 lg:translate-x-20' : ''}`} >
                <img src="/product/beras.jpg" alt="Beras Original" className='w-full h-60 lg:w-56 lg:h-56 xl:w-70 xl:h-70 object-cover rounded-lg outline-accentThrd outline-2 mb-5 select-none' />

                <h3 className='font-extrabold text-xl text-side text-shadow-lg'>Beras Original</h3>
                <p className='font-medium text-xs text-accentThrd mb-1'>1 kg</p>

                <div className="flex justify-between">
                  <p className='font-bold text-accentThrd text-xl'>Rp 20.000</p>

                  <a href="#" target='_blank' className='group'>
                    <button className='font-medium text-accentThrd bg-white ring-accentThrd ring-2 rounded-full group-hover:text-white group-active:text-side group-active:ring-side px-4 p-1 relative transition-all duration-300 overflow-hidden cursor-pointer select-none'>
                      <span className='relative z-1'>Pesan</span>
                      
                      <div className="w-8 h-8 bg-accentThrd rounded-full absolute -translate-y-7 translate-x-2 scale-0 group-hover:scale-250 group-active:scale-0 transition-all duration-100"></div>
                    </button>
                  </a>
                </div>
              </div>

              <div id='pro2' className={`${proCard} ${!isScrolled ? 'lg:-translate-y-3' : ''}`} >
                <img src="/product/beras-aromatik.jpg" alt="Beras Aromatik" className='w-full h-60 lg:w-56 lg:h-56 xl:w-70 xl:h-70 object-cover rounded-lg outline-accentThrd outline-2 mb-5 select-none' />

                <h3 className='font-extrabold text-xl text-fuchsia-400 text-shadow-lg'>Beras Aromatik</h3>
                <p className='font-medium text-xs text-accentThrd mb-1'>1 kg</p>

                <div className="flex justify-between">
                  <p className='font-bold text-accentThrd text-xl'>Rp 20.000</p>

                  <a href="#" target='_blank' className='group'>
                    <button className='font-medium text-accentThrd bg-white ring-accentThrd ring-2 rounded-full group-hover:text-white group-active:text-side group-active:ring-side px-4 p-1 relative transition-all duration-300 overflow-hidden cursor-pointer select-none'>
                      <span className='relative z-1'>Pesan</span>
                      
                      <div className="w-8 h-8 bg-accentThrd rounded-full absolute -translate-y-7 translate-x-2 scale-0 group-hover:scale-250 group-active:scale-0 transition-all duration-100"></div>
                    </button>
                  </a>
                </div>
              </div>

              <div id='pro3' className={`${proCard} ${!isScrolled ? 'lg:rotate-5 lg:-translate-x-20' : ''}`} >
                <img src="/product/beras-merah.jpg" alt="Beras Merah" className='w-full h-60 lg:w-56 lg:h-56 xl:w-70 xl:h-70 object-cover rounded-lg outline-accentThrd outline-2 mb-5 select-none' />

                <h3 className='font-extrabold text-xl text-[#691500] text-shadow-lg'>Beras Merah</h3>
                <p className='font-medium text-xs text-accentThrd mb-1'>1 kg</p>

                <div className="flex justify-between">
                  <p className='font-bold text-accentThrd text-xl'>Rp 20.000</p>

                  <a href="#" target='_blank' className='group'>
                    <button className='font-medium text-accentThrd bg-white ring-accentThrd ring-2 rounded-full group-hover:text-white group-active:text-side group-active:ring-side px-4 p-1 relative transition-all duration-300 overflow-hidden cursor-pointer select-none'>
                      <span className='relative z-1'>Pesan</span>
                      
                      <div className="w-8 h-8 bg-accentThrd rounded-full absolute -translate-y-7 translate-x-2 scale-0 group-hover:scale-250 group-active:scale-0 transition-all duration-100"></div>
                    </button>
                  </a>
                </div>
              </div>

              <div className={`${deco2} ${!isScrolled ? 'translate-x-10' : 'bg-side/50 -translate-x-10'}`} ></div>

              <div className={`${deco3} ${!isScrolled ? 'scale-0' : 'bg-primary/50 scale-150'}`} ></div>

              <div className={`${proBgEffct} ${!isScrolled ? '' : '-rotate-5'}`} ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
// Product //

// Advantages //
function Advantages() {
  const isScrolled = useScrollTrigger('keunggulan', 800)

  return (
    <div className="advantages">
      <section id="keunggulan" className='pt-36 pb-32 bg-side/40'>
        <div className='container mx-auto'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-30 select-none'>
              <div className="flex gap-3 items-center justify-center mb-3">
                <div className='w-5 h-0.5 bg-side rounded-lg'></div>
                <h3 className='font-light text-side text-sm lg:text-lg uppercase'>Advantages</h3>
                <div className='w-5 h-0.5 bg-side rounded-lg'></div>
              </div>

              <div className="flex gap-7 items-center justify-center">
                <div className="hidden md:block">
                  <div className="flex gap-2">
                    <div className='w-2.5 h-1 bg-side rounded-lg'></div>
                    <div className='w-5 h-1 bg-side rounded-lg'></div>
                    <div className='w-10 h-1 bg-side rounded-lg'></div>
                  </div>
                </div>

                <h2 className='max-w-lg font-extrabold text-quaternary text-4xl lg:text-5xl'>Keunggulan Rejonik</h2>

                <div className="hidden md:block">
                  <div className="flex gap-2">
                    <div className='w-10 h-1 bg-side rounded-lg'></div>
                    <div className='w-5 h-1 bg-side rounded-lg'></div>
                    <div className='w-2.5 h-1 bg-side rounded-lg'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex gap-5 justify-center mx-auto'>
              <div className='w-100 h-50 bg-primary rounded-xl'></div>
              <div className='w-100 h-50 bg-primary rounded-xl'></div>
              <div className='w-100 h-50 bg-primary rounded-xl'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
// Advantages //
