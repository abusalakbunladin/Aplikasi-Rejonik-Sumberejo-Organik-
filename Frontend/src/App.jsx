import { useEffect, useRef } from "react";
import { hover, motion, useInView } from "motion/react";
import { animate, stagger } from "animejs";


export default function App() {
  return (
    <div className="app">
      <Hero />
      <Product />
      <Advantages />
      <About />
      <Sertificate />
      <Review />
      <Order />
    </div>
  );
}

// Hero //
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    if(!heroRef.current) return

    if(window.innerWidth < 1024) return

    // Title //
    animate(heroRef.current.querySelector('.h-t-deco'), {
      scaleY: [0, 1],
      delay: 1100,
      duration: 500,
      ease: 'outBounce',
    })

    animate(heroRef.current.querySelectorAll('.hero-title'), {
      translateX: [-700, 0],
      scaleX: [0.2, 0.8, 1],
      delay: stagger(650),
      duration: 1200,
      ease: 'outElastic(1,1)'
    })

    animate(heroRef.current.querySelector('.h-main-deco'), {
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 1000,
      duration:650,
      ease: 'outElastic(1,1)'
    })

    animate(heroRef.current.querySelectorAll('.h-t-deco2'), {
      scaleY: [0, 1],
      scaleX: [0, 1.2, 1],
      delay: 1300,
      duration: 700,
      ease: 'outElastic(1.21,0.66)'
    })

    animate(heroRef.current.querySelector('.h-text'), {
      scaleY: [0, 1],
      delay: 1100,
      duration: 600,
      ease: 'outElastic(1,1)'
    })

    animate(heroRef.current.querySelector('.order-btn'), {
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 1500,
      duration: 600,
      ease: 'outElastic(1,1)'
    })
    // Title //

    // Achievment //
    animate(heroRef.current.querySelector('.acv-title'), {
      y: [-75, 0],
      scaleY: {
        from: 0,
        to: 1,
        delay:1600
      },
      scaleX: {
        from: 1.5,
        to: 1,
        delay: 1600
      },
      delay:1500,
      duration: 700,
      ease: 'outElastic(1,1)'
    })

    animate(heroRef.current.querySelectorAll('.acv-deco'), {
      scaleY: [0, 1],
      delay: 1800,
      duration: 500,
      ease: 'outBounce'
    })

    animate(heroRef.current.querySelector('.acv-content'), {
      scaleX: [0, 1],
      delay: 1700,
      duration: 700,
      ease: 'outElastic(1.04,0.66)'
    })

    animate(heroRef.current.querySelectorAll('.acv-t-content'), {
      scale: {
        from: 0,
        to: 1,
        delay: stagger(300, {start: 1900})
      },
      duration: 700,
      ease: 'outElastic(1.04,0.66)'
    })
    // Achievment //
    
  }, [])

  return (
    <div className="hero" ref={heroRef}>
      <section id="home" className="pt-90 pb-30 bg-primary relative overflow-hidden">
        <div className="container mx-auto relative z-2">
          <div className="w-full px-4">
            <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-30 lg:items-end lg:justify-center md:mt-35 lg:mt-40">
              <div className="mb-10 xl:mb-0">
                <div className="flex flex-col">
                  <div className="relative">
                    <div className="h-t-deco2 w-40 h-60 bg-white/20 rounded-sm absolute -z-2 top-0 -translate-x-30 -translate-y-20 scale-70 xl:scale-100 hidden lg:block"></div>

                    <div className="flex gap-3 items-center mb-4">
                      <div className="h-t-deco w-1 h-13 lg:h-15 xl:h-20 bg-side rounded-lg"></div>

                      <div className="flex flex-col overflow-hidden">
                        <h2 className="hero-title font-semibold text-side text-sm lg:text-lg">
                          Beras Organik Bersertifikat
                        </h2>

                        <h1 className="hero-title font-black text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase inline-block">
                          Sumberejo Organik
                        </h1>
                      </div>
                    </div>

                    <div className="h-main-deco w-150 h-55 bg-side/30 rounded-sm absolute -z-1 top-0 -translate-y-14 -translate-x-30 xl:-translate-y-10 xl:-translate-x-10 scale-70 xl:scale-100 hidden lg:block"></div>

                    <div className="h-t-deco2 w-50 h-30 bg-white/20 rounded-sm absolute -z-2 right-0 scale-70 xl:scale-100 hidden lg:block"></div>
                  </div>
                
                  <p className="h-text max-w-md font-medium text-white text-xs mb-7 xl:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptates itaque veniam dolorem eius atque ipsum in aut
                    consectetur amet eligendi.
                  </p>
                </div>
                

                <a href="#">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scaleX: 0.8, scaleY: 1.5 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }}
                    className="order-btn h-8 px-4 font-semibold text-primary bg-tertiary rounded-lg shadow-lg ring-side hover:text-side hover:bg-white hover:ring-1 active:opacity-70 select-none cursor-pointer group"
                  >
                    <span>Pesan Sekarang</span>

                    <motion.svg
                      variants={{
                        hover: { x: 5 },
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline-block mb-0.5 group-hover:translate-x-2 transition-all duration-300"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </motion.svg>
                  </motion.button>
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <div className="block xl:flex xl:flex-row items-center gap-2 justify-end overflow-hidden">
                  <div className="acv-deco w-1 h-15 bg-white/50 rounded-sm hidden xl:block"></div>
                    
                  <div className="acv-title font-bold text-white xl:text-3xl uppercase text-center bg-side/50 rounded-sm p-2 xl:p-4 select-none">
                        <p>Pencapaian</p>
                  </div>

                  <div className="acv-deco w-1 h-15 bg-white/50 rounded-sm hidden xl:block"></div>
                </div>

                <div className="flex flex-col gap-3 sm:gap-5 relative select-none">
                  <div className="acv-content sm:bg-white/15 rounded-sm sm:p-3 xl:px-8">
                    <div className="flex flex-col gap-2 sm:gap-5 xl:gap-10 sm:flex-row sm:items-center sm:justify-center cursor-default">
                      <div className="flex flex-col xl:gap-1 px-2 bg-white/15 rounded-sm sm:bg-white/0 sm:outline-0 p-2 sm:p-0">
                        <p className="font-extrabold text-white text-lg sm:text-2xl md:text-3xl xl:text-4xl">
                          1.300.000
                        </p>
                        <p className="font-semibold text-white text-xs sm:text-sm xl:hidden">
                          Karung Terjual
                        </p>
                      </div>

                      <div className="w-1 h-15 bg-white rounded-xl hidden sm:block"></div>

                      <div className="flex flex-col xl:gap-1 px-2 bg-white/15 rounded-sm sm:bg-white/0 sm:outline-0 p-2 sm:p-0">
                        <p className="font-extrabold text-white text-lg sm:text-2xl md:text-3xl xl:text-4xl">
                          90%
                        </p>
                        <p className="font-semibold text-white text-xs sm:text-sm xl:hidden">
                          Kepuasan Pelanggan
                        </p>
                      </div>

                      <div className="w-1 h-15 bg-white rounded-xl hidden sm:block"></div>

                      <div className="flex flex-col xl:gap-1 px-2 bg-white/15 rounded-sm sm:bg-white/0 sm:outline-0 p-2 sm:p-0">
                        <p className="font-extrabold text-white text-lg sm:text-2xl md:text-3xl xl:text-4xl">
                          50+
                        </p>
                        <p className="font-semibold text-white text-xs sm:text-sm xl:hidden">
                          Petani Mitra
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="acv-t-content hidden xl:block xl:bg-side xl:p-1 xl:px-2 rounded-sm xl:absolute xl:bottom-0 xl:-translate-x-10 xl:translate-y-7">
                    <p className="font-semibold text-white text-xs sm:text-sm xl:text-lg">
                        Karung Terjual
                    </p>
                  </div>

                  <div className="acv-t-content hidden xl:block xl:bg-side xl:p-1 xl:px-2 rounded-sm xl:absolute xl:bottom-0 xl:right-1/4 xl:-translate-x-13 xl:translate-y-7">
                    <p className="font-semibold text-white text-xs sm:text-sm xl:text-lg">
                      Kepuasan Pelanggan
                    </p>
                  </div>

                  <div className="acv-t-content hidden xl:block xl:bg-side xl:p-1 xl:px-2 rounded-sm xl:absolute xl:bottom-0 xl:right-0 xl:-translate-x-8 xl:translate-y-7">
                    <p className="font-semibold text-white text-xs sm:text-sm xl:text-lg">
                      Petani Mitra
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <img
          src="/img/LittleRio.png"
          alt="brand-product"
          className="absolute top-70 sm:top-30 md:top-70 lg:top-15 xl:top-1/5 right-0 xl:right-30 opacity-50 lg:scale-150 xl:scale-200 select-none"
        />
      </section>
    </div>
  );
}
// Hero //

// Product //
function Product() {
  const proCard =
    "max-w-sm mx-auto lg:mx-0 bg-tertiary border-accentThrd border-2 rounded-xl shadow-xl p-4 relative z-6 lg:max-w-none";

  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {once: true, amount: 0.8})

  useEffect(() => {
    if(!sectionRef.current) return
    if (!isInView || window.innerWidth < 1024) return

    // Title //
    animate(sectionRef.current.querySelector('.s-title'), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 300,
      duration: 600,
      ease: 'outElastic(1,1)'
    })

    animate(sectionRef.current.querySelectorAll('.s-t-deco'), {
      opacity: [0, 1],
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 600,
      duration: 700,
      ease: 'outElastic(1.19,0.66)'
    })

    animate(sectionRef.current.querySelector('.s-t-main'), {
      opacity: [0, 1],
      scaleX: [0 ,1],
      scaleY: [1.2, 1],
      delay: 800,
      duration: 600,
      ease: 'outElastic(1,1)'
    })

    animate(sectionRef.current.querySelectorAll('.s-t-m-deco'), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 1200,
      duration: 600,
      ease: 'outElastic(1,1)'
    })

    animate(sectionRef.current.querySelector('.deco-p1'), {
      x: [-100, 0],
      delay: 1500,
      duration: 600,
      ease: 'outBounce'
    })
    animate(sectionRef.current.querySelector('.deco-p2'), {
      x: [100, 0],
      delay: 1500,
      duration: 600,
      ease: 'outBounce'
    })
    // Title //
    
    // Product //
    animate(sectionRef.current.querySelectorAll('.procard'), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [1.5, 1],
      delay: stagger(300, {start: 1300, from: 'center'}),
      duration: 700,
      ease: 'outElastic(1,1)'
    })

    animate(sectionRef.current.querySelectorAll('.pro-bg'), {
      opacity: [0, 1],
      scaleY: [0, 1],
      scaleX: [1.5, 1],
      delay: stagger(100, {start: 1600}),
      duration: 600,
      ease: 'outElastic(1,1)'
    })

    // Deco 1 //
    animate(sectionRef.current.querySelectorAll('.deco1'), {
      opacity: [0, 1],
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 2600,
      duration: 700,
      ease: 'outElastic(1,1)'
    })

    animate(sectionRef.current.querySelectorAll('.deco1'), {
      rotate: '1turn',
      duration: 5000,
      loop: true,
      ease: 'linear'
    })
    // Deco 1 //
    // Deco 2 //
    animate(sectionRef.current.querySelectorAll('.deco2'), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [2, 1],
      delay: 2700,
      duration: 900,
      ease: 'outElastic(1,1)',

      onComplete: () => {
        animate(sectionRef.current.querySelectorAll('.deco2'), {
          keyframes: [
            { scaleX: 2.3, duration: 800 },
            { scaleX: 1, duration: 800 },
            { scaleY: 1.5, duration: 800 },
            { scaleY: 1, duration: 800 }
          ],
          delay: stagger(500),
          loop: true,
          ease: 'outElastic(1,1)'
        })
      }
    })
    // Deco 2 //
    // Product //

  }, [isInView])


  return (
    <div className="product" ref={sectionRef}>
      <section id="produk" className="pt-36 pb-60">
        <div className="container mx-auto">
          <div className="w-full px-4 relative">
            <div className="mx-auto mb-15 lg:mb-30 select-none">
              <div className="flex gap-3 items-center justify-center mb-3">
                <div className="s-t-deco lg:opacity-0 w-5 h-0.5 bg-side rounded-lg"></div>
                <h3 className="s-title lg:opacity-0 font-light text-side text-sm lg:text-lg uppercase">
                  Products
                </h3>
                <div className="s-t-deco lg:opacity-0 w-5 h-0.5 bg-side rounded-lg"></div>
              </div>

              <div className="flex gap-7 items-center justify-center">
                <div className="hidden md:block">
                  <div className="s-t-m-deco lg:opacity-0 deco-p1 flex gap-2">
                    <div className=" w-2.5 h-1 bg-side rounded-lg"></div>
                    <div className=" w-5 h-1 bg-side rounded-lg"></div>
                    <div className=" w-10 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>

                <h2 className="s-t-main lg:opacity-0 max-w-lg font-extrabold text-quaternary text-3xl lg:text-5xl">
                  Produk dari Rejonik
                </h2>

                <div className="hidden md:block">
                  <div className="s-t-m-deco lg:opacity-0 deco-p2 flex gap-2">
                    <div className=" w-10 h-1 bg-side rounded-lg"></div>
                    <div className=" w-5 h-1 bg-side rounded-lg"></div>
                    <div className=" w-2.5 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 justify-center mx-auto">
              <div
                className='deco2 lg:opacity-0 w-50 h-60 bg-tertiary/70 rounded-sm left-1/9 top-1/7 absolute z-5 hidden xl:block'
              ></div>

              <div
                className='deco1 lg:opacity-0 w-60 h-60 bg-primary/70 rounded-sm right-1/8 top-1/6 absolute z-5 hidden xl:block'
              ></div>

              <div id="pro1" className={`procard lg:opacity-0 ${proCard}`}>
                <img
                  src="/product/beras.jpg"
                  alt="Beras Original"
                  className="w-full h-60 lg:w-56 lg:h-56 xl:w-70 xl:h-70 object-cover rounded-lg outline-accentThrd outline-2 mb-5 select-none"
                />

                <h3 className="font-extrabold text-xl text-side text-shadow-lg">
                  Beras Original
                </h3>
                <p className="font-medium text-xs text-accentThrd mb-1">1 kg</p>

                <div className="flex justify-between">
                  <p className="font-bold text-accentThrd text-xl">Rp 35.250</p>

                  <motion.a
                    initial='rest'
                    whileHover='hover'
                    whileTap='tap'
                    animate='rest'
                    href="#"
                    className="group"
                  >
                    <motion.button
                      variants={{
                        rest: {scale: 1},
                        hover: {scale:1.1}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      className="font-medium text-accentThrd bg-white ring-accentThrd ring-2 rounded-full group-hover:text-white group-active:text-side group-active:ring-side px-4 p-1 relative overflow-hidden cursor-pointer select-none"
                    >
                      <span className="relative z-1">Pesan</span>

                      <motion.div
                        variants={{
                          rest: {scale: 0},
                          hover: {scale: 2.7},
                          tap: {scale: 0}
                        }}
                        transition={{
                          duration: 0.1,
                          ease: 'easeInOut'
                        }}
                        className="w-8 h-8 bg-accentThrd rounded-full absolute -translate-y-7 translate-x-2"
                      />
                    </motion.button>
                  </motion.a>
                </div>
              </div>

              <div id="pro2" className={`procard lg:opacity-0 ${proCard}`}>
                <img
                  src="/product/beras-aromatik.jpg"
                  alt="Beras Aromatik"
                  className="w-full h-60 lg:w-56 lg:h-56 xl:w-70 xl:h-70 object-cover rounded-lg outline-accentThrd outline-2 mb-5 select-none"
                />

                <h3 className="font-extrabold text-xl text-fuchsia-400 text-shadow-lg">
                  Beras Aromatik
                </h3>
                <p className="font-medium text-xs text-accentThrd mb-1">1 kg</p>

                <div className="flex justify-between">
                  <p className="font-bold text-accentThrd text-xl">Rp 35.250</p>

                  <motion.a
                    initial='rest'
                    whileHover='hover'
                    whileTap='tap'
                    animate='rest'
                    href="#"
                    className="group"
                  >
                    <motion.button
                      variants={{
                        rest: {scale: 1},
                        hover: {scale:1.1}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      className="font-medium text-accentThrd bg-white ring-accentThrd ring-2 rounded-full group-hover:text-white group-active:text-side group-active:ring-side px-4 p-1 relative overflow-hidden cursor-pointer select-none"
                    >
                      <span className="relative z-1">Pesan</span>

                      <motion.div
                        variants={{
                          rest: {scale: 0},
                          hover: {scale: 2.7},
                          tap: {scale: 0}
                        }}
                        transition={{
                          duration: 0.1,
                          ease: 'easeInOut'
                        }}
                        className="w-8 h-8 bg-accentThrd rounded-full absolute -translate-y-7 translate-x-2"
                      />
                    </motion.button>
                  </motion.a>
                </div>
              </div>

              <div id="pro3" className={`procard lg:opacity-0 ${proCard}`}>
                <img
                  src="/product/beras-merah.jpg"
                  alt="Beras Merah"
                  className="w-full h-60 lg:w-56 lg:h-56 xl:w-70 xl:h-70 object-cover rounded-lg outline-accentThrd outline-2 mb-5 select-none"
                />

                <h3 className="font-extrabold text-xl text-[#691500] text-shadow-lg">
                  Beras Merah
                </h3>
                <p className="font-medium text-xs text-accentThrd mb-1">1 kg</p>

                <div className="flex justify-between">
                  <p className="font-bold text-accentThrd text-xl">Rp 35.250</p>

                  <motion.a
                    initial='rest'
                    whileHover='hover'
                    whileTap='tap'
                    animate='rest'
                    href="#"
                    className="group"
                  >
                    <motion.button
                      variants={{
                        rest: {scale: 1},
                        hover: {scale:1.1}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      className="font-medium text-accentThrd bg-white ring-accentThrd ring-2 rounded-full group-hover:text-white group-active:text-side group-active:ring-side px-4 p-1 relative overflow-hidden cursor-pointer select-none"
                    >
                      <span className="relative z-1">Pesan</span>

                      <motion.div
                        variants={{
                          rest: {scale: 0},
                          hover: {scale: 2.7},
                          tap: {scale: 0}
                        }}
                        transition={{
                          duration: 0.1,
                          ease: 'easeInOut'
                        }}
                        className="w-8 h-8 bg-accentThrd rounded-full absolute -translate-y-7 translate-x-2"
                      />
                    </motion.button>
                  </motion.a>
                </div>
              </div>

              <div
                className='deco2 lg:opacity-0 w-50 h-50 bg-tertiary/70 rounded-sm right-1/7 -bottom-1/4 absolute z-5 hidden xl:block'
              ></div>

              <div
                className='deco1 lg:opacity-0 w-55 h-55 bg-primary/70 rounded-sm left-1/7 -bottom-1/3 absolute z-5 -translate-y-15 hidden xl:block'
              ></div>

              <div
                className='pro-bg lg:opacity-0 w-150 h-80 scale-80 xl:scale-100 bg-linear-to-tr from-primary/70 to-side/70 rounded-sm absolute right-1/2 top-1/5 translate-x-20 hidden lg:block'
              ></div>
              <div
                className='pro-bg lg:opacity-0 w-150 h-80 scale-80 xl:scale-100 bg-linear-to-tr from-side/70 to-primary/70 rounded-sm absolute left-1/2 top-2/3 -translate-x-20 hidden lg:block'
              ></div>
              <div
                className='pro-bg lg:opacity-0 w-80 h-80 scale-80 xl:scale-100 bg-accentThrd/70 rounded-sm absolute right-1/7 -translate-y-10 hidden lg:block'
              ></div>
              <div
                className='pro-bg lg:opacity-0 w-80 h-80 scale-80 xl:scale-100 bg-accentThrd/70 rounded-sm absolute left-1/5 bottom-0 translate-y-20 hidden lg:block'
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Product //

// Advantages //
function Advantages() {
  const advanCard =
    "w-full max-w-sm h-50 bg-tertiary rounded-sm border-2 shadow-lg relative overflow-hidden";

    const sectionRef = useRef(null)

    const isInView = useInView(sectionRef, {once: true, amount: 0.8})

    useEffect(() => {
      if(!sectionRef.current) return
      if(!isInView || window.innerWidth < 1024) return

      // Title //
      animate(sectionRef.current.querySelector('.s-title'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        delay: 300,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelectorAll('.s-t-deco'), {
        opacity: [0, 1],
        scaleY: [0, 1],
        scaleX: [2, 1],
        delay: 600,
        duration: 700,
        ease: 'outElastic(1.19,0.66)'
      })

      animate(sectionRef.current.querySelector('.s-t-main'), {
        opacity: [0, 1],
        scaleX: [0 ,1],
        scaleY: [1.2, 1],
        delay: 800,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelectorAll('.s-t-m-deco'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        delay: 1200,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelector('.deco-p1'), {
        x: [-100, 0],
        delay: 1500,
        duration: 600,
        ease: 'outBounce'
      })
      animate(sectionRef.current.querySelector('.deco-p2'), {
        x: [100, 0],
        delay: 1500,
        duration: 600,
        ease: 'outBounce'
      })
      // Title //

      // Advantages //
      animate(sectionRef.current.querySelectorAll('.advan-anim'), {
        opacity: [0, 1],
        scale: [0, 1],
        delay: stagger(200, {start: 1800}),
        duration: 1000,
        ease: 'outElastic(1,0.55)'
      })
      // Advantages //

      // Deco //
      animate(sectionRef.current.querySelectorAll('.deco'), {
        opacity: [0, 1],
        scale: [0, 1],
        delay: 3000,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      // Deco A1 //
      animate(sectionRef.current.querySelector('.deco-a1a'), {
        scaleX: [0, 1],
        x: [0, -100],
        opacity: [0, 1],
        delay: 3000,
        duration: 600,

        onComplete: () => {
          animate(sectionRef.current.querySelector('.deco-a1a'), {
            x: [-100, 0],
            duration: 400,
            ease: 'outBounce'
          })
        }
      })
      animate(sectionRef.current.querySelector('.deco-a1b'), {
        scaleX: [0, 1],
        x: [0, 100],
        opacity: [0, 1],
        delay: 3000,
        duration: 600,

        onComplete: () => {
          animate(sectionRef.current.querySelector('.deco-a1b'), {
            x: [100, 0],
            duration: 400,
            ease: 'outBounce'
          })
        }
      })
      // Deco A1 //

      // Deco A2 //
      animate(sectionRef.current.querySelector('.deco-a2a'), {
        scaleX: [0, 1],
        x: [0, -200],
        opacity: [0, 1],
        delay: 3500,
        duration: 600,

        onComplete: () => {
          animate(sectionRef.current.querySelector('.deco-a2a'), {
            x: [-200, 0],
            duration: 400,
            ease: 'outBounce'
          })
        }
      })
      animate(sectionRef.current.querySelector('.deco-a2b'), {
        scaleX: [0, 1],
        x: [0, 200],
        opacity: [0, 1],
        delay: 3500,
        duration: 600,

        onComplete: () => {
          animate(sectionRef.current.querySelector('.deco-a2b'), {
            x: [200, 0],
            duration: 400,
            ease: 'outBounce'
          })
        }
      })
      // Deco A2 //

      // Deco A3 //
      animate(sectionRef.current.querySelector('.deco-a3a'), {
        scaleX: [0, 1],
        x: [0, -300],
        opacity: [0, 1],
        delay: 4000,
        duration: 600,

        onComplete: () => {
          animate(sectionRef.current.querySelector('.deco-a3a'), {
            x: [-300, 0],
            duration: 400,
            ease: 'outBounce'
          })
        }
      })
      animate(sectionRef.current.querySelector('.deco-a3b'), {
        scaleX: [0, 1],
        x: [0, 300],
        opacity: [0, 1],
        delay: 4000,
        duration: 600,

        onComplete: () => {
          animate(sectionRef.current.querySelector('.deco-a3b'), {
            x: [300, 0],
            duration: 400,
            ease: 'outBounce'
          })
        }
      })
      // Deco A3 //
      // Deco //
    })

  return (
    <div className="advantages" ref={sectionRef}>
      <section id="keunggulan" className="pt-36 pb-20 bg-side/40 relative">
        <div className="container mx-auto mb-20">
          <div className="w-full px-10">
            <div className="mx-auto mb-30 select-none">
              <div className="flex gap-3 items-center justify-center mb-3">
                <div className="s-t-deco lg:opacity-0 w-5 h-0.5 bg-side rounded-lg"></div>
                <h3 className="s-title lg:opacity-0 font-light text-side text-sm lg:text-lg uppercase">
                  Advantages
                </h3>
                <div className="s-t-deco lg:opacity-0 w-5 h-0.5 bg-side rounded-lg"></div>
              </div>

              <div className="flex gap-7 items-center justify-center">
                <div className="hidden md:block">
                  <div className="s-t-m-deco lg:opacity-0 deco-p1 flex gap-2">
                    <div className="w-2.5 h-1 bg-side rounded-lg"></div>
                    <div className="w-5 h-1 bg-side rounded-lg"></div>
                    <div className="w-10 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>

                <h2 className="s-t-main lg:opacity-0 max-w-lg font-extrabold text-quaternary text-3xl lg:text-5xl">
                  Keunggulan Rejonik
                </h2>

                <div className="hidden md:block">
                  <div className="s-t-m-deco lg:opacity-0 deco-p2 flex gap-2">
                    <div className="w-10 h-1 bg-side rounded-lg"></div>
                    <div className="w-5 h-1 bg-side rounded-lg"></div>
                    <div className="w-2.5 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center select-none">
              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='advan-anim lg:opacity-0 relative group'
              >
                <motion.div
                  variants={{
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0, scaleX: 0, scaleY: 1.5},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36, scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0, scaleX: 0, scaleY: 1.5},
                      hover: {opacity: 1, scaleX: 1, scaleY: 1}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 150,
                      damping: 15
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: 0, borderColor: 'rgba(74, 171, 0)'},
                    hover: {x: 15, y: -15, borderColor: 'rgba(77, 46, 0)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: {scale: 2.3},
                      hover: {scale: 0}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 100,
                      damping: 15
                    }}
                    className="w-49 h-49 bg-side rounded-full hidden lg:flex items-center justify-center absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="w-full h-full p-5">
                    <div className="flex items-center gap-5 mb-5">
                      <div className="w-15 h-15 bg-side rounded-full flex justify-center items-center">
                        <img
                          src="/img/hinabobok2.png"
                          alt="Organik"
                          width="40"
                        />
                      </div>

                      <h3 className="font-extrabold text-accentThrd">
                        Hina Bobok
                      </h3>
                    </div>

                    <div>
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)', scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 10
                  }}
                  className="w-40 h-10 rounded-sm absolute z-2 hidden lg:block"
                />

                <div className="w-full max-w-sm h-50 bg-primary rounded-sm absolute -z-1 -translate-y-50"></div>
              </motion.div>

              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='advan-anim lg:opacity-0 relative group'
              >
                <motion.div
                  variants={{
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0, scaleX: 0, scaleY: 1.5},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36, scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0, scaleX: 0, scaleY: 1.5},
                      hover: {opacity: 1, scaleX: 1, scaleY: 1}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 150,
                      damping: 15
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: 0, borderColor: 'rgba(74, 171, 0)'},
                    hover: {x: 15, y: -15, borderColor: 'rgba(77, 46, 0)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: {scale: 2.3},
                      hover: {scale: 0}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 100,
                      damping: 15
                    }}
                    className="w-49 h-49 bg-side rounded-full hidden lg:flex items-center justify-center absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="w-full h-full p-5">
                    <div className="flex items-center gap-5 mb-5">
                      <div className="w-15 h-15 bg-side rounded-full flex justify-center items-center">
                        <img
                          src="/img/hinabobok2.png"
                          alt="Organik"
                          width="40"
                        />
                      </div>

                      <h3 className="font-extrabold text-accentThrd">
                        Hina Bobok
                      </h3>
                    </div>

                    <div>
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)', scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 10
                  }}
                  className="w-40 h-10 rounded-sm absolute z-2 hidden lg:block"
                />

                <div className="w-full max-w-sm h-50 bg-primary rounded-sm absolute -z-1 -translate-y-50"></div>
              </motion.div>

              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='advan-anim lg:opacity-0 relative group'
              >
                <motion.div
                  variants={{
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0, scaleX: 0, scaleY: 1.5},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36, scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0, scaleX: 0, scaleY: 1.5},
                      hover: {opacity: 1, scaleX: 1, scaleY: 1}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 150,
                      damping: 15
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: 0, borderColor: 'rgba(74, 171, 0)'},
                    hover: {x: 15, y: -15, borderColor: 'rgba(77, 46, 0)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: {scale: 2.3},
                      hover: {scale: 0}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 100,
                      damping: 15
                    }}
                    className="w-49 h-49 bg-side rounded-full hidden lg:flex items-center justify-center absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="w-full h-full p-5">
                    <div className="flex items-center gap-5 mb-5">
                      <div className="w-15 h-15 bg-side rounded-full flex justify-center items-center">
                        <img
                          src="/img/hinabobok2.png"
                          alt="Organik"
                          width="40"
                        />
                      </div>

                      <h3 className="font-extrabold text-accentThrd">
                        Hina Bobok
                      </h3>
                    </div>

                    <div>
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)', scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 10
                  }}
                  className="w-40 h-10 rounded-sm absolute z-2 hidden lg:block"
                />

                <div className="w-full max-w-sm h-50 bg-primary rounded-sm absolute -z-1 -translate-y-50"></div>
              </motion.div>

              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='advan-anim lg:opacity-0 relative group'
              >
                <motion.div
                  variants={{
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0, scaleX: 0, scaleY: 1.5},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36, scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0, scaleX: 0, scaleY: 1.5},
                      hover: {opacity: 1, scaleX: 1, scaleY: 1}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 150,
                      damping: 15
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: 0, borderColor: 'rgba(74, 171, 0)'},
                    hover: {x: 15, y: -15, borderColor: 'rgba(77, 46, 0)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: {scale: 2.3},
                      hover: {scale: 0}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 100,
                      damping: 15
                    }}
                    className="w-49 h-49 bg-side rounded-full hidden lg:flex items-center justify-center absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="w-full h-full p-5">
                    <div className="flex items-center gap-5 mb-5">
                      <div className="w-15 h-15 bg-side rounded-full flex justify-center items-center">
                        <img
                          src="/img/hinabobok2.png"
                          alt="Organik"
                          width="40"
                        />
                      </div>

                      <h3 className="font-extrabold text-accentThrd">
                        Hina Bobok
                      </h3>
                    </div>

                    <div>
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)', scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 10
                  }}
                  className="w-40 h-10 rounded-sm absolute z-2 hidden lg:block"
                />

                <div className="w-full max-w-sm h-50 bg-primary rounded-sm absolute -z-1 -translate-y-50"></div>
              </motion.div>

              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='advan-anim lg:opacity-0 relative group'
              >
                <motion.div
                  variants={{
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0, scaleX: 0, scaleY: 1.5},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36, scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0, scaleX: 0, scaleY: 1.5},
                      hover: {opacity: 1, scaleX: 1, scaleY: 1}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 150,
                      damping: 15
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: 0, borderColor: 'rgba(74, 171, 0)'},
                    hover: {x: 15, y: -15, borderColor: 'rgba(77, 46, 0)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: {scale: 2.3},
                      hover: {scale: 0}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 100,
                      damping: 15
                    }}
                    className="w-49 h-49 bg-side rounded-full hidden lg:flex items-center justify-center absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="w-full h-full p-5">
                    <div className="flex items-center gap-5 mb-5">
                      <div className="w-15 h-15 bg-side rounded-full flex justify-center items-center">
                        <img
                          src="/img/hinabobok2.png"
                          alt="Organik"
                          width="40"
                        />
                      </div>

                      <h3 className="font-extrabold text-accentThrd">
                        Hina Bobok
                      </h3>
                    </div>

                    <div>
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)', scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 10
                  }}
                  className="w-40 h-10 rounded-sm absolute z-2 hidden lg:block"
                />

                <div className="w-full max-w-sm h-50 bg-primary rounded-sm absolute -z-1 -translate-y-50"></div>
              </motion.div>

              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='advan-anim lg:opacity-0 relative group'
              >
                <motion.div
                  variants={{
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0, scaleX: 0, scaleY: 1.5},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36, scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0, scaleX: 0, scaleY: 1.5},
                      hover: {opacity: 1, scaleX: 1, scaleY: 1}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 150,
                      damping: 15
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: 0, borderColor: 'rgba(74, 171, 0)'},
                    hover: {x: 15, y: -15, borderColor: 'rgba(77, 46, 0)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: {scale: 2.3},
                      hover: {scale: 0}
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 100,
                      damping: 15
                    }}
                    className="w-49 h-49 bg-side rounded-full hidden lg:flex items-center justify-center absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="w-full h-full p-5">
                    <div className="flex items-center gap-5 mb-5">
                      <div className="w-15 h-15 bg-side rounded-full flex justify-center items-center">
                        <img
                          src="/img/hinabobok2.png"
                          alt="Organik"
                          width="40"
                        />
                      </div>

                      <h3 className="font-extrabold text-accentThrd">
                        Hina Bobok
                      </h3>
                    </div>

                    <div>
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)', scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 10
                  }}
                  className="w-40 h-10 rounded-sm absolute z-2 hidden lg:block"
                />

                <div className="w-full max-w-sm h-50 bg-primary rounded-sm absolute -z-1 -translate-y-50"></div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex gap-3 items-center justify-center">
          <div className="deco-a3a lg:opacity-0 hidden lg:block w-3 h-3 bg-side rounded-full" />
          <div className="deco-a2a lg:opacity-0 hidden lg:block w-20 h-2 bg-side rounded-full" />
          <div className="deco-a1a lg:opacity-0 hidden lg:block w-30 h-2 bg-side rounded-full" />
          <div className="deco lg:opacity-0 hidden lg:block w-6 h-6 bg-side rounded-full" />
          <div className="deco-a1b lg:opacity-0 hidden lg:block w-30 h-2 bg-side rounded-full" />
          <div className="deco-a2b lg:opacity-0 hidden lg:block w-20 h-2 bg-side rounded-full" />
          <div className="deco-a3b lg:opacity-0 hidden lg:block w-3 h-3 bg-side rounded-full" />
        </div>
      </section>
    </div>
  );
}
// Advantages //

// About //
function About() {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {once: true, amount: 0.8})

  useEffect(() => {
    if(!sectionRef.current) return
    if(!isInView || window.innerWidth < 1024) return

      // Title //
      animate(sectionRef.current.querySelector('.s-title'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        delay: 300,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelectorAll('.s-t-deco'), {
        opacity: [0, 1],
        scaleY: [0, 1],
        scaleX: [2, 1],
        delay: 600,
        duration: 700,
        ease: 'outElastic(1.19,0.66)'
      })

      animate(sectionRef.current.querySelector('.s-t-main'), {
        opacity: [0, 1],
        scaleX: [0 ,1],
        scaleY: [1.2, 1],
        delay: 800,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelectorAll('.s-t-m-deco'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        delay: 1200,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelector('.deco-p1'), {
        x: [-100, 0],
        delay: 1500,
        duration: 600,
        ease: 'outBounce'
      })
      animate(sectionRef.current.querySelector('.deco-p2'), {
        x: [100, 0],
        delay: 1500,
        duration: 600,
        ease: 'outBounce'
      })
      // Title //

      // History //
      // Title //
      animate(sectionRef.current.querySelector('.h-title'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        delay: 1600,
        duration: 600,
        ease: 'outElastic(1,0.46)',

        onComplete: () => {
          animate(sectionRef.current.querySelector('.h-deco'), {
            scaleX: [1, 0],
            duration: 800,
            ease: 'inElastic(1,0.36)',

            onComplete: () => {
              animate(sectionRef.current.querySelector('.h-t-deco'), {
                opacity: [0, 1],
                scaleX: [0, 1],
                delay: 200,
                duration: 700,
                ease: 'outElastic(1.12,0.46)',

                onComplete: () => {
                  animate(sectionRef.current.querySelectorAll('.h-t-deco2'), {
                    opacity: [0, 1],
                    scaleY: [2, 1],
                    scaleX: [0, 1],
                    duration: 600,
                    ease: 'outElastic(1,1)'
                  })
                }
              })
            }
          })
        }
      })
      // Title //

      // Content //
      animate(sectionRef.current.querySelector('.h-content'), {
        opacity: [0, 1],
        scaleY: [1.3, 1],
        scaleX: [0, 1],
        delay: 2800,
        duration: 700,
        ease: 'outElastic(1,1)',

        onComplete: () => {
          animate(sectionRef.current.querySelector('.h-p-box'), {
            x: [0, 7],
            y: [0, -7],
            duration: 700,
            ease: 'inOutElastic(1.81,0.93)'
          })
        }
      })

      animate(sectionRef.current.querySelector('.h-parag'), {
        y: [250, 0],
        delay: 4000,
        duration: 700,
        ease: 'outElastic(1,1)',

        onComplete: () => {
          animate(sectionRef.current.querySelectorAll('.h-c-deco1'), {
            opacity: [0, 1],
            scaleY: [1.5, 1],
            scaleX: [0, 1],
            delay: stagger(400),
            duration: 700,
            ease: 'outElastic(2,1.18)'
          })
          animate(sectionRef.current.querySelectorAll('.h-c-deco2'), {
            opacity: [0, 1],
            scaleY: [1.5, 1],
            scaleX: [0, 1],
            delay: stagger(400, {start: 700}),
            duration: 700,
            ease: 'outElastic(2,1.18)'
          })
        }
      })
      // Content //

      // Image //
      animate(sectionRef.current.querySelector('.swh-img'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        scaleY: [2, 1],
        delay: 3000,
        duration: 700,
        ease: 'outElastic(1,1)',
        
        onComplete: () => {
          animate(sectionRef.current.querySelectorAll('.h-image-deco1'), {
            opacity: [0, 1],
            scaleX: [2, 1],
            scaleY: [0, 1],
            duration: 700,
            ease: 'outElastic(1,1)',

            onComplete: () => {
              animate(sectionRef.current.querySelectorAll('.h-image-deco2'), {
                opacity: [0, 1],
                scaleX: [2, 1],
                scaleY: [0, 1],
                duration: 700,
                ease: 'outElastic(1,1)'
              })
            }
          })
          animate(sectionRef.current.querySelectorAll('.h-img-deco1'), {
            opacity: [0, 1],
            scaleX: [1.5, 1],
            scaleY: [0, 1],
            delay: stagger(300),
            duration: 700,
            ease: 'outElastic(2,1.78)'
          })
          animate(sectionRef.current.querySelectorAll('.h-img-deco2'), {
            opacity: [0, 1],
            scaleX: [0, 1],
            scaleY: [2, 1],
            delay: stagger(300, {start: 600}),
            duration: 700,
            ease: 'outElastic(2,1.78)'
          })
          animate(sectionRef.current.querySelectorAll('.h-img-deco3'), {
            opacity: [0, 1],
            scaleX: [1.5, 1],
            scaleY: [0, 1],
            delay: stagger(300, {start: 1200}),
            duration: 700,
            ease: 'outElastic(2,1.78)'
          })
        }
      })
      // Image //
      // History //
  })

  return (
    <div className="about" ref={sectionRef}>
      <section id="tentang" className="pt-36 pb-32">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-10 lg:mb-30 select-none">
              <div className="flex gap-3 items-center justify-center mb-3">
                <div className="s-t-deco lg:opacity-0 w-5 h-0.5 bg-side rounded-lg"></div>
                <h3 className="s-title lg:opacity-0 font-light text-side text-sm lg:text-lg uppercase">
                  About Us
                </h3>
                <div className="s-t-deco lg:opacity-0 w-5 h-0.5 bg-side rounded-lg"></div>
              </div>

              <div className="flex gap-7 items-center justify-center">
                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p1 lg:opacity-0 flex gap-2">
                    <div className="w-2.5 h-1 bg-side rounded-lg"></div>
                    <div className="w-5 h-1 bg-side rounded-lg"></div>
                    <div className="w-10 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>

                <h2 className="s-t-main lg:opacity-0 text-center max-w-lg lg:max-w-xl font-extrabold text-quaternary text-3xl lg:text-5xl">
                  Kelompok Tani Bahagia
                </h2>

                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p2 lg:opacity-0 flex gap-2">
                    <div className="w-10 h-1 bg-side rounded-lg"></div>
                    <div className="w-5 h-1 bg-side rounded-lg"></div>
                    <div className="w-2.5 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
              <div className="mx-auto">
                <div className="w-fit h-fit mx-auto relative lg:hidden">
                  <div className="overflow-hidden max-w-md rounded-sm mb-5 translate-x-2 -translate-y-2">
                    <img
                      src="/about/sawah.jpg" 
                      alt="Sawah"
                      className="object-center object-cover"
                    />
                  </div>

                  <div className="w-full h-full bg-primary rounded-sm absolute -z-1 top-0"/>
                </div>

                <div className="h-title lg:opacity-0 w-fit relative mb-5 lg:mb-10">

                  <div className="w-fit relative">
                    <div className="h-t-deco2 lg:opacity-0 hidden lg:block w-20 h-10 bg-primary/50 rounded-sm absolute -z-1 -top-1/5 -left-1/7"/>

                    <h2 className="font-extrabold text-accentThrd text-2xl lg:text-5xl uppercase">
                      Sejarah
                    </h2>

                    <div className="h-t-deco2 lg:opacity-0 hidden lg:block w-30 h-10 bg-primary/50 rounded-sm absolute -z-1 -bottom-1/5 -right-1/7"/>

                    <div className="h-t-deco lg:opacity-0 w-full h-1 bg-side rounded-full"/>
                  </div>

                  <div className="h-deco w-full h-13 top-0 bg-side rounded-sm absolute hidden lg:block"/>
                </div>

                <div className="h-content lg:opacity-0 max-w-lg lg:max-w-2xl relative h-fit">
                  <div className="h-c-deco1 lg:opacity-0 w-40 h-50 bg-side/50 rounded-sm absolute -z-1 -top-1/8 -left-1/7 hidden lg:block"/>
                  <div className="h-c-deco1 lg:opacity-0 w-40 h-50 bg-accentThrd/50 rounded-sm absolute -z-2 -bottom-1/8 -right-1/12 hidden lg:block"/>
                  <div className="h-c-deco2 lg:opacity-0 w-40 h-2 bg-side/50 rounded-sm absolute -z-1 -top-1/9 left-1/2 hidden lg:block"/>
                  <div className="h-c-deco2 lg:opacity-0 w-40 h-2 bg-primary/50 rounded-sm absolute -z-1 -bottom-1/9 right-1/2 hidden lg:block"/>

                  <div className="h-p-box bg-tertiary rounded-sm shadow-lg border-accentThrd border-2 p-3 overflow-hidden">
                    <p className="h-parag font-medium text-quaternary text-xs lg:text-sm text-justify select-none">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                      nemo incidunt qui reprehenderit atque quia accusantium animi
                      ipsam consequuntur voluptatem fuga dolorum hic quibusdam?
                      Omnis enim praesentium assumenda sit. Eaque cum voluptatum
                      consequatur nemo aliquam quibusdam tempora! Delectus eum,
                      nihil, ipsa explicabo suscipit exercitationem, fuga veniam
                      possimus natus magni vel voluptatum quis commodi ducimus.
                      Officia, deleniti amet. Ad temporibus iusto est pariatur
                      magnam nihil, quod, recusandae obcaecati optio laboriosam
                      veniam, consectetur dicta aspernatur ducimus eaque magni
                      praesentium et consequatur? Dolorum unde maxime eveniet
                      neque vel, itaque tempore eaque ab ex ipsam cupiditate natus
                      quam animi vero modi est at labore!
                    </p>
                  </div>

                  <div className="w-full h-full bg-primary rounded-sm absolute -z-2 top-0"/>
                </div>
              </div>

              <div className="mx-auto hidden lg:block">
                <div className="relative">
                  <div className="swh-img lg:opacity-0 w-full max-w-2xl bg-white rounded-sm overflow-hidden row-span-4 col-span-2 select-none relative">
                    <img
                      src="/about/sawah.jpg"
                      alt="Sawah"
                      className="w-full h-full object-cover object-center"
                    />

                    <div className="h-image-deco2 lg:opacity-0 w-80 h-2 bg-white/70 rounded-full absolute z-2 top-5 left-1/5"/>
                    <div className="h-image-deco2 lg:opacity-0 w-80 h-2 bg-white/70 rounded-full absolute z-2 bottom-5 right-1/5"/>
                    <div className="h-image-deco1 lg:opacity-0 w-10 h-10 bg-white/70 rounded-sm absolute z-2 top-5 right-5"/>
                    <div className="h-image-deco1 lg:opacity-0 w-10 h-10 bg-white/70 rounded-sm absolute z-2 bottom-5 left-5"/>
                  </div>

                  <div className="h-img-deco1 lg:opacity-0 w-80 h-60 bg-linear-to-tr from-primary/70 to-side/70 rounded-sm absolute -z-1 -top-1/7 -left-1/8"/>
                  <div className="h-img-deco1 lg:opacity-0 w-20 h-20 bg-side/70 rounded-sm absolute -z-1 -top-1/9 left-1/2"/>
                  <div className="h-img-deco2 lg:opacity-0 w-40 h-90 bg-primary/70 rounded-sm absolute -z-1 -top-1/7 -right-1/10"/>
                  <div className="h-img-deco2 lg:opacity-0 w-80 h-70 bg-tertiary/70 rounded-sm absolute -z-1 -bottom-1/7 left-1/8"/>
                  <div className="h-img-deco3 lg:opacity-0 w-80 h-90 bg-linear-to-tr from-side/70 to-primary/70 rounded-sm absolute -z-1 -bottom-1/9 left-1/2"/>
                  <div className="h-img-deco3 lg:opacity-0 w-20 h-20 bg-side/70 rounded-sm absolute -z-1 -bottom-1/9 -left-1/12"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// About //

// Sertificate //
function Sertificate() {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {once: true, amount: 0.8})

  useEffect(() => {
    if(!sectionRef.current) return
    if(!isInView || window.innerWidth < 1024) return

      // Title //
      animate(sectionRef.current.querySelector('.s-title'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        delay: 300,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelectorAll('.s-t-deco'), {
        opacity: [0, 1],
        scaleY: [0, 1],
        scaleX: [2, 1],
        delay: 600,
        duration: 700,
        ease: 'outElastic(1.19,0.66)'
      })

      animate(sectionRef.current.querySelector('.s-t-main'), {
        opacity: [0, 1],
        scaleX: [0 ,1],
        scaleY: [1.2, 1],
        delay: 800,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelectorAll('.s-t-m-deco'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        delay: 1200,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelector('.deco-p1'), {
        x: [-100, 0],
        delay: 1500,
        duration: 600,
        ease: 'outBounce'
      })
      animate(sectionRef.current.querySelector('.deco-p2'), {
        x: [100, 0],
        delay: 1500,
        duration: 600,
        ease: 'outBounce'
      })
      // Title //

      // Sertificate //
      animate(sectionRef.current.querySelectorAll('.s-content'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        scaleY: [2, 1],
        delay: stagger(200, {start: 1700}),
        duration: 1500,
        ease: 'inOutElastic(1.86,1.23)'
      })
      // Sertificate //
  })

  return (
    <div className="sertificate" ref={sectionRef}>
      <section id="sertifikat" className="pt-36 pb-50">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-30 select-none">
              <div className="flex gap-3 items-center justify-center mb-3">
                <div className="s-t-deco lg:opacity-0 w-5 h-0.5 bg-side rounded-lg"></div>
                <h3 className="s-title lg:opacity-0 font-light text-side text-sm lg:text-lg uppercase">
                  Sertificate
                </h3>
                <div className="s-t-deco lg:opacity-0 w-5 h-0.5 bg-side rounded-lg"></div>
              </div>

              <div className="flex gap-7 items-center justify-center">
                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p1 lg:opacity-0 flex gap-2">
                    <div className="w-2.5 h-1 bg-side rounded-lg"></div>
                    <div className="w-5 h-1 bg-side rounded-lg"></div>
                    <div className="w-10 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>

                <h2 className="s-t-main lg:opacity-0 text-center max-w-lg lg:max-w-xl font-extrabold text-quaternary text-3xl lg:text-5xl">
                  Sertifikasi Rejonik
                </h2>

                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p2 lg:opacity-0 flex gap-2">
                    <div className="w-10 h-1 bg-side rounded-lg"></div>
                    <div className="w-5 h-1 bg-side rounded-lg"></div>
                    <div className="w-2.5 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-15 justify-items-center">
            <motion.div
              initial='rest'
              whileHover='hover'
              animate='rest'
              className="s-content lg:opacity-0 relative w-fit"
            >
              <motion.div
                variants={{
                  rest: {x:0 ,y: 0, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                  hover: {x: 33 ,y: -33, backgroundColor: 'rgba(74, 171, 0, 0.7)', scaleX: 1, scaleY: 1}
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="w-25 h-25 rounded-sm select-none hidden lg:flex justify-center items-center absolute z-1 right-0"
              >
                <motion.img
                  variants={{
                    rest: {opacity: 0, scaleX: 0, scaleY: 1.5},
                    hover: {opacity: 1, scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  src="/sertificate/Logo SNI.svg" alt="SNI" width='50'
                />
              </motion.div>

              <motion.div
                variants={{
                  rest: {x: 0, y: 0, borderColor: 'rgba(74, 171, 0)'},
                  hover: {x: 10, y: -10, borderColor: 'rgba(77, 46, 0)'}
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="w-full max-w-sm h-55 bg-tertiary rounded-sm border-accentThrd border-2 shadow-lg relative overflow-hidden"
              >
                <motion.div
                  variants={{
                    rest: {scale: 2.4},
                    hover: {scale: 0}
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="hidden lg:flex justify-center items-center w-54 h-54 bg-side rounded-full absolute left-1/2 -translate-x-1/2"
                >
                  <img src="/sertificate/Logo SNI.svg" alt="SNI" width='30' />
                </motion.div>

                <div className="p-5 mx-auto flex flex-col gap-5">
                  <div className="flex gap-5 items-center select-none">
                    <div className="w-15 h-15 bg-side rounded-full flex justify-center items-center">
                      <img src="/sertificate/Logo SNI.svg" alt="SNI" width='30' />
                    </div>

                    <h3 className="font-bold text-accentThrd text-xl">SNI</h3>
                  </div>

                  <div className="">
                    <p className="font-medium text-quaternary text-sm lg:text-xs xl:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsam aspernatur ex alias sequi. Ab recusandae reiciendis eveniet. Repudiandae, laboriosam.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  rest: {x: 5, y: -5, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                  hover: {x: -16, y: 16, backgroundColor: 'rgba(74, 171, 0, 0.8)', scaleX: 1, scaleY: 1}
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="rounded-sm p-1 px-2 absolute z-1 bottom-0 hidden lg:block"
              >
                <motion.p
                  variants={{
                    rest: {opacity: 0},
                    hover: {opacity: 1}
                  }}
                  className="font-bold text-white text-3xl uppercase italic"
                >
                  Certified
                </motion.p>
              </motion.div>

              <div className="w-full h-full bg-primary rounded-sm absolute -z-1 top-0"/>
            </motion.div>

            <motion.div
              initial='rest'
              whileHover='hover'
              animate='rest'
              className="s-content lg:opacity-0 relative w-fit"
            >
              <motion.div
                variants={{
                  rest: {x:0 ,y: 0, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                  hover: {x: 33 ,y: -33, backgroundColor: 'rgba(74, 171, 0, 0.7)', scaleX: 1, scaleY: 1}
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="w-25 h-25 rounded-sm select-none hidden lg:flex justify-center items-center absolute z-1 right-0"
              >
                <motion.img
                  variants={{
                    rest: {opacity: 0, scaleX: 0, scaleY: 1.5},
                    hover: {opacity: 1, scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  src="/sertificate/Halal Indonesia Logo.png" alt="Halal" width='40'
                />
              </motion.div>

              <motion.div
                variants={{
                  rest: {x: 0, y: 0, borderColor: 'rgba(74, 171, 0)'},
                  hover: {x: 10, y: -10, borderColor: 'rgba(77, 46, 0)'}
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="w-full max-w-sm h-55 bg-tertiary rounded-sm border-accentThrd border-2 shadow-lg relative overflow-hidden"
              >
                <motion.div
                  variants={{
                    rest: {scale: 2.4},
                    hover: {scale: 0}
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="hidden lg:flex justify-center items-center w-54 h-54 bg-side rounded-full absolute left-1/2 -translate-x-1/2"
                >
                  <img src="/sertificate/Halal Indonesia Logo.png" alt="Halal" width='30' />
                </motion.div>

                <div className="p-5 mx-auto flex flex-col gap-5">
                  <div className="flex gap-5 items-center select-none">
                    <div className="w-15 h-15 bg-side rounded-full flex justify-center items-center">
                      <img src="/sertificate/Halal Indonesia Logo.png" alt="Halal" width='20' />
                    </div>

                    <h3 className="font-bold text-accentThrd text-xl">Halal</h3>
                  </div>

                  <div className="">
                    <p className="font-medium text-quaternary text-sm lg:text-xs xl:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsam aspernatur ex alias sequi. Ab recusandae reiciendis eveniet. Repudiandae, laboriosam.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  rest: {x: 5, y: -5, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                  hover: {x: -16, y: 16, backgroundColor: 'rgba(74, 171, 0, 0.8)', scaleX: 1, scaleY: 1}
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="rounded-sm p-1 px-2 absolute z-1 bottom-0 hidden lg:block"
              >
                <motion.p
                  variants={{
                    rest: {opacity: 0},
                    hover: {opacity: 1}
                  }}
                  className="font-bold text-white text-3xl uppercase italic"
                >
                  Certified
                </motion.p>
              </motion.div>

              <div className="w-full h-full bg-primary rounded-sm absolute -z-1 top-0"/>
            </motion.div>

            <motion.div
              initial='rest'
              whileHover='hover'
              animate='rest'
              className="s-content lg:opacity-0 relative w-fit"
            >
              <motion.div
                variants={{
                  rest: {x:0 ,y: 0, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                  hover: {x: 33 ,y: -33, backgroundColor: 'rgba(74, 171, 0, 0.7)', scaleX: 1, scaleY: 1}
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="w-25 h-25 rounded-sm select-none hidden lg:flex justify-center items-center absolute z-1 right-0"
              >
                <motion.img
                  variants={{
                    rest: {opacity: 0, scaleX: 0, scaleY: 1.5},
                    hover: {opacity: 1, scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  src="/sertificate/BPOM Logo.png" alt="BPOM" width='70'
                />
              </motion.div>

              <motion.div
                variants={{
                  rest: {x: 0, y: 0, borderColor: 'rgba(74, 171, 0)'},
                  hover: {x: 10, y: -10, borderColor: 'rgba(77, 46, 0)'}
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="w-full max-w-sm h-55 bg-tertiary rounded-sm border-accentThrd border-2 shadow-lg relative overflow-hidden"
              >
                <motion.div
                  variants={{
                    rest: {scale: 2.4},
                    hover: {scale: 0}
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="hidden lg:flex justify-center items-center w-54 h-54 bg-side rounded-full absolute left-1/2 -translate-x-1/2"
                >
                  <img src="/sertificate/BPOM Icon.png" alt="BPOM" width='40' />
                </motion.div>

                <div className="p-5 mx-auto flex flex-col gap-5">
                  <div className="flex gap-5 items-center select-none">
                    <div className="w-15 h-15 bg-side rounded-full flex justify-center items-center">
                      <img src="/sertificate/BPOM Icon.png" alt="BPOM" width='30' />
                    </div>

                    <h3 className="font-bold text-accentThrd text-xl">BPOM</h3>
                  </div>

                  <div className="">
                    <p className="font-medium text-quaternary text-sm lg:text-xs xl:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsam aspernatur ex alias sequi. Ab recusandae reiciendis eveniet. Repudiandae, laboriosam.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  rest: {x: 5, y: -5, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                  hover: {x: -16, y: 16, backgroundColor: 'rgba(74, 171, 0, 0.8)', scaleX: 1, scaleY: 1}
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="rounded-sm p-1 px-2 absolute z-1 bottom-0 hidden lg:block"
              >
                <motion.p
                  variants={{
                    rest: {opacity: 0},
                    hover: {opacity: 1}
                  }}
                  className="font-bold text-white text-3xl uppercase italic"
                >
                  Certified
                </motion.p>
              </motion.div>

              <div className="w-full h-full bg-primary rounded-sm absolute -z-1 top-0"/>
            </motion.div>

            <motion.div
              initial='rest'
              whileHover='hover'
              animate='rest'
              className="s-content lg:opacity-0 relative w-fit"
            >
              <motion.div
                variants={{
                  rest: {x:0 ,y: 0, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                  hover: {x: 33 ,y: -33, backgroundColor: 'rgba(74, 171, 0, 0.7)', scaleX: 1, scaleY: 1}
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="w-25 h-25 rounded-sm select-none hidden lg:flex justify-center items-center absolute z-1 right-0"
              >
                <motion.img
                  variants={{
                    rest: {opacity: 0, scaleX: 0, scaleY: 1.5},
                    hover: {opacity: 1, scaleX: 1, scaleY: 1}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  src="/sertificate/LeSOS.png" alt="LeSOS" width='70'
                />
              </motion.div>

              <motion.div
                variants={{
                  rest: {x: 0, y: 0, borderColor: 'rgba(74, 171, 0)'},
                  hover: {x: 10, y: -10, borderColor: 'rgba(77, 46, 0)'}
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="w-full max-w-sm h-55 bg-tertiary rounded-sm border-accentThrd border-2 shadow-lg relative overflow-hidden"
              >
                <motion.div
                  variants={{
                    rest: {scale: 2.4},
                    hover: {scale: 0}
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="hidden lg:flex justify-center items-center w-54 h-54 bg-side rounded-full absolute left-1/2 -translate-x-1/2"
                >
                  <img src="/sertificate/LeSOS.png" alt="LeSOS" width='50' />
                </motion.div>

                <div className="p-5 mx-auto flex flex-col gap-5">
                  <div className="flex gap-5 items-center select-none">
                    <div className="w-15 h-15 bg-side rounded-full flex justify-center items-center">
                      <img src="/sertificate/LeSOS.png" alt="LeSOS" width='40' />
                    </div>

                    <h3 className="font-bold text-accentThrd text-xl">LeSOS</h3>
                  </div>

                  <div className="">
                    <p className="font-medium text-quaternary text-sm lg:text-xs xl:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsam aspernatur ex alias sequi. Ab recusandae reiciendis eveniet. Repudiandae, laboriosam.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  rest: {x: 5, y: -5, backgroundColor: 'rgba(0, 0, 0, 0)', scaleX: 0, scaleY: 1.5},
                  hover: {x: -16, y: 16, backgroundColor: 'rgba(74, 171, 0, 0.8)', scaleX: 1, scaleY: 1}
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 150,
                  damping: 10
                }}
                className="rounded-sm p-1 px-2 absolute z-1 bottom-0 hidden lg:block"
              >
                <motion.p
                  variants={{
                    rest: {opacity: 0},
                    hover: {opacity: 1}
                  }}
                  className="font-bold text-white text-3xl uppercase italic"
                >
                  Certified
                </motion.p>
              </motion.div>

              <div className="w-full h-full bg-primary rounded-sm absolute -z-1 top-0"/>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
// Sertificate //

// Review //
function Review() {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {once: true, amount: 0.8})

  useEffect(() => {
    if(!sectionRef.current) return
    if(!isInView || window.innerWidth < 1024) return

      // Title //
      animate(sectionRef.current.querySelector('.s-title'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        delay: 300,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelectorAll('.s-t-deco'), {
        opacity: [0, 1],
        scaleY: [0, 1],
        scaleX: [2, 1],
        delay: 600,
        duration: 700,
        ease: 'outElastic(1.19,0.66)'
      })

      animate(sectionRef.current.querySelector('.s-t-main'), {
        opacity: [0, 1],
        scaleX: [0 ,1],
        scaleY: [1.2, 1],
        delay: 800,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelectorAll('.s-t-m-deco'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        delay: 1200,
        duration: 600,
        ease: 'outElastic(1,1)'
      })

      animate(sectionRef.current.querySelector('.deco-p1'), {
        x: [-100, 0],
        delay: 1500,
        duration: 600,
        ease: 'outBounce'
      })
      animate(sectionRef.current.querySelector('.deco-p2'), {
        x: [100, 0],
        delay: 1500,
        duration: 600,
        ease: 'outBounce'
      })
      // Title //

      // Reviews //
      animate(sectionRef.current.querySelectorAll('.r-content'), {
        opacity: [0, 1],
        scaleX: [0, 1],
        scaleY: [1.5, 1],
        delay: stagger(200, {start: 1800}),
        duration: 600,
        ease: 'outElastic(1.86,1.23)'
      })
      // Reviews //
  })

  return (
    <div className="review" ref={sectionRef}>
      <section id="review" className="pt-36 pb-50">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-30 select-none">
              <div className="flex gap-3 items-center justify-center mb-3">
                <div className="s-t-deco lg:opacity-0 w-5 h-0.5 bg-side rounded-lg"></div>
                <h3 className="s-title lg:opacity-0 font-light text-side text-sm lg:text-lg uppercase">
                  Reviews
                </h3>
                <div className="s-t-deco lg:opacity-0 w-5 h-0.5 bg-side rounded-lg"></div>
              </div>

              <div className="flex gap-7 items-center justify-center">
                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p1 lg:opacity-0 flex gap-2">
                    <div className="w-2.5 h-1 bg-side rounded-lg"></div>
                    <div className="w-5 h-1 bg-side rounded-lg"></div>
                    <div className="w-10 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>

                <h2 className="s-t-main lg:opacity-0 text-center max-w-xl lg:max-w-2xl font-extrabold text-quaternary text-3xl lg:text-5xl">
                  Ulasan Pelanggan Rejonik
                </h2>

                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p2 lg:opacity-0 flex gap-2">
                    <div className="w-10 h-1 bg-side rounded-lg"></div>
                    <div className="w-5 h-1 bg-side rounded-lg"></div>
                    <div className="w-2.5 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row flex-wrap gap-15 items-center justify-center">
              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className="r-content relative w-fit h-fit lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5, 
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0
                      }
                    },
                    hover: {
                      x: 34,
                      y: -34,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: 'rgba(74, 171, 0, 0.7)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95
                      }
                    }
                  }}
                  className="w-27 h-27 rounded-sm absolute z-1 right-0 hidden lg:block"
                />

                <motion.div
                  variants={{
                    rest: {
                      borderColor: 'rgba(74, 171, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0
                      }
                    },
                    hover: {
                      x: 10,
                      y: -10,
                      borderColor: 'rgba(77, 46, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.9
                      }
                    }
                  }}
                  className="w-full max-w-sm h-63 bg-tertiary rounded-sm border-2 relative overflow-hidden"
                >
                  <motion.div
                    variants={{
                      rest: {
                        scale: 2.4,
                        transition: {
                          duration: 0.1,
                          ease: 'easeOut',
                          type: 'spring',
                          stiffness: 150,
                          damping: 15,
                        }
                      },
                      hover: {
                        scale: 0,
                        transition: {
                          duration: 0.3,
                          ease: 'linear',
                          delay: 0.9
                        }
                      }
                    }}
                    className="w-62 h-62 bg-side rounded-full hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2"
                  >
                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: 50}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3
                      }}
                      width="15"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: 33}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0
                      }}
                      width="25"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {
                          scale: 1,
                          rotate: 0,
                          transition: {
                            duration: 0.3,
                            ease: 'easeIn',
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.1
                          }
                        },
                        hover: {
                          scale: 2,
                          rotate: 360,
                          transition: {
                            duration: 0.3,
                            ease: 'easeIn',
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.7
                          }
                        }
                      }}
                      width="40"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: -33}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0
                      }}
                      width="25"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: -50}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3
                      }}
                      width="15"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>
                  </motion.div>

                  <div className="p-5 mx-auto">
                    <div className="mb-2">
                      <div className="flex flex-row gap-5 items-center mb-3 select-none">
                        <div className="w-15 h-15 bg-side rounded-full overflow-hidden">
                          <img src="/review/bocchiencok.png" alt="customer" className="object-cover object-center" />
                        </div>

                        <h2 className="font-bold text-accentThrd text-lg">Bocchi Guy</h2>
                      </div>

                      <div className="flex flex-row gap-5 items-center">
                        <div className="flex flex-row gap-0">
                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>
                        </div>

                        <p className="font-medium text-accentThrd text-sm">
                          31/02/2045
                        </p>
                      </div>
                    </div>

                    <div className="max-w-sm select-none">
                      <p className="font-medium text-accentThrd text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque blanditiis porro omnis quaerat unde fugit laudantium, totam, quos placeat magnam veniam voluptatem optio et ipsum?
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {
                      x: 5,
                      y: -5,
                      scaleX: 0,
                      scaleY: 1.5, 
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0
                      }
                    },
                    hover: {
                      x: -15,
                      y: 15,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: 'rgba(74, 171, 0, 0.7)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95
                      }
                    }
                  }}
                  className="w-40 h-13 rounded-sm absolute z-1 bottom-0 hidden lg:block"
                />

                <div className="w-full h-full bg-primary rounded-sm absolute -z-1 top-0"/>
              </motion.div>

              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className="r-content relative w-fit h-fit lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5, 
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0
                      }
                    },
                    hover: {
                      x: 34,
                      y: -34,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: 'rgba(74, 171, 0, 0.7)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95
                      }
                    }
                  }}
                  className="w-27 h-27 rounded-sm absolute z-1 right-0 hidden lg:block"
                />

                <motion.div
                  variants={{
                    rest: {
                      borderColor: 'rgba(74, 171, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0
                      }
                    },
                    hover: {
                      x: 10,
                      y: -10,
                      borderColor: 'rgba(77, 46, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.9
                      }
                    }
                  }}
                  className="w-full max-w-sm h-63 bg-tertiary rounded-sm border-2 relative overflow-hidden"
                >
                  <motion.div
                    variants={{
                      rest: {
                        scale: 2.4,
                        transition: {
                          duration: 0.1,
                          ease: 'easeOut',
                          type: 'spring',
                          stiffness: 150,
                          damping: 15,
                        }
                      },
                      hover: {
                        scale: 0,
                        transition: {
                          duration: 0.3,
                          ease: 'linear',
                          delay: 0.9
                        }
                      }
                    }}
                    className="w-62 h-62 bg-side rounded-full hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2"
                  >
                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: 50}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3
                      }}
                      width="15"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: 33}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0
                      }}
                      width="25"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {
                          scale: 1,
                          rotate: 0,
                          transition: {
                            duration: 0.3,
                            ease: 'easeIn',
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.1
                          }
                        },
                        hover: {
                          scale: 2,
                          rotate: 360,
                          transition: {
                            duration: 0.3,
                            ease: 'easeIn',
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.7
                          }
                        }
                      }}
                      width="40"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: -33}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0
                      }}
                      width="25"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: -50}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3
                      }}
                      width="15"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>
                  </motion.div>

                  <div className="p-5 mx-auto">
                    <div className="mb-2">
                      <div className="flex flex-row gap-5 items-center mb-3 select-none">
                        <div className="w-15 h-15 bg-side rounded-full overflow-hidden">
                          <img src="/review/rio.png" alt="customer" className="object-cover object-center" />
                        </div>

                        <h2 className="font-bold text-accentThrd text-lg">Rio Guy</h2>
                      </div>

                      <div className="flex flex-row gap-5 items-center">
                        <div className="flex flex-row gap-0">
                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>
                        </div>

                        <p className="font-medium text-accentThrd text-sm">
                          31/02/2045
                        </p>
                      </div>
                    </div>

                    <div className="max-w-sm select-none">
                      <p className="font-medium text-accentThrd text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque blanditiis porro omnis quaerat unde fugit laudantium, totam, quos placeat magnam veniam voluptatem optio et ipsum?
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {
                      x: 5,
                      y: -5,
                      scaleX: 0,
                      scaleY: 1.5, 
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0
                      }
                    },
                    hover: {
                      x: -15,
                      y: 15,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: 'rgba(74, 171, 0, 0.7)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95
                      }
                    }
                  }}
                  className="w-40 h-13 rounded-sm absolute z-1 bottom-0 hidden lg:block"
                />

                <div className="w-full h-full bg-primary rounded-sm absolute -z-1 top-0"/>
              </motion.div>

              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className="r-content relative w-fit h-fit lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5, 
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0
                      }
                    },
                    hover: {
                      x: 34,
                      y: -34,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: 'rgba(74, 171, 0, 0.7)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95
                      }
                    }
                  }}
                  className="w-27 h-27 rounded-sm absolute z-1 right-0 hidden lg:block"
                />

                <motion.div
                  variants={{
                    rest: {
                      borderColor: 'rgba(74, 171, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0
                      }
                    },
                    hover: {
                      x: 10,
                      y: -10,
                      borderColor: 'rgba(77, 46, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.9
                      }
                    }
                  }}
                  className="w-full max-w-sm h-63 bg-tertiary rounded-sm border-2 relative overflow-hidden"
                >
                  <motion.div
                    variants={{
                      rest: {
                        scale: 2.4,
                        transition: {
                          duration: 0.1,
                          ease: 'easeOut',
                          type: 'spring',
                          stiffness: 150,
                          damping: 15,
                        }
                      },
                      hover: {
                        scale: 0,
                        transition: {
                          duration: 0.3,
                          ease: 'linear',
                          delay: 0.9
                        }
                      }
                    }}
                    className="w-62 h-62 bg-side rounded-full hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2"
                  >
                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: 50}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3
                      }}
                      width="15"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: 33}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0
                      }}
                      width="25"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {
                          scale: 1,
                          rotate: 0,
                          transition: {
                            duration: 0.3,
                            ease: 'easeIn',
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.1
                          }
                        },
                        hover: {
                          scale: 2,
                          rotate: 360,
                          transition: {
                            duration: 0.3,
                            ease: 'easeIn',
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.7
                          }
                        }
                      }}
                      width="40"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: -33}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0
                      }}
                      width="25"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>

                    <motion.svg
                      variants={{
                        rest: {x: 0},
                        hover: {x: -50}
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3
                      }}
                      width="15"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 5
                          L61.5 36.5
                          L95 38
                          L68.5 59.5
                          L77 92
                          L50 73
                          L23 92
                          L31.5 59.5
                          L5 38
                          L38.5 36.5
                          Z"
                        fill="#ffffff"
                      />
                    </motion.svg>
                  </motion.div>

                  <div className="p-5 mx-auto">
                    <div className="mb-2">
                      <div className="flex flex-row gap-5 items-center mb-3 select-none">
                        <div className="w-15 h-15 bg-side rounded-full overflow-hidden">
                          <img src="/review/bocchiencok.png" alt="customer" className="object-cover object-center" />
                        </div>

                        <h2 className="font-bold text-accentThrd text-lg">Bocchi Guy</h2>
                      </div>

                      <div className="flex flex-row gap-5 items-center">
                        <div className="flex flex-row gap-0">
                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>

                          <svg
                            width="20"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 5
                                L61.5 36.5
                                L95 38
                                L68.5 59.5
                                L77 92
                                L50 73
                                L23 92
                                L31.5 59.5
                                L5 38
                                L38.5 36.5
                                Z"
                              fill="#4AAB00"
                            />
                          </svg>
                        </div>

                        <p className="font-medium text-accentThrd text-sm">
                          31/02/2045
                        </p>
                      </div>
                    </div>

                    <div className="max-w-sm select-none">
                      <p className="font-medium text-accentThrd text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque blanditiis porro omnis quaerat unde fugit laudantium, totam, quos placeat magnam veniam voluptatem optio et ipsum?
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {
                      x: 5,
                      y: -5,
                      scaleX: 0,
                      scaleY: 1.5, 
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0
                      }
                    },
                    hover: {
                      x: -15,
                      y: 15,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: 'rgba(74, 171, 0, 0.7)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95
                      }
                    }
                  }}
                  className="w-40 h-13 rounded-sm absolute z-1 bottom-0 hidden lg:block"
                />

                <div className="w-full h-full bg-primary rounded-sm absolute -z-1 top-0"/>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
// Review //

// Order //
function Order() {

  return (
    <div className="order">
      <section id="pesan" className="pt-30 pb-30 bg-linear-to-r from-primary to-side">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="flex flex-col gap-10 items-center justify-center">
              <div className="text-center select-none">
                <h2 className="font-extrabold text-white text-3xl md:text-4xl lg:text-5xl mb-10">
                  Tertarik dengan
                  <span className="bg-linear-to-r from-accentScnd to-accent bg-clip-text text-transparent ml-2.5">
                    Rejonik
                  </span>
                  ?
                </h2>
                
                <div className="font-semibold text-xs md:text-sm lg:text-base text-white">
                  <p>
                    Anda dapat menikmati beras alami dan sehat
                  </p>
                  <p>
                    Segera pesan beras Rejonik untuk keluarga sehat anda
                  </p>
                </div>
              </div>

              <div className="text-center flex flex-col gap-5 select-none">
                <p className="font-bold text-white text-xl">
                  Pesan Sekarang Melalui :
                </p>

                <div className="flex flex-row gap-5">
                  <a href="#">
                    <motion.button
                      initial={{
                        scale: 1,
                        backgroundColor: '#4AAB00',
                        borderColor: '#ffffff',
                        color: '#ffffff'
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: '#FFE0A1',
                        borderColor: '#4D2E00',
                        color: '#4D2E00'
                      }}
                      className="font-bold rounded-full border-2 p-2 px-5"
                    >
                      Situs Resmi
                    </motion.button>
                  </a>

                  <a href="#">
                    <motion.button
                      initial={{
                        scale: 1,
                        backgroundColor: '#EE4D2D',
                        borderColor: '#ffffff',
                        color: '#ffffff'
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: '#ffffff',
                        borderColor: '#EE4D2D',
                        color: '#EE4D2D'
                      }}
                      className="font-bold rounded-full border-2 p-2 px-5 flex items-center gap-2 "
                    >
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 109.59 122.88"
                        width="25"
                        height="25"
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            fill="currentColor"
                            d="M74.98,91.98C76.15,82.36,69.96,76.22,53.6,71c-7.92-2.7-11.66-6.24-11.57-11.12 c0.33-5.4,5.36-9.34,12.04-9.47c4.63,0.09,9.77,1.22,14.76,4.56c0.59,0.37,1.01,0.32,1.35-0.2c0.46-0.74,1.61-2.53,2-3.17 c0.26-0.42,0.31-0.96-0.35-1.44c-0.95-0.7-3.6-2.13-5.03-2.72c-3.88-1.62-8.23-2.64-12.86-2.63c-9.77,0.04-17.47,6.22-18.12,14.47 c-0.42,5.95,2.53,10.79,8.86,14.47c1.34,0.78,8.6,3.67,11.49,4.57c9.08,2.83,13.8,7.9,12.69,13.81c-1.01,5.36-6.65,8.83-14.43,8.93 c-6.17-0.24-11.71-2.75-16.02-6.1c-0.11-0.08-0.65-0.5-0.72-0.56c-0.53-0.42-1.11-0.39-1.47,0.15c-0.26,0.4-1.92,2.8-2.34,3.43 c-0.39,0.55-0.18,0.86,0.23,1.2c1.8,1.5,4.18,3.14,5.81,3.97c4.47,2.28,9.32,3.53,14.48,3.72c3.32,0.22,7.5-0.49,10.63-1.81 C70.63,102.67,74.25,97.92,74.98,91.98L74.98,91.98z M54.79,7.18c-10.59,0-19.22,9.98-19.62,22.47h39.25 C74.01,17.16,65.38,7.18,54.79,7.18L54.79,7.18z M94.99,122.88l-0.41,0.01-80.82-0.01h0c-5.5-0.21-9.54-4.66-10.09-10.19l-0.05-1 l-3.61-79.5v0C0,32.12,0,32.06,0,32c0-1.28,1.03-2.33,2.3-2.35l0,0h25.48C28.41,13.15,40.26,0,54.79,0s26.39,13.15,27.01,29.65 h25.4h0.04c1.3,0,2.35,1.05,2.35,2.35c0,0.04,0,0.08,0,0.12v0l-3.96,79.81l-0.04,0.68C105.12,118.21,100.59,122.73,94.99,122.88 L94.99,122.88z"
                          />
                        </g>
                      </svg>


                      Shopee
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
// Order //