import { useState } from 'react'

export default function App() {
  return (
    <div className='app'>
      <Hero />
    </div>
  )
}

function Hero() {
  return (
    <div className='hero'>
      <section id='home' className='pt-36 pb-20 bg-green-900 relative overflow-hidden'>
        <div className='container mx-auto relative z-2'>
          <div className='w-full px-4'>
            <div className='flex flex-col lg:flex-row lg:gap-10 xl:gap-20 lg:items-end lg:justify-center md:mt-35 lg:mt-40'>
              <div className='mb-10 xl:mb-0'>
                <h2 className='font-semibold text-side text-sm lg:text-lg text'>Beras Organik Bersertifikat</h2>
                <h1 className='font-black text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase mb-4'>Sumberejo Organik</h1>

                <p className='max-w-md font-medium text-white text-xs mb-7 xl:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates itaque veniam dolorem eius atque ipsum in aut consectetur amet eligendi.</p>

                <a href="#">
                  <button className='h-8 px-4 font-semibold text-primary bg-tertiary rounded-lg ring-side hover:text-side hover:bg-white hover:ring-1 transition-all duration-200 select-none group'>
                    Pesan Sekarang
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline-block mb-0.5 group-hover:translate-x-2 transition-all duration-300" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                  </button>
                </a>
              </div>
              
              <div className='md:bg-white/15 outline-white md:outline-1 md:shadow-xl rounded-xl p-3 select-none'>
                <div className="flex flex-col gap-5 md:flex-row lg:items-center md:justify-center cursor-default">
                  <div className="flex flex-col xl:gap-1 px-2">
                    <p className='font-extrabold text-white text-lg md:text-3xl xl:text-4xl'>1.300.000</p>
                    <p className='font-semibold text-white text-xs xl:text-base'>Karung Terjual</p>
                  </div>

                  <div className="w-1 h-15 bg-white rounded-xl hidden md:block"></div>

                  <div className="flex flex-col xl:gap-1 px-2">
                    <p className='font-extrabold text-white text-lg md:text-3xl xl:text-4xl'>90%</p>
                    <p className='font-semibold text-white text-xs xl:text-base'>Kepuasan Pelanggan</p>
                  </div>

                  <div className="w-1 h-15 bg-white rounded-xl hidden md:block"></div>

                  <div className="flex flex-col xl:gap-1 px-2">
                    <p className='font-extrabold text-white text-lg md:text-3xl xl:text-4xl'>50+</p>
                    <p className='font-semibold text-white text-xs xl:text-base'>Petani Mitra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/hinabobok2.png" alt="brand-product" className='absolute top-50 lg:top-0 xl:top-0 right-0 xl:right-10 opacity-30 lg:scale-150 xl:scale-200' />
      </section>
    </div>
  )
}

