import { useState } from 'react'

export default function App() {
  return (
    <div className='app'>
      <Hero />
      <Product />
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


function Product() {
  return (
    <div className="product">
      <section id="produk" className="pt-36 pb-32">
        <div className="container mx-auto">
          <div className="w-full px-4 relative">
            <div className="mx-auto mb-20">
              <div className="flex gap-3 items-center justify-center mb-3">
                <div className='w-5 h-0.5 bg-side rounded-lg'></div>
                <h3 className='font-light text-side text-lg uppercase'>Product</h3>
                <div className='w-5 h-0.5 bg-side rounded-lg'></div>
              </div>

              <div className="flex gap-7 items-center justify-center">
                <div className="flex gap-2">
                  <div className='w-2.5 h-1 bg-side rounded-lg'></div>
                  <div className='w-5 h-1 bg-side rounded-lg'></div>
                  <div className='w-10 h-1 bg-side rounded-lg'></div>
                </div>

                <h2 className='max-w-lg font-extrabold text-quaternary text-5xl'>Produk dari Rejonik</h2>

                <div className="flex gap-2">
                  <div className='w-10 h-1 bg-side rounded-lg'></div>
                  <div className='w-5 h-1 bg-side rounded-lg'></div>
                  <div className='w-2.5 h-1 bg-side rounded-lg'></div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mx-auto">
              <div className="bg-tertiary border-accentThrd border-2 rounded-xl shadow-xl p-4 relative z-2">
                <img src="/product/beras.jpg" alt="Beras Original" className='w-70 h-70 object-cover rounded-lg outline-accentThrd outline-2 mb-5 select-none' />

                <h3 className='font-bold text-xl text-side'>Beras Original</h3>
              </div>
            

              <div className="w-full h-130 max-w-5xl bg-linear-to-tr from-primary to-side rounded-4xl absolute -rotate-5"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

