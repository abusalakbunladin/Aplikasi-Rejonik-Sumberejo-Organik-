import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
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
      <Footer />
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
      <section id="pesan" className="pt-20 pb-20 bg-linear-to-r from-primary to-side">
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
                      whileTap={{
                        scaleX: 0.9,
                        scaleY: 1.2
                      }}
                      transition={{
                        duration: 0.1,
                        type: 'spring',
                        stiffness: 150,
                        damping:15
                      }}
                      className="font-bold rounded-full border-2 p-2 px-5 cursor-pointer"
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
                      whileTap={{
                        scaleX: 0.9,
                        scaleY: 1.2
                      }}
                      transition={{
                        duration: 0.1,
                        type: 'spring',
                        stiffness: 150,
                        damping: 15
                      }}
                      className="font-bold rounded-full border-2 p-2 px-5 flex items-center gap-2 cursor-pointer"
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

// Footer //
function Footer() {

  return (
    <div className="footer">
      <footer id="footer" className="pt-30 pb-5 bg-[#1A3800]">
        <div className="w-full px-5 lg:px-20">
          <div className="flex flex-col mb-30">
            <div className="mb-10 select-none">
              <h2 className="font-extrabold text-white text-5xl mb-3">Sumberejo Organik</h2>

              <div className="w-full h-1 bg-linear-to-r from-white from-30% to-side to-40% rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-5">
              <div className="w-full">
                <div className="mb-5 select-none">
                  <h2 className="font-bold text-white text-2xl mb-1">Contact Us</h2>

                  <div className="w-full h-1 bg-linear-to-r from-white from-30% to-side to-40% rounded-full" />
                </div>

                <div className="flex flex-col gap-2 text-white">
                  <div className="flex items-center gap-1">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 92.25 122.88"
                      width="13" height="13"
                      class="inline-block select-none"
                    >
                      <title>pin-location</title>
                      <path
                        className="fill-white"
                        fill-rule="evenodd"
                        d="M49.1,122.34a2.75,2.75,0,0,1-3.12.1A109.7,109.7,0,0,1,19,98.35C9.15,86,3,72.33.83,59.16-1.33,45.79.69,32.94,7.34,22.49A45.14,45.14,0,0,1,17.39,11.35C26.77,3.87,37.49-.08,48.16,0c10.29.08,20.43,3.92,29.2,11.91a43,43,0,0,1,7.79,9.49c7.15,11.77,8.69,26.8,5.55,42a92.52,92.52,0,0,1-41.6,58.92Zm-3-98.58a23,23,0,1,1-22.94,23A23,23,0,0,1,46.13,23.76Z"
                      />
                    </svg>

                    <span className="text-xs select-none">:</span> 

                    <p className="text-xs">Krajan Mimbaan, Mimbaan, Kec. Panji, Kabupaten Situbondo, Jawa Timur 68323</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      width="13" height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>WhatsApp</title>
                      <path
                        className="fill-white"
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                      />
                    </svg>

                    <span className="text-xs select-none">:</span> 

                    <p className="text-xs">0895-3471-47286</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px" y="0px"
                      width="13" height="13"
                      viewBox="0 0 122.879 88.855"
                      enable-background="new 0 0 122.879 88.855"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          class="fill-white"
                          d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,44.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z"
                        />
                      </g>
                    </svg>

                    <span className="text-xs select-none">:</span> 

                    <p className="text-xs">sumberejoorganik@email.com</p>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="mb-5 select-none">
                  <h2 className="font-bold text-white text-2xl mb-1">Follow Us</h2>

                  <div className="w-full h-1 bg-linear-to-r from-white from-30% to-side to-40% rounded-full" />
                </div>

                <div className="flex flex-col gap-2 text-white">
                  <div className="flex items-center gap-4">
                    <motion.a
                      initial={{
                        scale: 1,
                        borderColor: '#ffffff',
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        color: '#ffffff'
                      }}
                      whileHover={{
                        scale: 1.2,
                        borderColor: '#4AAB00',
                        backgroundColor: 'rgba(255, 255, 255)',
                        color: '#4AAB00'
                      }}
                      whileTap={{
                        scale: 0.9
                      }}
                      transition={{
                        duration: 0.3,
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      href="#"
                      className="w-11 h-11 rounded-full ring-2 flex items-center justify-center"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="30" height="30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Facebook</title>
                        <path
                          fill="currentColor"
                          d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                        />
                      </svg>
                    </motion.a>

                    <motion.a
                      initial={{
                        scale: 1,
                        borderColor: '#ffffff',
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        color: '#ffffff'
                      }}
                      whileHover={{
                        scale: 1.2,
                        borderColor: '#4AAB00',
                        backgroundColor: 'rgba(255, 255, 255)',
                        color: '#4AAB00'
                      }}
                      whileTap={{
                        scale: 0.9
                      }}
                      transition={{
                        duration: 0.3,
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      href="#"
                      className="w-11 h-11 rounded-full ring-2 flex items-center justify-center"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="30" height="30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>TikTok</title>
                        <path
                          fill="currentColor"
                          d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                        />
                      </svg>
                    </motion.a>

                    <motion.a
                      initial={{
                        scale: 1,
                        borderColor: '#ffffff',
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        color: '#ffffff'
                      }}
                      whileHover={{
                        scale: 1.2,
                        borderColor: '#4AAB00',
                        backgroundColor: 'rgba(255, 255, 255)',
                        color: '#4AAB00'
                      }}
                      whileTap={{
                        scale: 0.9
                      }}
                      transition={{
                        duration: 0.3,
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      href="#"
                      className="w-11 h-11 rounded-full ring-2 flex items-center justify-center"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="30" height="30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <path
                          fill="currentColor"
                          d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="mb-5 select-none">
                  <h2 className="font-bold text-white text-2xl mb-1">Navigations</h2>

                  <div className="w-full h-1 bg-linear-to-r from-white from-30% to-side to-40% rounded-full" />
                </div>

                <div className="flex flex-col gap-2 text-white">
                  <ul>
                    <li>
                      <motion.a
                        initial={{
                          color: '#ffffff'
                        }}
                        whileHover={{
                          color: '#4AAB00'
                        }}
                        href="#home"
                      >
                        Beranda
                      </motion.a>
                    </li>
                    
                    <li>
                      <motion.a
                        initial={{
                          color: '#ffffff'
                        }}
                        whileHover={{
                          color: '#4AAB00'
                        }}
                        href="#home"
                      >
                        Produk
                      </motion.a>
                    </li>

                    <li>
                      <motion.a
                        initial={{
                          color: '#ffffff'
                        }}
                        whileHover={{
                          color: '#4AAB00'
                        }}
                        href="#home"
                      >
                        Keunggulan
                      </motion.a>
                    </li>

                    <li>
                      <motion.a
                        initial={{
                          color: '#ffffff'
                        }}
                        whileHover={{
                          color: '#4AAB00'
                        }}
                        href="#home"
                      >
                        Tentang Kami
                      </motion.a>
                    </li>

                    <li>
                      <motion.a
                        initial={{
                          color: '#ffffff'
                        }}
                        whileHover={{
                          color: '#4AAB00'
                        }}
                        href="#home"
                      >
                        Produksi
                      </motion.a>
                    </li>

                    <li>
                      <motion.a
                        initial={{
                          color: '#ffffff'
                        }}
                        whileHover={{
                          color: '#4AAB00'
                        }}
                        href="#home"
                      >
                        Sertifikat
                      </motion.a>
                    </li>

                    <li>
                      <motion.a
                        initial={{
                          color: '#ffffff'
                        }}
                        whileHover={{
                          color: '#4AAB00'
                        }}
                        href="#home"
                      >
                        Review
                      </motion.a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-10 select-none">
                <h2 className="font-bold text-white text-5xl mb-2">Services</h2>

                <div className="w-full h-1 bg-linear-to-r from-white from-30% to-side to-40% rounded-full" />
              </div>

              <div className="flex flex-row gap-10 justify-center">
                <a
                  href="#"
                >
                  <motion.button
                    initial={{
                        scale: 1,
                        backgroundColor: '#4AAB00',
                        borderColor: '#ffffff',
                        color: '#ffffff'
                      }}
                      whileHover={{
                        scale: 1.07,
                        backgroundColor: '#ffffff',
                        borderColor: '#4AAB00',
                        color: '#4AAB00'
                      }}
                      whileTap={{
                        opacity: 0.7,
                        scale: 0.9
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                      }}
                    className="font-semibold text-lg rounded-full ring-2 p-2 px-4 flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      width="35" height="35"
                    >
                      <defs>
                        <mask id="cut-front-bubble">
                          <rect x="0" y="0" width="500" height="500" fill="#ffffff" />
                          <path 
                            fill="#000000"
                            d="M 120 80 H 330 A 40 40 0 0 1 370 120 V 270 A 40 40 0 0 1 330 310 H 200 L 140 365 A 12 12 0 0 1 120 355 V 310 H 120 A 40 40 0 0 1 80 270 V 120 A 40 40 0 0 1 120 80 Z" 
                          />
                        </mask>
                      </defs>

                      <path 
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        mask="url(#cut-front-bubble)"
                        d="M 160 120 H 370 A 40 40 0 0 1 410 160 V 310 A 40 40 0 0 1 370 350 H 240 L 180 405 A 12 12 0 0 1 160 395 V 350 H 160 A 40 40 0 0 1 120 310 V 160 A 40 40 0 0 1 160 120 Z" 
                      />

                      <path 
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M 120 80 H 330 A 40 40 0 0 1 370 120 V 270 A 40 40 0 0 1 330 310 H 200 L 140 365 A 12 12 0 0 1 120 355 V 310 H 120 A 40 40 0 0 1 80 270 V 120 A 40 40 0 0 1 120 80 Z" 
                      />

                      <text 
                        x="225" 
                        y="232" 
                        fontFamily='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                        fontWeight="900"
                        fontSize="110px"
                        fill="currentColor"
                        textAnchor="middle"
                        letterSpacing="2px"
                      >FAQ</text>
                    </svg>

                    Frequently Asked Questions
                  </motion.button>
                </a>

                <a
                  href="#"
                >
                  <motion.button
                    initial={{
                        scale: 1,
                        backgroundColor: '#4AAB00',
                        borderColor: '#ffffff',
                        color: '#ffffff'
                      }}
                      whileHover={{
                        scale: 1.07,
                        backgroundColor: '#ffffff',
                        borderColor: '#4AAB00',
                        color: '#4AAB00'
                      }}
                      whileTap={{
                        opacity: 0.7,
                        scale: 0.9
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                      }}
                    className="font-semibold text-lg rounded-full ring-2 p-2 px-4 flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      width="35" height="35"
                    >
                      <circle 
                        cx="250" 
                        cy="250" 
                        r="190" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="36" 
                      />

                      <path 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="36" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M 195 185 C 195 135, 305 135, 305 185 C 305 235, 250 225, 250 280" 
                      />

                      <circle 
                        cx="250" 
                        cy="330" 
                        r="18" 
                        fill="currentColor" 
                      />
                    </svg>


                    Help Support
                  </motion.button>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-white/40 p-5 text-center">
            <p className="font-medium text-white">&copy; 2026 
              <a
                href="#"
                target="_blank"
                className="mx-1"
              >
                Sumberejo Organik
              </a>
              . All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
// Footer //