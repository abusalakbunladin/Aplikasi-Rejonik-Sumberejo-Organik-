import { useState, useEffect, useRef } from "react";
import { hover, motion, useInView } from "motion/react";
import { animate, stagger, set } from "animejs";


export default function App() {
  return (
    <div className="app">
      <Hero />
      <Product />
      <Advantages />
      <About />
    </div>
  );
}

function useScrollTrigger(elementId, offset = 500) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;

      const trigger = document.getElementById(elementId);

      if (trigger) {
        const rect = trigger.getBoundingClientRect();
        setIsScrolled(rect.top < window.innerHeight - offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
    };
  }, [elementId, offset]);

  return isScrolled;
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
      <section id="home" className="pt-90 pb-30 bg-green-900 relative overflow-hidden">
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

                    <div className="h-main-deco w-150 h-55 bg-linear-to-tr from-primary/30 to-side/30 rounded-sm absolute -z-1 top-0 -translate-y-14 -translate-x-30 xl:-translate-y-10 xl:-translate-x-10 scale-70 xl:scale-100 hidden lg:block"></div>

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
          src="/img/hinabobok2.png"
          alt="brand-product"
          className="absolute top-70 sm:top-30 md:top-70 lg:top-15 xl:top-0 right-0 xl:right-30 opacity-30 lg:scale-150 xl:scale-200 select-none"
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
                  Product
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center select-none">
              <motion.div
                initial='rest'
                whileHover='hover'
                animate='rest'
                className='advan-anim lg:opacity-0 relative group'
              >
                <motion.div
                  variants={{
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0},
                      hover: {opacity: 1}
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
                    <motion.div
                      variants={{
                        rest: {x: -190},
                        hover: {x: 0}
                      }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      className="flex items-center gap-5 mb-5"
                    >
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
                    </motion.div>

                    <motion.div
                      variants={{
                        rest: {y: 100},
                        hover: {y: 0}
                      }}
                      transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 12
                      }}
                    >
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)'},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
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
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0},
                      hover: {opacity: 1}
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
                    <motion.div
                      variants={{
                        rest: {x: -190},
                        hover: {x: 0}
                      }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      className="flex items-center gap-5 mb-5"
                    >
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
                    </motion.div>

                    <motion.div
                      variants={{
                        rest: {y: 100},
                        hover: {y: 0}
                      }}
                      transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 12
                      }}
                    >
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)'},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
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
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0},
                      hover: {opacity: 1}
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
                    <motion.div
                      variants={{
                        rest: {x: -190},
                        hover: {x: 0}
                      }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      className="flex items-center gap-5 mb-5"
                    >
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
                    </motion.div>

                    <motion.div
                      variants={{
                        rest: {y: 100},
                        hover: {y: 0}
                      }}
                      transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 12
                      }}
                    >
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)'},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
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
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0},
                      hover: {opacity: 1}
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
                    <motion.div
                      variants={{
                        rest: {x: -190},
                        hover: {x: 0}
                      }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      className="flex items-center gap-5 mb-5"
                    >
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
                    </motion.div>

                    <motion.div
                      variants={{
                        rest: {y: 100},
                        hover: {y: 0}
                      }}
                      transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 12
                      }}
                    >
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)'},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
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
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0},
                      hover: {opacity: 1}
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
                    <motion.div
                      variants={{
                        rest: {x: -190},
                        hover: {x: 0}
                      }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      className="flex items-center gap-5 mb-5"
                    >
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
                    </motion.div>

                    <motion.div
                      variants={{
                        rest: {y: 100},
                        hover: {y: 0}
                      }}
                      transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 12
                      }}
                    >
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)'},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
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
                    rest: {backgroundColor: 'rgba(0, 0, 0, 0)', x: 0, y: 0},
                    hover: {backgroundColor: 'rgba(74, 171, 0, 0.5)', x: 36, y: -36}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  className="w-30 h-30 rounded-sm right-0 hidden lg:flex items-center justify-center absolute z-2 lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: {opacity: 0},
                      hover: {opacity: 1}
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
                    <motion.div
                      variants={{
                        rest: {x: -190},
                        hover: {x: 0}
                      }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }}
                      className="flex items-center gap-5 mb-5"
                    >
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
                    </motion.div>

                    <motion.div
                      variants={{
                        rest: {y: 100},
                        hover: {y: 0}
                      }}
                      transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 12
                      }}
                    >
                      <p className="font-medium text-slate-500 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis vitae deserunt beatae soluta quo autem natus
                        odio ipsum ut expedita error labore corporis pariatur
                        vel nemo, ab necessitatibus iste modi.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    rest: {x: 0, y: -40, backgroundColor: 'rgba(0, 0, 0, 0)'},
                    hover: {x: -20, y: -28, backgroundColor: 'rgba(74, 171, 0, 0.5)'}
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
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
  const isScrolled = useScrollTrigger("tentang", 300);

  return (
    <div className="about">
      <section id="tentang" className="pt-36 pb-32">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-30 select-none">
              <div className="flex gap-3 items-center justify-center mb-3">
                <div className="w-5 h-0.5 bg-side rounded-lg"></div>
                <h3 className="font-light text-side text-sm lg:text-lg uppercase">
                  About Us
                </h3>
                <div className="w-5 h-0.5 bg-side rounded-lg"></div>
              </div>

              <div className="flex gap-7 items-center justify-center">
                <div className="hidden md:block">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-1 bg-side rounded-lg"></div>
                    <div className="w-5 h-1 bg-side rounded-lg"></div>
                    <div className="w-10 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>

                <h2 className="text-center max-w-lg lg:max-w-xl font-extrabold text-quaternary text-3xl lg:text-5xl">
                  Kelompok Tani Bahagia
                </h2>

                <div className="hidden md:block">
                  <div className="flex gap-2">
                    <div className="w-10 h-1 bg-side rounded-lg"></div>
                    <div className="w-5 h-1 bg-side rounded-lg"></div>
                    <div className="w-2.5 h-1 bg-side rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-5 items-center justify-center">
              <div className="mx-auto">
                <div>
                  <h2 className="font-extrabold text-accentThrd text-3xl uppercase">
                    Sejarah
                  </h2>
                </div>

                <div className="max-w-2xl">
                  <p className="font-medium text-slate-500 text-sm">
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
              </div>

              <div className="mx-auto">
                <div className="relative">
                  <div className="grid grid-cols-4 grid-rows-4 gap-4 h-90">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={isScrolled}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        ease: "easeOut",
                      }}
                      className="bg-white rounded-xl overflow-hidden row-span-4 col-span-2"
                    >
                      <img
                        src="/img/imagetest.jpeg"
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={isScrolled}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                      className="bg-white rounded-xl overflow-hidden row-span-2 col-span-2"
                    >
                      <img
                        src="/img/imagetest.jpeg"
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={isScrolled}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      className="bg-white rounded-xl overflow-hidden row-span-2"
                    >
                      <img
                        src="/img/imagetest.jpeg"
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={isScrolled}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      className="bg-white rounded-xl overflow-hidden row-span-2"
                    >
                      <img
                        src="/img/imagetest.jpeg"
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>
                  </div>

                  <div className="w-full h-90 bg-linear-to-tr from-primary to-side rounded-xl absolute -z-1 top-0 scale-105 -rotate-3"></div>
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
