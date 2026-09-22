import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { animate, stagger } from "animejs";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx"

export default function Home() {
  return (
    <div className="app">
      <Navbar />
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
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    if (window.innerWidth < 1024) return;

    // Title //
    animate(heroRef.current.querySelector(".h-t-deco"), {
      scaleY: [0, 1],
      delay: 1100,
      duration: 500,
      ease: "outBounce",
    });

    animate(heroRef.current.querySelectorAll(".hero-title"), {
      translateX: [-700, 0],
      scaleX: [0.2, 0.8, 1],
      delay: stagger(650),
      duration: 1200,
      ease: "outElastic(1,1)",
    });

    animate(heroRef.current.querySelector(".h-main-deco"), {
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 1000,
      duration: 650,
      ease: "outElastic(1,1)",
    });

    animate(heroRef.current.querySelectorAll(".h-t-deco2"), {
      scaleY: [0, 1],
      scaleX: [0, 1.2, 1],
      delay: 1300,
      duration: 700,
      ease: "outElastic(1.21,0.66)",
    });

    animate(heroRef.current.querySelector(".h-text"), {
      scaleY: [0, 1],
      delay: 1100,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(heroRef.current.querySelector(".order-btn"), {
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 1500,
      duration: 600,
      ease: "outElastic(1,1)",
    });
    // Title //

    // Achievment //
    animate(heroRef.current.querySelector(".acv-title"), {
      y: [-75, 0],
      scaleY: {
        from: 0,
        to: 1,
        delay: 1600,
      },
      scaleX: {
        from: 1.5,
        to: 1,
        delay: 1600,
      },
      delay: 1500,
      duration: 700,
      ease: "outElastic(1,1)",
    });

    animate(heroRef.current.querySelectorAll(".acv-deco"), {
      scaleY: [0, 1],
      delay: 1800,
      duration: 500,
      ease: "outBounce",
    });

    animate(heroRef.current.querySelector(".acv-content"), {
      scaleX: [0, 1],
      delay: 1700,
      duration: 700,
      ease: "outElastic(1.04,0.66)",
    });

    animate(heroRef.current.querySelectorAll(".acv-t-content"), {
      scale: {
        from: 0,
        to: 1,
        delay: stagger(300, { start: 1900 }),
      },
      duration: 700,
      ease: "outElastic(1.04,0.66)",
    });
    // Achievment //
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <section
        id="home"
        className="relative overflow-hidden bg-primary pt-90 pb-30"
      >
        <div className="relative z-2 container mx-auto">
          <div className="w-full px-4">
            <div className="flex flex-col md:mt-35 lg:mt-40 lg:flex-row lg:items-end lg:justify-center lg:gap-10 xl:gap-30">
              <div className="mb-10 xl:mb-0">
                <div className="flex flex-col">
                  <div className="relative">
                    <div className="h-t-deco2 absolute top-0 -z-2 hidden h-60 w-40 -translate-x-30 -translate-y-20 scale-70 rounded-sm bg-white/20 lg:block xl:scale-100"></div>

                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-t-deco h-13 w-1 rounded-lg bg-side lg:h-15 xl:h-20"></div>

                      <div className="flex flex-col overflow-hidden">
                        <h2 className="hero-title text-sm font-semibold text-side lg:text-lg">
                          Beras Organik Bersertifikat
                        </h2>

                        <h1 className="hero-title inline-block text-3xl font-black text-white uppercase lg:text-4xl xl:text-5xl 2xl:text-6xl">
                          Sumberejo Organik
                        </h1>
                      </div>
                    </div>

                    <div className="h-main-deco absolute top-0 -z-1 hidden h-55 w-150 -translate-x-30 -translate-y-14 scale-70 rounded-sm bg-side/30 lg:block xl:-translate-x-10 xl:-translate-y-10 xl:scale-100"></div>

                    <div className="h-t-deco2 absolute right-0 -z-2 hidden h-30 w-50 scale-70 rounded-sm bg-white/20 lg:block xl:scale-100"></div>
                  </div>

                  <p className="h-text mb-7 max-w-md text-xs font-medium text-white xl:text-base">
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
                    className="order-btn group h-8 cursor-pointer rounded-lg bg-tertiary px-4 font-semibold text-primary shadow-lg ring-side select-none hover:bg-white hover:text-side hover:ring-1 active:opacity-70"
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
                      className="mb-0.5 inline-block transition-all duration-300 group-hover:translate-x-2"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </motion.svg>
                  </motion.button>
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <div className="block items-center justify-end gap-2 overflow-hidden xl:flex xl:flex-row">
                  <div className="acv-deco hidden h-15 w-1 rounded-sm bg-white/50 xl:block"></div>

                  <div className="acv-title rounded-sm bg-side/50 p-2 text-center font-bold text-white uppercase select-none xl:p-4 xl:text-3xl">
                    <p>Pencapaian</p>
                  </div>

                  <div className="acv-deco hidden h-15 w-1 rounded-sm bg-white/50 xl:block"></div>
                </div>

                <div className="relative flex flex-col gap-3 select-none sm:gap-5">
                  <div className="acv-content rounded-sm sm:bg-white/15 sm:p-3 xl:px-8">
                    <div className="flex cursor-default flex-col gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-5 xl:gap-10">
                      <div className="flex flex-col rounded-sm bg-white/15 p-2 px-2 sm:bg-white/0 sm:p-0 sm:outline-0 xl:gap-1">
                        <p className="text-lg font-extrabold text-white sm:text-2xl md:text-3xl xl:text-4xl">
                          1.300.000
                        </p>
                        <p className="text-xs font-semibold text-white sm:text-sm xl:hidden">
                          Karung Terjual
                        </p>
                      </div>

                      <div className="hidden h-15 w-1 rounded-xl bg-white sm:block"></div>

                      <div className="flex flex-col rounded-sm bg-white/15 p-2 px-2 sm:bg-white/0 sm:p-0 sm:outline-0 xl:gap-1">
                        <p className="text-lg font-extrabold text-white sm:text-2xl md:text-3xl xl:text-4xl">
                          90%
                        </p>
                        <p className="text-xs font-semibold text-white sm:text-sm xl:hidden">
                          Kepuasan Pelanggan
                        </p>
                      </div>

                      <div className="hidden h-15 w-1 rounded-xl bg-white sm:block"></div>

                      <div className="flex flex-col rounded-sm bg-white/15 p-2 px-2 sm:bg-white/0 sm:p-0 sm:outline-0 xl:gap-1">
                        <p className="text-lg font-extrabold text-white sm:text-2xl md:text-3xl xl:text-4xl">
                          50+
                        </p>
                        <p className="text-xs font-semibold text-white sm:text-sm xl:hidden">
                          Petani Mitra
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="acv-t-content hidden rounded-sm xl:absolute xl:bottom-0 xl:block xl:-translate-x-10 xl:translate-y-7 xl:bg-side xl:p-1 xl:px-2">
                    <p className="text-xs font-semibold text-white sm:text-sm xl:text-lg">
                      Karung Terjual
                    </p>
                  </div>

                  <div className="acv-t-content hidden rounded-sm xl:absolute xl:right-1/4 xl:bottom-0 xl:block xl:-translate-x-13 xl:translate-y-7 xl:bg-side xl:p-1 xl:px-2">
                    <p className="text-xs font-semibold text-white sm:text-sm xl:text-lg">
                      Kepuasan Pelanggan
                    </p>
                  </div>

                  <div className="acv-t-content hidden rounded-sm xl:absolute xl:right-0 xl:bottom-0 xl:block xl:-translate-x-8 xl:translate-y-7 xl:bg-side xl:p-1 xl:px-2">
                    <p className="text-xs font-semibold text-white sm:text-sm xl:text-lg">
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
          className="absolute top-70 right-0 opacity-50 select-none sm:top-30 md:top-70 lg:top-15 lg:scale-150 xl:top-1/5 xl:right-30 xl:scale-200"
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

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.8 });

  useEffect(() => {
    if (!sectionRef.current) return;
    if (!isInView || window.innerWidth < 1024) return;

    // Title //
    animate(sectionRef.current.querySelector(".s-title"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 300,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".s-t-deco"), {
      opacity: [0, 1],
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 600,
      duration: 700,
      ease: "outElastic(1.19,0.66)",
    });

    animate(sectionRef.current.querySelector(".s-t-main"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [1.2, 1],
      delay: 800,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".s-t-m-deco"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 1200,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelector(".deco-p1"), {
      x: [-100, 0],
      delay: 1500,
      duration: 600,
      ease: "outBounce",
    });
    animate(sectionRef.current.querySelector(".deco-p2"), {
      x: [100, 0],
      delay: 1500,
      duration: 600,
      ease: "outBounce",
    });
    // Title //

    // Product //
    animate(sectionRef.current.querySelectorAll(".procard"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [1.5, 1],
      delay: stagger(300, { start: 1300, from: "center" }),
      duration: 700,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".pro-bg"), {
      opacity: [0, 1],
      scaleY: [0, 1],
      scaleX: [1.5, 1],
      delay: stagger(100, { start: 1600 }),
      duration: 600,
      ease: "outElastic(1,1)",
    });

    // Deco 1 //
    animate(sectionRef.current.querySelectorAll(".deco1"), {
      opacity: [0, 1],
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 2600,
      duration: 700,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".deco1"), {
      rotate: "1turn",
      duration: 5000,
      loop: true,
      ease: "linear",
    });
    // Deco 1 //
    // Deco 2 //
    animate(sectionRef.current.querySelectorAll(".deco2"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [2, 1],
      delay: 2700,
      duration: 900,
      ease: "outElastic(1,1)",

      onComplete: () => {
        animate(sectionRef.current.querySelectorAll(".deco2"), {
          keyframes: [
            { scaleX: 2.3, duration: 800 },
            { scaleX: 1, duration: 800 },
            { scaleY: 1.5, duration: 800 },
            { scaleY: 1, duration: 800 },
          ],
          delay: stagger(500),
          loop: true,
          ease: "outElastic(1,1)",
        });
      },
    });
    // Deco 2 //
    // Product //
  }, [isInView]);

  return (
    <div className="product" ref={sectionRef}>
      <section id="produk" className="pt-36 pb-60">
        <div className="container mx-auto">
          <div className="relative w-full px-4">
            <div className="mx-auto mb-15 select-none lg:mb-30">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="s-t-deco h-0.5 w-5 rounded-lg bg-side lg:opacity-0"></div>
                <h3 className="s-title text-sm font-light text-side uppercase lg:text-lg lg:opacity-0">
                  Products
                </h3>
                <div className="s-t-deco h-0.5 w-5 rounded-lg bg-side lg:opacity-0"></div>
              </div>

              <div className="flex items-center justify-center gap-7">
                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p1 flex gap-2 lg:opacity-0">
                    <div className="h-1 w-2.5 rounded-lg bg-side"></div>
                    <div className="h-1 w-5 rounded-lg bg-side"></div>
                    <div className="h-1 w-10 rounded-lg bg-side"></div>
                  </div>
                </div>

                <h2 className="s-t-main max-w-lg text-3xl font-extrabold text-quaternary lg:text-5xl lg:opacity-0">
                  Produk dari Rejonik
                </h2>

                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p2 flex gap-2 lg:opacity-0">
                    <div className="h-1 w-10 rounded-lg bg-side"></div>
                    <div className="h-1 w-5 rounded-lg bg-side"></div>
                    <div className="h-1 w-2.5 rounded-lg bg-side"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto flex flex-col justify-center gap-8 lg:flex-row lg:gap-5">
              <div className="deco2 absolute top-1/7 left-1/9 z-5 hidden h-60 w-50 rounded-sm bg-tertiary/70 lg:opacity-0 xl:block"></div>

              <div className="deco1 absolute top-1/6 right-1/8 z-5 hidden h-60 w-60 rounded-sm bg-primary/70 lg:opacity-0 xl:block"></div>

              <div id="pro1" className={`procard lg:opacity-0 ${proCard}`}>
                <img
                  src="/product/beras.jpg"
                  alt="Beras Original"
                  className="mb-5 h-60 w-full rounded-lg object-cover outline-2 outline-accentThrd select-none lg:h-56 lg:w-56 xl:h-70 xl:w-70"
                />

                <h3 className="text-xl font-extrabold text-side text-shadow-lg">
                  Beras Original
                </h3>
                <p className="mb-1 text-xs font-medium text-accentThrd">1 kg</p>

                <div className="flex justify-between">
                  <p className="text-xl font-bold text-accentThrd">Rp 35.250</p>

                  <motion.a
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    animate="rest"
                    href="#"
                    className="group"
                  >
                    <motion.button
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.1 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                      className="relative cursor-pointer overflow-hidden rounded-full bg-white p-1 px-4 font-medium text-accentThrd ring-2 ring-accentThrd select-none group-hover:text-white group-active:text-side group-active:ring-side"
                    >
                      <span className="relative z-1">Pesan</span>

                      <motion.div
                        variants={{
                          rest: { scale: 0 },
                          hover: { scale: 2.7 },
                          tap: { scale: 0 },
                        }}
                        transition={{
                          duration: 0.1,
                          ease: "easeInOut",
                        }}
                        className="absolute h-8 w-8 translate-x-2 -translate-y-7 rounded-full bg-accentThrd"
                      />
                    </motion.button>
                  </motion.a>
                </div>
              </div>

              <div id="pro2" className={`procard lg:opacity-0 ${proCard}`}>
                <img
                  src="/product/beras-aromatik.jpg"
                  alt="Beras Aromatik"
                  className="mb-5 h-60 w-full rounded-lg object-cover outline-2 outline-accentThrd select-none lg:h-56 lg:w-56 xl:h-70 xl:w-70"
                />

                <h3 className="text-xl font-extrabold text-fuchsia-400 text-shadow-lg">
                  Beras Aromatik
                </h3>
                <p className="mb-1 text-xs font-medium text-accentThrd">1 kg</p>

                <div className="flex justify-between">
                  <p className="text-xl font-bold text-accentThrd">Rp 35.250</p>

                  <motion.a
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    animate="rest"
                    href="#"
                    className="group"
                  >
                    <motion.button
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.1 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                      className="relative cursor-pointer overflow-hidden rounded-full bg-white p-1 px-4 font-medium text-accentThrd ring-2 ring-accentThrd select-none group-hover:text-white group-active:text-side group-active:ring-side"
                    >
                      <span className="relative z-1">Pesan</span>

                      <motion.div
                        variants={{
                          rest: { scale: 0 },
                          hover: { scale: 2.7 },
                          tap: { scale: 0 },
                        }}
                        transition={{
                          duration: 0.1,
                          ease: "easeInOut",
                        }}
                        className="absolute h-8 w-8 translate-x-2 -translate-y-7 rounded-full bg-accentThrd"
                      />
                    </motion.button>
                  </motion.a>
                </div>
              </div>

              <div id="pro3" className={`procard lg:opacity-0 ${proCard}`}>
                <img
                  src="/product/beras-merah.jpg"
                  alt="Beras Merah"
                  className="mb-5 h-60 w-full rounded-lg object-cover outline-2 outline-accentThrd select-none lg:h-56 lg:w-56 xl:h-70 xl:w-70"
                />

                <h3 className="text-xl font-extrabold text-[#691500] text-shadow-lg">
                  Beras Merah
                </h3>
                <p className="mb-1 text-xs font-medium text-accentThrd">1 kg</p>

                <div className="flex justify-between">
                  <p className="text-xl font-bold text-accentThrd">Rp 35.250</p>

                  <motion.a
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    animate="rest"
                    href="#"
                    className="group"
                  >
                    <motion.button
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.1 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                      className="relative cursor-pointer overflow-hidden rounded-full bg-white p-1 px-4 font-medium text-accentThrd ring-2 ring-accentThrd select-none group-hover:text-white group-active:text-side group-active:ring-side"
                    >
                      <span className="relative z-1">Pesan</span>

                      <motion.div
                        variants={{
                          rest: { scale: 0 },
                          hover: { scale: 2.7 },
                          tap: { scale: 0 },
                        }}
                        transition={{
                          duration: 0.1,
                          ease: "easeInOut",
                        }}
                        className="absolute h-8 w-8 translate-x-2 -translate-y-7 rounded-full bg-accentThrd"
                      />
                    </motion.button>
                  </motion.a>
                </div>
              </div>

              <div className="deco2 absolute right-1/7 -bottom-1/4 z-5 hidden h-50 w-50 rounded-sm bg-tertiary/70 lg:opacity-0 xl:block"></div>

              <div className="deco1 absolute -bottom-1/3 left-1/7 z-5 hidden h-55 w-55 -translate-y-15 rounded-sm bg-primary/70 lg:opacity-0 xl:block"></div>

              <div className="pro-bg absolute top-1/5 right-1/2 hidden h-80 w-150 translate-x-20 scale-80 rounded-sm bg-linear-to-tr from-primary/70 to-side/70 lg:block lg:opacity-0 xl:scale-100"></div>
              <div className="pro-bg absolute top-2/3 left-1/2 hidden h-80 w-150 -translate-x-20 scale-80 rounded-sm bg-linear-to-tr from-side/70 to-primary/70 lg:block lg:opacity-0 xl:scale-100"></div>
              <div className="pro-bg absolute right-1/7 hidden h-80 w-80 -translate-y-10 scale-80 rounded-sm bg-accentThrd/70 lg:block lg:opacity-0 xl:scale-100"></div>
              <div className="pro-bg absolute bottom-0 left-1/5 hidden h-80 w-80 translate-y-20 scale-80 rounded-sm bg-accentThrd/70 lg:block lg:opacity-0 xl:scale-100"></div>
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

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.8 });

  useEffect(() => {
    if (!sectionRef.current) return;
    if (!isInView || window.innerWidth < 1024) return;

    // Title //
    animate(sectionRef.current.querySelector(".s-title"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 300,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".s-t-deco"), {
      opacity: [0, 1],
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 600,
      duration: 700,
      ease: "outElastic(1.19,0.66)",
    });

    animate(sectionRef.current.querySelector(".s-t-main"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [1.2, 1],
      delay: 800,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".s-t-m-deco"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 1200,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelector(".deco-p1"), {
      x: [-100, 0],
      delay: 1500,
      duration: 600,
      ease: "outBounce",
    });
    animate(sectionRef.current.querySelector(".deco-p2"), {
      x: [100, 0],
      delay: 1500,
      duration: 600,
      ease: "outBounce",
    });
    // Title //

    // Advantages //
    animate(sectionRef.current.querySelectorAll(".advan-anim"), {
      opacity: [0, 1],
      scale: [0, 1],
      delay: stagger(200, { start: 1800 }),
      duration: 1000,
      ease: "outElastic(1,0.55)",
    });
    // Advantages //

    // Deco //
    animate(sectionRef.current.querySelectorAll(".deco"), {
      opacity: [0, 1],
      scale: [0, 1],
      delay: 3000,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    // Deco A1 //
    animate(sectionRef.current.querySelector(".deco-a1a"), {
      scaleX: [0, 1],
      x: [0, -100],
      opacity: [0, 1],
      delay: 3000,
      duration: 600,

      onComplete: () => {
        animate(sectionRef.current.querySelector(".deco-a1a"), {
          x: [-100, 0],
          duration: 400,
          ease: "outBounce",
        });
      },
    });
    animate(sectionRef.current.querySelector(".deco-a1b"), {
      scaleX: [0, 1],
      x: [0, 100],
      opacity: [0, 1],
      delay: 3000,
      duration: 600,

      onComplete: () => {
        animate(sectionRef.current.querySelector(".deco-a1b"), {
          x: [100, 0],
          duration: 400,
          ease: "outBounce",
        });
      },
    });
    // Deco A1 //

    // Deco A2 //
    animate(sectionRef.current.querySelector(".deco-a2a"), {
      scaleX: [0, 1],
      x: [0, -200],
      opacity: [0, 1],
      delay: 3500,
      duration: 600,

      onComplete: () => {
        animate(sectionRef.current.querySelector(".deco-a2a"), {
          x: [-200, 0],
          duration: 400,
          ease: "outBounce",
        });
      },
    });
    animate(sectionRef.current.querySelector(".deco-a2b"), {
      scaleX: [0, 1],
      x: [0, 200],
      opacity: [0, 1],
      delay: 3500,
      duration: 600,

      onComplete: () => {
        animate(sectionRef.current.querySelector(".deco-a2b"), {
          x: [200, 0],
          duration: 400,
          ease: "outBounce",
        });
      },
    });
    // Deco A2 //

    // Deco A3 //
    animate(sectionRef.current.querySelector(".deco-a3a"), {
      scaleX: [0, 1],
      x: [0, -300],
      opacity: [0, 1],
      delay: 4000,
      duration: 600,

      onComplete: () => {
        animate(sectionRef.current.querySelector(".deco-a3a"), {
          x: [-300, 0],
          duration: 400,
          ease: "outBounce",
        });
      },
    });
    animate(sectionRef.current.querySelector(".deco-a3b"), {
      scaleX: [0, 1],
      x: [0, 300],
      opacity: [0, 1],
      delay: 4000,
      duration: 600,

      onComplete: () => {
        animate(sectionRef.current.querySelector(".deco-a3b"), {
          x: [300, 0],
          duration: 400,
          ease: "outBounce",
        });
      },
    });
    // Deco A3 //
    // Deco //
  });

  return (
    <div className="advantages" ref={sectionRef}>
      <section id="keunggulan" className="relative bg-side/40 pt-36 pb-20">
        <div className="container mx-auto mb-20">
          <div className="w-full px-10">
            <div className="mx-auto mb-30 select-none">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="s-t-deco h-0.5 w-5 rounded-lg bg-side lg:opacity-0"></div>
                <h3 className="s-title text-sm font-light text-side uppercase lg:text-lg lg:opacity-0">
                  Advantages
                </h3>
                <div className="s-t-deco h-0.5 w-5 rounded-lg bg-side lg:opacity-0"></div>
              </div>

              <div className="flex items-center justify-center gap-7">
                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p1 flex gap-2 lg:opacity-0">
                    <div className="h-1 w-2.5 rounded-lg bg-side"></div>
                    <div className="h-1 w-5 rounded-lg bg-side"></div>
                    <div className="h-1 w-10 rounded-lg bg-side"></div>
                  </div>
                </div>

                <h2 className="s-t-main max-w-lg text-3xl font-extrabold text-quaternary lg:text-5xl lg:opacity-0">
                  Keunggulan Rejonik
                </h2>

                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p2 flex gap-2 lg:opacity-0">
                    <div className="h-1 w-10 rounded-lg bg-side"></div>
                    <div className="h-1 w-5 rounded-lg bg-side"></div>
                    <div className="h-1 w-2.5 rounded-lg bg-side"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-10 select-none lg:grid-cols-2 xl:grid-cols-3">
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="advan-anim group relative lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      x: 36,
                      y: -36,
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="absolute right-0 z-2 hidden h-30 w-30 items-center justify-center rounded-sm lg:flex lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: { opacity: 0, scaleX: 0, scaleY: 1.5 },
                      hover: { opacity: 1, scaleX: 1, scaleY: 1 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: { x: 0, y: 0, borderColor: "rgba(74, 171, 0)" },
                    hover: { x: 15, y: -15, borderColor: "rgba(77, 46, 0)" },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: { scale: 2.3 },
                      hover: { scale: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className="absolute top-1/2 left-1/2 z-2 hidden h-49 w-49 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-side lg:flex"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="h-full w-full p-5">
                    <div className="mb-5 flex items-center gap-5">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
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
                      <p className="text-xs font-medium text-slate-500">
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
                    rest: {
                      x: 0,
                      y: -40,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      x: -20,
                      y: -28,
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                  }}
                  className="absolute z-2 hidden h-10 w-40 rounded-sm lg:block"
                />

                <div className="absolute -z-1 h-50 w-full max-w-sm -translate-y-50 rounded-sm bg-primary"></div>
              </motion.div>

              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="advan-anim group relative lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      x: 36,
                      y: -36,
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="absolute right-0 z-2 hidden h-30 w-30 items-center justify-center rounded-sm lg:flex lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: { opacity: 0, scaleX: 0, scaleY: 1.5 },
                      hover: { opacity: 1, scaleX: 1, scaleY: 1 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: { x: 0, y: 0, borderColor: "rgba(74, 171, 0)" },
                    hover: { x: 15, y: -15, borderColor: "rgba(77, 46, 0)" },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: { scale: 2.3 },
                      hover: { scale: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className="absolute top-1/2 left-1/2 z-2 hidden h-49 w-49 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-side lg:flex"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="h-full w-full p-5">
                    <div className="mb-5 flex items-center gap-5">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
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
                      <p className="text-xs font-medium text-slate-500">
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
                    rest: {
                      x: 0,
                      y: -40,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      x: -20,
                      y: -28,
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                  }}
                  className="absolute z-2 hidden h-10 w-40 rounded-sm lg:block"
                />

                <div className="absolute -z-1 h-50 w-full max-w-sm -translate-y-50 rounded-sm bg-primary"></div>
              </motion.div>

              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="advan-anim group relative lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      x: 36,
                      y: -36,
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="absolute right-0 z-2 hidden h-30 w-30 items-center justify-center rounded-sm lg:flex lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: { opacity: 0, scaleX: 0, scaleY: 1.5 },
                      hover: { opacity: 1, scaleX: 1, scaleY: 1 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: { x: 0, y: 0, borderColor: "rgba(74, 171, 0)" },
                    hover: { x: 15, y: -15, borderColor: "rgba(77, 46, 0)" },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: { scale: 2.3 },
                      hover: { scale: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className="absolute top-1/2 left-1/2 z-2 hidden h-49 w-49 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-side lg:flex"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="h-full w-full p-5">
                    <div className="mb-5 flex items-center gap-5">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
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
                      <p className="text-xs font-medium text-slate-500">
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
                    rest: {
                      x: 0,
                      y: -40,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      x: -20,
                      y: -28,
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                  }}
                  className="absolute z-2 hidden h-10 w-40 rounded-sm lg:block"
                />

                <div className="absolute -z-1 h-50 w-full max-w-sm -translate-y-50 rounded-sm bg-primary"></div>
              </motion.div>

              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="advan-anim group relative lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      x: 36,
                      y: -36,
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="absolute right-0 z-2 hidden h-30 w-30 items-center justify-center rounded-sm lg:flex lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: { opacity: 0, scaleX: 0, scaleY: 1.5 },
                      hover: { opacity: 1, scaleX: 1, scaleY: 1 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: { x: 0, y: 0, borderColor: "rgba(74, 171, 0)" },
                    hover: { x: 15, y: -15, borderColor: "rgba(77, 46, 0)" },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: { scale: 2.3 },
                      hover: { scale: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className="absolute top-1/2 left-1/2 z-2 hidden h-49 w-49 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-side lg:flex"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="h-full w-full p-5">
                    <div className="mb-5 flex items-center gap-5">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
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
                      <p className="text-xs font-medium text-slate-500">
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
                    rest: {
                      x: 0,
                      y: -40,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      x: -20,
                      y: -28,
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                  }}
                  className="absolute z-2 hidden h-10 w-40 rounded-sm lg:block"
                />

                <div className="absolute -z-1 h-50 w-full max-w-sm -translate-y-50 rounded-sm bg-primary"></div>
              </motion.div>

              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="advan-anim group relative lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      x: 36,
                      y: -36,
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="absolute right-0 z-2 hidden h-30 w-30 items-center justify-center rounded-sm lg:flex lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: { opacity: 0, scaleX: 0, scaleY: 1.5 },
                      hover: { opacity: 1, scaleX: 1, scaleY: 1 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: { x: 0, y: 0, borderColor: "rgba(74, 171, 0)" },
                    hover: { x: 15, y: -15, borderColor: "rgba(77, 46, 0)" },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: { scale: 2.3 },
                      hover: { scale: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className="absolute top-1/2 left-1/2 z-2 hidden h-49 w-49 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-side lg:flex"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="h-full w-full p-5">
                    <div className="mb-5 flex items-center gap-5">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
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
                      <p className="text-xs font-medium text-slate-500">
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
                    rest: {
                      x: 0,
                      y: -40,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      x: -20,
                      y: -28,
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                  }}
                  className="absolute z-2 hidden h-10 w-40 rounded-sm lg:block"
                />

                <div className="absolute -z-1 h-50 w-full max-w-sm -translate-y-50 rounded-sm bg-primary"></div>
              </motion.div>

              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="advan-anim group relative lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      x: 36,
                      y: -36,
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="absolute right-0 z-2 hidden h-30 w-30 items-center justify-center rounded-sm lg:flex lg:scale-70 xl:scale-100"
                >
                  <motion.img
                    variants={{
                      rest: { opacity: 0, scaleX: 0, scaleY: 1.5 },
                      hover: { opacity: 1, scaleX: 1, scaleY: 1 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                    src="/img/hinabobok2.png"
                    alt="Organik"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rest: { x: 0, y: 0, borderColor: "rgba(74, 171, 0)" },
                    hover: { x: 15, y: -15, borderColor: "rgba(77, 46, 0)" },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className={`${advanCard}`}
                >
                  <motion.div
                    variants={{
                      rest: { scale: 2.3 },
                      hover: { scale: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className="absolute top-1/2 left-1/2 z-2 hidden h-49 w-49 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-side lg:flex"
                  >
                    <img src="/img/hinabobok2.png" alt="Organik" width="50" />
                  </motion.div>

                  <div className="h-full w-full p-5">
                    <div className="mb-5 flex items-center gap-5">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
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
                      <p className="text-xs font-medium text-slate-500">
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
                    rest: {
                      x: 0,
                      y: -40,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      scaleX: 0,
                      scaleY: 1.5,
                    },
                    hover: {
                      x: -20,
                      y: -28,
                      backgroundColor: "rgba(74, 171, 0, 0.5)",
                      scaleX: 1,
                      scaleY: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                  }}
                  className="absolute z-2 hidden h-10 w-40 rounded-sm lg:block"
                />

                <div className="absolute -z-1 h-50 w-full max-w-sm -translate-y-50 rounded-sm bg-primary"></div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-center gap-3 lg:flex">
          <div className="deco-a3a hidden h-3 w-3 rounded-full bg-side lg:block lg:opacity-0" />
          <div className="deco-a2a hidden h-2 w-20 rounded-full bg-side lg:block lg:opacity-0" />
          <div className="deco-a1a hidden h-2 w-30 rounded-full bg-side lg:block lg:opacity-0" />
          <div className="deco hidden h-6 w-6 rounded-full bg-side lg:block lg:opacity-0" />
          <div className="deco-a1b hidden h-2 w-30 rounded-full bg-side lg:block lg:opacity-0" />
          <div className="deco-a2b hidden h-2 w-20 rounded-full bg-side lg:block lg:opacity-0" />
          <div className="deco-a3b hidden h-3 w-3 rounded-full bg-side lg:block lg:opacity-0" />
        </div>
      </section>
    </div>
  );
}
// Advantages //

// About //
function About() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.8 });

  useEffect(() => {
    if (!sectionRef.current) return;
    if (!isInView || window.innerWidth < 1024) return;

    // Title //
    animate(sectionRef.current.querySelector(".s-title"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 300,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".s-t-deco"), {
      opacity: [0, 1],
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 600,
      duration: 700,
      ease: "outElastic(1.19,0.66)",
    });

    animate(sectionRef.current.querySelector(".s-t-main"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [1.2, 1],
      delay: 800,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".s-t-m-deco"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 1200,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelector(".deco-p1"), {
      x: [-100, 0],
      delay: 1500,
      duration: 600,
      ease: "outBounce",
    });
    animate(sectionRef.current.querySelector(".deco-p2"), {
      x: [100, 0],
      delay: 1500,
      duration: 600,
      ease: "outBounce",
    });
    // Title //

    // History //
    // Title //
    animate(sectionRef.current.querySelector(".h-title"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 1600,
      duration: 600,
      ease: "outElastic(1,0.46)",

      onComplete: () => {
        animate(sectionRef.current.querySelector(".h-deco"), {
          scaleX: [1, 0],
          duration: 800,
          ease: "inElastic(1,0.36)",

          onComplete: () => {
            animate(sectionRef.current.querySelector(".h-t-deco"), {
              opacity: [0, 1],
              scaleX: [0, 1],
              delay: 200,
              duration: 700,
              ease: "outElastic(1.12,0.46)",

              onComplete: () => {
                animate(sectionRef.current.querySelectorAll(".h-t-deco2"), {
                  opacity: [0, 1],
                  scaleY: [2, 1],
                  scaleX: [0, 1],
                  duration: 600,
                  ease: "outElastic(1,1)",
                });
              },
            });
          },
        });
      },
    });
    // Title //

    // Content //
    animate(sectionRef.current.querySelector(".h-content"), {
      opacity: [0, 1],
      scaleY: [1.3, 1],
      scaleX: [0, 1],
      delay: 2800,
      duration: 700,
      ease: "outElastic(1,1)",

      onComplete: () => {
        animate(sectionRef.current.querySelector(".h-p-box"), {
          x: [0, 7],
          y: [0, -7],
          duration: 700,
          ease: "inOutElastic(1.81,0.93)",
        });
      },
    });

    animate(sectionRef.current.querySelector(".h-parag"), {
      y: [250, 0],
      delay: 4000,
      duration: 700,
      ease: "outElastic(1,1)",

      onComplete: () => {
        animate(sectionRef.current.querySelectorAll(".h-c-deco1"), {
          opacity: [0, 1],
          scaleY: [1.5, 1],
          scaleX: [0, 1],
          delay: stagger(400),
          duration: 700,
          ease: "outElastic(2,1.18)",
        });
        animate(sectionRef.current.querySelectorAll(".h-c-deco2"), {
          opacity: [0, 1],
          scaleY: [1.5, 1],
          scaleX: [0, 1],
          delay: stagger(400, { start: 700 }),
          duration: 700,
          ease: "outElastic(2,1.18)",
        });
      },
    });
    // Content //

    // Image //
    animate(sectionRef.current.querySelector(".swh-img"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [2, 1],
      delay: 3000,
      duration: 700,
      ease: "outElastic(1,1)",

      onComplete: () => {
        animate(sectionRef.current.querySelectorAll(".h-image-deco1"), {
          opacity: [0, 1],
          scaleX: [2, 1],
          scaleY: [0, 1],
          duration: 700,
          ease: "outElastic(1,1)",

          onComplete: () => {
            animate(sectionRef.current.querySelectorAll(".h-image-deco2"), {
              opacity: [0, 1],
              scaleX: [2, 1],
              scaleY: [0, 1],
              duration: 700,
              ease: "outElastic(1,1)",
            });
          },
        });
        animate(sectionRef.current.querySelectorAll(".h-img-deco1"), {
          opacity: [0, 1],
          scaleX: [1.5, 1],
          scaleY: [0, 1],
          delay: stagger(300),
          duration: 700,
          ease: "outElastic(2,1.78)",
        });
        animate(sectionRef.current.querySelectorAll(".h-img-deco2"), {
          opacity: [0, 1],
          scaleX: [0, 1],
          scaleY: [2, 1],
          delay: stagger(300, { start: 600 }),
          duration: 700,
          ease: "outElastic(2,1.78)",
        });
        animate(sectionRef.current.querySelectorAll(".h-img-deco3"), {
          opacity: [0, 1],
          scaleX: [1.5, 1],
          scaleY: [0, 1],
          delay: stagger(300, { start: 1200 }),
          duration: 700,
          ease: "outElastic(2,1.78)",
        });
      },
    });
    // Image //
    // History //
  });

  return (
    <div className="about" ref={sectionRef}>
      <section id="tentang" className="pt-36 pb-32">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-10 select-none lg:mb-30">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="s-t-deco h-0.5 w-5 rounded-lg bg-side lg:opacity-0"></div>
                <h3 className="s-title text-sm font-light text-side uppercase lg:text-lg lg:opacity-0">
                  About Us
                </h3>
                <div className="s-t-deco h-0.5 w-5 rounded-lg bg-side lg:opacity-0"></div>
              </div>

              <div className="flex items-center justify-center gap-7">
                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p1 flex gap-2 lg:opacity-0">
                    <div className="h-1 w-2.5 rounded-lg bg-side"></div>
                    <div className="h-1 w-5 rounded-lg bg-side"></div>
                    <div className="h-1 w-10 rounded-lg bg-side"></div>
                  </div>
                </div>

                <h2 className="s-t-main max-w-lg text-center text-3xl font-extrabold text-quaternary lg:max-w-xl lg:text-5xl lg:opacity-0">
                  Kelompok Tani Bahagia
                </h2>

                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p2 flex gap-2 lg:opacity-0">
                    <div className="h-1 w-10 rounded-lg bg-side"></div>
                    <div className="h-1 w-5 rounded-lg bg-side"></div>
                    <div className="h-1 w-2.5 rounded-lg bg-side"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
              <div className="mx-auto">
                <div className="relative mx-auto h-fit w-fit lg:hidden">
                  <div className="mb-5 max-w-md translate-x-2 -translate-y-2 overflow-hidden rounded-sm">
                    <img
                      src="/about/sawah.jpg"
                      alt="Sawah"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                </div>

                <div className="h-title relative mb-5 w-fit lg:mb-10 lg:opacity-0">
                  <div className="relative w-fit">
                    <div className="h-t-deco2 absolute -top-1/5 -left-1/7 -z-1 hidden h-10 w-20 rounded-sm bg-primary/50 lg:block lg:opacity-0" />

                    <h2 className="text-2xl font-extrabold text-accentThrd uppercase lg:text-5xl">
                      Sejarah
                    </h2>

                    <div className="h-t-deco2 absolute -right-1/7 -bottom-1/5 -z-1 hidden h-10 w-30 rounded-sm bg-primary/50 lg:block lg:opacity-0" />

                    <div className="h-t-deco h-1 w-full rounded-full bg-side lg:opacity-0" />
                  </div>

                  <div className="h-deco absolute top-0 hidden h-13 w-full rounded-sm bg-side lg:block" />
                </div>

                <div className="h-content relative h-fit max-w-lg lg:max-w-2xl lg:opacity-0">
                  <div className="h-c-deco1 absolute -top-1/8 -left-1/7 -z-1 hidden h-50 w-40 rounded-sm bg-side/50 lg:block lg:opacity-0" />
                  <div className="h-c-deco1 absolute -right-1/12 -bottom-1/8 -z-2 hidden h-50 w-40 rounded-sm bg-accentThrd/50 lg:block lg:opacity-0" />
                  <div className="h-c-deco2 absolute -top-1/9 left-1/2 -z-1 hidden h-2 w-40 rounded-sm bg-side/50 lg:block lg:opacity-0" />
                  <div className="h-c-deco2 absolute right-1/2 -bottom-1/9 -z-1 hidden h-2 w-40 rounded-sm bg-primary/50 lg:block lg:opacity-0" />

                  <div className="h-p-box overflow-hidden rounded-sm border-2 border-accentThrd bg-tertiary p-3 shadow-lg">
                    <p className="h-parag text-justify text-xs font-medium text-quaternary select-none lg:text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea, nemo incidunt qui reprehenderit atque quia accusantium
                      animi ipsam consequuntur voluptatem fuga dolorum hic
                      quibusdam? Omnis enim praesentium assumenda sit. Eaque cum
                      voluptatum consequatur nemo aliquam quibusdam tempora!
                      Delectus eum, nihil, ipsa explicabo suscipit
                      exercitationem, fuga veniam possimus natus magni vel
                      voluptatum quis commodi ducimus. Officia, deleniti amet.
                      Ad temporibus iusto est pariatur magnam nihil, quod,
                      recusandae obcaecati optio laboriosam veniam, consectetur
                      dicta aspernatur ducimus eaque magni praesentium et
                      consequatur? Dolorum unde maxime eveniet neque vel, itaque
                      tempore eaque ab ex ipsam cupiditate natus quam animi vero
                      modi est at labore!
                    </p>
                  </div>

                  <div className="absolute top-0 -z-2 h-full w-full rounded-sm bg-primary" />
                </div>
              </div>

              <div className="mx-auto hidden lg:block">
                <div className="relative">
                  <div className="swh-img relative col-span-2 row-span-4 w-full max-w-2xl overflow-hidden rounded-sm bg-white select-none lg:opacity-0">
                    <img
                      src="/about/sawah.jpg"
                      alt="Sawah"
                      className="h-full w-full object-cover object-center"
                    />

                    <div className="h-image-deco2 absolute top-5 left-1/5 z-2 h-2 w-80 rounded-full bg-white/70 lg:opacity-0" />
                    <div className="h-image-deco2 absolute right-1/5 bottom-5 z-2 h-2 w-80 rounded-full bg-white/70 lg:opacity-0" />
                    <div className="h-image-deco1 absolute top-5 right-5 z-2 h-10 w-10 rounded-sm bg-white/70 lg:opacity-0" />
                    <div className="h-image-deco1 absolute bottom-5 left-5 z-2 h-10 w-10 rounded-sm bg-white/70 lg:opacity-0" />
                  </div>

                  <div className="h-img-deco1 absolute -top-1/7 -left-1/8 -z-1 h-60 w-80 rounded-sm bg-linear-to-tr from-primary/70 to-side/70 lg:opacity-0" />
                  <div className="h-img-deco1 absolute -top-1/9 left-1/2 -z-1 h-20 w-20 rounded-sm bg-side/70 lg:opacity-0" />
                  <div className="h-img-deco2 absolute -top-1/7 -right-1/10 -z-1 h-90 w-40 rounded-sm bg-primary/70 lg:opacity-0" />
                  <div className="h-img-deco2 absolute -bottom-1/7 left-1/8 -z-1 h-70 w-80 rounded-sm bg-tertiary/70 lg:opacity-0" />
                  <div className="h-img-deco3 absolute -bottom-1/9 left-1/2 -z-1 h-90 w-80 rounded-sm bg-linear-to-tr from-side/70 to-primary/70 lg:opacity-0" />
                  <div className="h-img-deco3 absolute -bottom-1/9 -left-1/12 -z-1 h-20 w-20 rounded-sm bg-side/70 lg:opacity-0" />
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
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.8 });

  useEffect(() => {
    if (!sectionRef.current) return;
    if (!isInView || window.innerWidth < 1024) return;

    // Title //
    animate(sectionRef.current.querySelector(".s-title"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 300,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".s-t-deco"), {
      opacity: [0, 1],
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 600,
      duration: 700,
      ease: "outElastic(1.19,0.66)",
    });

    animate(sectionRef.current.querySelector(".s-t-main"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [1.2, 1],
      delay: 800,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".s-t-m-deco"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 1200,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelector(".deco-p1"), {
      x: [-100, 0],
      delay: 1500,
      duration: 600,
      ease: "outBounce",
    });
    animate(sectionRef.current.querySelector(".deco-p2"), {
      x: [100, 0],
      delay: 1500,
      duration: 600,
      ease: "outBounce",
    });
    // Title //

    // Sertificate //
    animate(sectionRef.current.querySelectorAll(".s-content"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [2, 1],
      delay: stagger(200, { start: 1700 }),
      duration: 1500,
      ease: "inOutElastic(1.86,1.23)",
    });
    // Sertificate //
  });

  return (
    <div className="sertificate" ref={sectionRef}>
      <section id="sertifikat" className="pt-36 pb-50">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-30 select-none">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="s-t-deco h-0.5 w-5 rounded-lg bg-side lg:opacity-0"></div>
                <h3 className="s-title text-sm font-light text-side uppercase lg:text-lg lg:opacity-0">
                  Sertificate
                </h3>
                <div className="s-t-deco h-0.5 w-5 rounded-lg bg-side lg:opacity-0"></div>
              </div>

              <div className="flex items-center justify-center gap-7">
                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p1 flex gap-2 lg:opacity-0">
                    <div className="h-1 w-2.5 rounded-lg bg-side"></div>
                    <div className="h-1 w-5 rounded-lg bg-side"></div>
                    <div className="h-1 w-10 rounded-lg bg-side"></div>
                  </div>
                </div>

                <h2 className="s-t-main max-w-lg text-center text-3xl font-extrabold text-quaternary lg:max-w-xl lg:text-5xl lg:opacity-0">
                  Sertifikasi Rejonik
                </h2>

                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p2 flex gap-2 lg:opacity-0">
                    <div className="h-1 w-10 rounded-lg bg-side"></div>
                    <div className="h-1 w-5 rounded-lg bg-side"></div>
                    <div className="h-1 w-2.5 rounded-lg bg-side"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center gap-15 lg:grid-cols-2 xl:grid-cols-4">
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="s-content relative w-fit lg:opacity-0"
            >
              <motion.div
                variants={{
                  rest: {
                    x: 0,
                    y: 0,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    scaleX: 0,
                    scaleY: 1.5,
                  },
                  hover: {
                    x: 33,
                    y: -33,
                    backgroundColor: "rgba(74, 171, 0, 0.7)",
                    scaleX: 1,
                    scaleY: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="absolute right-0 z-1 hidden h-25 w-25 items-center justify-center rounded-sm select-none lg:flex"
              >
                <motion.img
                  variants={{
                    rest: { opacity: 0, scaleX: 0, scaleY: 1.5 },
                    hover: { opacity: 1, scaleX: 1, scaleY: 1 },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  src="/sertificate/Logo SNI.svg"
                  alt="SNI"
                  width="50"
                />
              </motion.div>

              <motion.div
                variants={{
                  rest: { x: 0, y: 0, borderColor: "rgba(74, 171, 0)" },
                  hover: { x: 10, y: -10, borderColor: "rgba(77, 46, 0)" },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="relative h-55 w-full max-w-sm overflow-hidden rounded-sm border-2 border-accentThrd bg-tertiary shadow-lg"
              >
                <motion.div
                  variants={{
                    rest: { scale: 2.4 },
                    hover: { scale: 0 },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="absolute left-1/2 hidden h-54 w-54 -translate-x-1/2 items-center justify-center rounded-full bg-side lg:flex"
                >
                  <img src="/sertificate/Logo SNI.svg" alt="SNI" width="30" />
                </motion.div>

                <div className="mx-auto flex flex-col gap-5 p-5">
                  <div className="flex items-center gap-5 select-none">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
                      <img
                        src="/sertificate/Logo SNI.svg"
                        alt="SNI"
                        width="30"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-accentThrd">SNI</h3>
                  </div>

                  <div className="">
                    <p className="text-sm font-medium text-quaternary lg:text-xs xl:text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ut ipsam aspernatur ex alias sequi. Ab recusandae
                      reiciendis eveniet. Repudiandae, laboriosam.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  rest: {
                    x: 5,
                    y: -5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    scaleX: 0,
                    scaleY: 1.5,
                  },
                  hover: {
                    x: -16,
                    y: 16,
                    backgroundColor: "rgba(74, 171, 0, 0.8)",
                    scaleX: 1,
                    scaleY: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="absolute bottom-0 z-1 hidden rounded-sm p-1 px-2 lg:block"
              >
                <motion.p
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  className="text-3xl font-bold text-white uppercase italic"
                >
                  Certified
                </motion.p>
              </motion.div>

              <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
            </motion.div>

            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="s-content relative w-fit lg:opacity-0"
            >
              <motion.div
                variants={{
                  rest: {
                    x: 0,
                    y: 0,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    scaleX: 0,
                    scaleY: 1.5,
                  },
                  hover: {
                    x: 33,
                    y: -33,
                    backgroundColor: "rgba(74, 171, 0, 0.7)",
                    scaleX: 1,
                    scaleY: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="absolute right-0 z-1 hidden h-25 w-25 items-center justify-center rounded-sm select-none lg:flex"
              >
                <motion.img
                  variants={{
                    rest: { opacity: 0, scaleX: 0, scaleY: 1.5 },
                    hover: { opacity: 1, scaleX: 1, scaleY: 1 },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  src="/sertificate/Halal Indonesia Logo.png"
                  alt="Halal"
                  width="40"
                />
              </motion.div>

              <motion.div
                variants={{
                  rest: { x: 0, y: 0, borderColor: "rgba(74, 171, 0)" },
                  hover: { x: 10, y: -10, borderColor: "rgba(77, 46, 0)" },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="relative h-55 w-full max-w-sm overflow-hidden rounded-sm border-2 border-accentThrd bg-tertiary shadow-lg"
              >
                <motion.div
                  variants={{
                    rest: { scale: 2.4 },
                    hover: { scale: 0 },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="absolute left-1/2 hidden h-54 w-54 -translate-x-1/2 items-center justify-center rounded-full bg-side lg:flex"
                >
                  <img
                    src="/sertificate/Halal Indonesia Logo.png"
                    alt="Halal"
                    width="30"
                  />
                </motion.div>

                <div className="mx-auto flex flex-col gap-5 p-5">
                  <div className="flex items-center gap-5 select-none">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
                      <img
                        src="/sertificate/Halal Indonesia Logo.png"
                        alt="Halal"
                        width="20"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-accentThrd">Halal</h3>
                  </div>

                  <div className="">
                    <p className="text-sm font-medium text-quaternary lg:text-xs xl:text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ut ipsam aspernatur ex alias sequi. Ab recusandae
                      reiciendis eveniet. Repudiandae, laboriosam.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  rest: {
                    x: 5,
                    y: -5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    scaleX: 0,
                    scaleY: 1.5,
                  },
                  hover: {
                    x: -16,
                    y: 16,
                    backgroundColor: "rgba(74, 171, 0, 0.8)",
                    scaleX: 1,
                    scaleY: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="absolute bottom-0 z-1 hidden rounded-sm p-1 px-2 lg:block"
              >
                <motion.p
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  className="text-3xl font-bold text-white uppercase italic"
                >
                  Certified
                </motion.p>
              </motion.div>

              <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
            </motion.div>

            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="s-content relative w-fit lg:opacity-0"
            >
              <motion.div
                variants={{
                  rest: {
                    x: 0,
                    y: 0,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    scaleX: 0,
                    scaleY: 1.5,
                  },
                  hover: {
                    x: 33,
                    y: -33,
                    backgroundColor: "rgba(74, 171, 0, 0.7)",
                    scaleX: 1,
                    scaleY: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="absolute right-0 z-1 hidden h-25 w-25 items-center justify-center rounded-sm select-none lg:flex"
              >
                <motion.img
                  variants={{
                    rest: { opacity: 0, scaleX: 0, scaleY: 1.5 },
                    hover: { opacity: 1, scaleX: 1, scaleY: 1 },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  src="/sertificate/BPOM Logo.png"
                  alt="BPOM"
                  width="70"
                />
              </motion.div>

              <motion.div
                variants={{
                  rest: { x: 0, y: 0, borderColor: "rgba(74, 171, 0)" },
                  hover: { x: 10, y: -10, borderColor: "rgba(77, 46, 0)" },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="relative h-55 w-full max-w-sm overflow-hidden rounded-sm border-2 border-accentThrd bg-tertiary shadow-lg"
              >
                <motion.div
                  variants={{
                    rest: { scale: 2.4 },
                    hover: { scale: 0 },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="absolute left-1/2 hidden h-54 w-54 -translate-x-1/2 items-center justify-center rounded-full bg-side lg:flex"
                >
                  <img src="/sertificate/BPOM Icon.png" alt="BPOM" width="40" />
                </motion.div>

                <div className="mx-auto flex flex-col gap-5 p-5">
                  <div className="flex items-center gap-5 select-none">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
                      <img
                        src="/sertificate/BPOM Icon.png"
                        alt="BPOM"
                        width="30"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-accentThrd">BPOM</h3>
                  </div>

                  <div className="">
                    <p className="text-sm font-medium text-quaternary lg:text-xs xl:text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ut ipsam aspernatur ex alias sequi. Ab recusandae
                      reiciendis eveniet. Repudiandae, laboriosam.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  rest: {
                    x: 5,
                    y: -5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    scaleX: 0,
                    scaleY: 1.5,
                  },
                  hover: {
                    x: -16,
                    y: 16,
                    backgroundColor: "rgba(74, 171, 0, 0.8)",
                    scaleX: 1,
                    scaleY: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="absolute bottom-0 z-1 hidden rounded-sm p-1 px-2 lg:block"
              >
                <motion.p
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  className="text-3xl font-bold text-white uppercase italic"
                >
                  Certified
                </motion.p>
              </motion.div>

              <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
            </motion.div>

            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="s-content relative w-fit lg:opacity-0"
            >
              <motion.div
                variants={{
                  rest: {
                    x: 0,
                    y: 0,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    scaleX: 0,
                    scaleY: 1.5,
                  },
                  hover: {
                    x: 33,
                    y: -33,
                    backgroundColor: "rgba(74, 171, 0, 0.7)",
                    scaleX: 1,
                    scaleY: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="absolute right-0 z-1 hidden h-25 w-25 items-center justify-center rounded-sm select-none lg:flex"
              >
                <motion.img
                  variants={{
                    rest: { opacity: 0, scaleX: 0, scaleY: 1.5 },
                    hover: { opacity: 1, scaleX: 1, scaleY: 1 },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  src="/sertificate/LeSOS.png"
                  alt="LeSOS"
                  width="70"
                />
              </motion.div>

              <motion.div
                variants={{
                  rest: { x: 0, y: 0, borderColor: "rgba(74, 171, 0)" },
                  hover: { x: 10, y: -10, borderColor: "rgba(77, 46, 0)" },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="relative h-55 w-full max-w-sm overflow-hidden rounded-sm border-2 border-accentThrd bg-tertiary shadow-lg"
              >
                <motion.div
                  variants={{
                    rest: { scale: 2.4 },
                    hover: { scale: 0 },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="absolute left-1/2 hidden h-54 w-54 -translate-x-1/2 items-center justify-center rounded-full bg-side lg:flex"
                >
                  <img src="/sertificate/LeSOS.png" alt="LeSOS" width="50" />
                </motion.div>

                <div className="mx-auto flex flex-col gap-5 p-5">
                  <div className="flex items-center gap-5 select-none">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
                      <img
                        src="/sertificate/LeSOS.png"
                        alt="LeSOS"
                        width="40"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-accentThrd">LeSOS</h3>
                  </div>

                  <div className="">
                    <p className="text-sm font-medium text-quaternary lg:text-xs xl:text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ut ipsam aspernatur ex alias sequi. Ab recusandae
                      reiciendis eveniet. Repudiandae, laboriosam.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  rest: {
                    x: 5,
                    y: -5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    scaleX: 0,
                    scaleY: 1.5,
                  },
                  hover: {
                    x: -16,
                    y: 16,
                    backgroundColor: "rgba(74, 171, 0, 0.8)",
                    scaleX: 1,
                    scaleY: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className="absolute bottom-0 z-1 hidden rounded-sm p-1 px-2 lg:block"
              >
                <motion.p
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  className="text-3xl font-bold text-white uppercase italic"
                >
                  Certified
                </motion.p>
              </motion.div>

              <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Sertificate //

// Review //
function Review() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.8 });

  useEffect(() => {
    if (!sectionRef.current) return;
    if (!isInView || window.innerWidth < 1024) return;

    // Title //
    animate(sectionRef.current.querySelector(".s-title"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 300,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".s-t-deco"), {
      opacity: [0, 1],
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 600,
      duration: 700,
      ease: "outElastic(1.19,0.66)",
    });

    animate(sectionRef.current.querySelector(".s-t-main"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [1.2, 1],
      delay: 800,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelectorAll(".s-t-m-deco"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      delay: 1200,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(sectionRef.current.querySelector(".deco-p1"), {
      x: [-100, 0],
      delay: 1500,
      duration: 600,
      ease: "outBounce",
    });
    animate(sectionRef.current.querySelector(".deco-p2"), {
      x: [100, 0],
      delay: 1500,
      duration: 600,
      ease: "outBounce",
    });
    // Title //

    // Reviews //
    animate(sectionRef.current.querySelectorAll(".r-content"), {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [1.5, 1],
      delay: stagger(200, { start: 1800 }),
      duration: 600,
      ease: "outElastic(1.86,1.23)",
    });
    // Reviews //
  });

  return (
    <div className="review" ref={sectionRef}>
      <section id="review" className="pt-36 pb-50">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-30 select-none">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="s-t-deco h-0.5 w-5 rounded-lg bg-side lg:opacity-0"></div>
                <h3 className="s-title text-sm font-light text-side uppercase lg:text-lg lg:opacity-0">
                  Reviews
                </h3>
                <div className="s-t-deco h-0.5 w-5 rounded-lg bg-side lg:opacity-0"></div>
              </div>

              <div className="flex items-center justify-center gap-7">
                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p1 flex gap-2 lg:opacity-0">
                    <div className="h-1 w-2.5 rounded-lg bg-side"></div>
                    <div className="h-1 w-5 rounded-lg bg-side"></div>
                    <div className="h-1 w-10 rounded-lg bg-side"></div>
                  </div>
                </div>

                <h2 className="s-t-main max-w-xl text-center text-3xl font-extrabold text-quaternary lg:max-w-2xl lg:text-5xl lg:opacity-0">
                  Ulasan Pelanggan Rejonik
                </h2>

                <div className="hidden md:block">
                  <div className="s-t-m-deco deco-p2 flex gap-2 lg:opacity-0">
                    <div className="h-1 w-10 rounded-lg bg-side"></div>
                    <div className="h-1 w-5 rounded-lg bg-side"></div>
                    <div className="h-1 w-2.5 rounded-lg bg-side"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-wrap items-center justify-center gap-15 lg:flex-row">
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="r-content relative h-fit w-fit lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0,
                      },
                    },
                    hover: {
                      x: 34,
                      y: -34,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: "rgba(74, 171, 0, 0.7)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95,
                      },
                    },
                  }}
                  className="absolute right-0 z-1 hidden h-27 w-27 rounded-sm lg:block"
                />

                <motion.div
                  variants={{
                    rest: {
                      borderColor: "rgba(74, 171, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0,
                      },
                    },
                    hover: {
                      x: 10,
                      y: -10,
                      borderColor: "rgba(77, 46, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.9,
                      },
                    },
                  }}
                  className="relative h-63 w-full max-w-sm overflow-hidden rounded-sm border-2 bg-tertiary"
                >
                  <motion.div
                    variants={{
                      rest: {
                        scale: 2.4,
                        transition: {
                          duration: 0.1,
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 150,
                          damping: 15,
                        },
                      },
                      hover: {
                        scale: 0,
                        transition: {
                          duration: 0.3,
                          ease: "linear",
                          delay: 0.9,
                        },
                      },
                    }}
                    className="absolute left-1/2 hidden h-62 w-62 -translate-x-1/2 items-center justify-center rounded-full bg-side lg:flex"
                  >
                    <motion.svg
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 50 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3,
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
                        rest: { x: 0 },
                        hover: { x: 33 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0,
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
                            ease: "easeIn",
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 0.1,
                          },
                        },
                        hover: {
                          scale: 2,
                          rotate: 360,
                          transition: {
                            duration: 0.3,
                            ease: "easeIn",
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 0.7,
                          },
                        },
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
                        rest: { x: 0 },
                        hover: { x: -33 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0,
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
                        rest: { x: 0 },
                        hover: { x: -50 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3,
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

                  <div className="mx-auto p-5">
                    <div className="mb-2">
                      <div className="mb-3 flex flex-row items-center gap-5 select-none">
                        <div className="h-15 w-15 overflow-hidden rounded-full bg-side">
                          <img
                            src="/review/bocchiencok.png"
                            alt="customer"
                            className="object-cover object-center"
                          />
                        </div>

                        <h2 className="text-lg font-bold text-accentThrd">
                          Bocchi Guy
                        </h2>
                      </div>

                      <div className="flex flex-row items-center gap-5">
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

                        <p className="text-sm font-medium text-accentThrd">
                          31/02/2045
                        </p>
                      </div>
                    </div>

                    <div className="max-w-sm select-none">
                      <p className="text-sm font-medium text-accentThrd">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloremque blanditiis porro omnis quaerat unde
                        fugit laudantium, totam, quos placeat magnam veniam
                        voluptatem optio et ipsum?
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
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0,
                      },
                    },
                    hover: {
                      x: -15,
                      y: 15,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: "rgba(74, 171, 0, 0.7)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95,
                      },
                    },
                  }}
                  className="absolute bottom-0 z-1 hidden h-13 w-40 rounded-sm lg:block"
                />

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </motion.div>

              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="r-content relative h-fit w-fit lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0,
                      },
                    },
                    hover: {
                      x: 34,
                      y: -34,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: "rgba(74, 171, 0, 0.7)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95,
                      },
                    },
                  }}
                  className="absolute right-0 z-1 hidden h-27 w-27 rounded-sm lg:block"
                />

                <motion.div
                  variants={{
                    rest: {
                      borderColor: "rgba(74, 171, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0,
                      },
                    },
                    hover: {
                      x: 10,
                      y: -10,
                      borderColor: "rgba(77, 46, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.9,
                      },
                    },
                  }}
                  className="relative h-63 w-full max-w-sm overflow-hidden rounded-sm border-2 bg-tertiary"
                >
                  <motion.div
                    variants={{
                      rest: {
                        scale: 2.4,
                        transition: {
                          duration: 0.1,
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 150,
                          damping: 15,
                        },
                      },
                      hover: {
                        scale: 0,
                        transition: {
                          duration: 0.3,
                          ease: "linear",
                          delay: 0.9,
                        },
                      },
                    }}
                    className="absolute left-1/2 hidden h-62 w-62 -translate-x-1/2 items-center justify-center rounded-full bg-side lg:flex"
                  >
                    <motion.svg
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 50 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3,
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
                        rest: { x: 0 },
                        hover: { x: 33 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0,
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
                            ease: "easeIn",
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 0.1,
                          },
                        },
                        hover: {
                          scale: 2,
                          rotate: 360,
                          transition: {
                            duration: 0.3,
                            ease: "easeIn",
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 0.7,
                          },
                        },
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
                        rest: { x: 0 },
                        hover: { x: -33 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0,
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
                        rest: { x: 0 },
                        hover: { x: -50 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3,
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

                  <div className="mx-auto p-5">
                    <div className="mb-2">
                      <div className="mb-3 flex flex-row items-center gap-5 select-none">
                        <div className="h-15 w-15 overflow-hidden rounded-full bg-side">
                          <img
                            src="/review/rio.png"
                            alt="customer"
                            className="object-cover object-center"
                          />
                        </div>

                        <h2 className="text-lg font-bold text-accentThrd">
                          Rio Guy
                        </h2>
                      </div>

                      <div className="flex flex-row items-center gap-5">
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

                        <p className="text-sm font-medium text-accentThrd">
                          31/02/2045
                        </p>
                      </div>
                    </div>

                    <div className="max-w-sm select-none">
                      <p className="text-sm font-medium text-accentThrd">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloremque blanditiis porro omnis quaerat unde
                        fugit laudantium, totam, quos placeat magnam veniam
                        voluptatem optio et ipsum?
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
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0,
                      },
                    },
                    hover: {
                      x: -15,
                      y: 15,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: "rgba(74, 171, 0, 0.7)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95,
                      },
                    },
                  }}
                  className="absolute bottom-0 z-1 hidden h-13 w-40 rounded-sm lg:block"
                />

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </motion.div>

              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="r-content relative h-fit w-fit lg:opacity-0"
              >
                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 1.5,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0,
                      },
                    },
                    hover: {
                      x: 34,
                      y: -34,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: "rgba(74, 171, 0, 0.7)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95,
                      },
                    },
                  }}
                  className="absolute right-0 z-1 hidden h-27 w-27 rounded-sm lg:block"
                />

                <motion.div
                  variants={{
                    rest: {
                      borderColor: "rgba(74, 171, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0,
                      },
                    },
                    hover: {
                      x: 10,
                      y: -10,
                      borderColor: "rgba(77, 46, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.9,
                      },
                    },
                  }}
                  className="relative h-63 w-full max-w-sm overflow-hidden rounded-sm border-2 bg-tertiary"
                >
                  <motion.div
                    variants={{
                      rest: {
                        scale: 2.4,
                        transition: {
                          duration: 0.1,
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 150,
                          damping: 15,
                        },
                      },
                      hover: {
                        scale: 0,
                        transition: {
                          duration: 0.3,
                          ease: "linear",
                          delay: 0.9,
                        },
                      },
                    }}
                    className="absolute left-1/2 hidden h-62 w-62 -translate-x-1/2 items-center justify-center rounded-full bg-side lg:flex"
                  >
                    <motion.svg
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 50 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3,
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
                        rest: { x: 0 },
                        hover: { x: 33 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0,
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
                            ease: "easeIn",
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 0.1,
                          },
                        },
                        hover: {
                          scale: 2,
                          rotate: 360,
                          transition: {
                            duration: 0.3,
                            ease: "easeIn",
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 0.7,
                          },
                        },
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
                        rest: { x: 0 },
                        hover: { x: -33 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0,
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
                        rest: { x: 0 },
                        hover: { x: -50 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.3,
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

                  <div className="mx-auto p-5">
                    <div className="mb-2">
                      <div className="mb-3 flex flex-row items-center gap-5 select-none">
                        <div className="h-15 w-15 overflow-hidden rounded-full bg-side">
                          <img
                            src="/review/bocchiencok.png"
                            alt="customer"
                            className="object-cover object-center"
                          />
                        </div>

                        <h2 className="text-lg font-bold text-accentThrd">
                          Bocchi Guy
                        </h2>
                      </div>

                      <div className="flex flex-row items-center gap-5">
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

                        <p className="text-sm font-medium text-accentThrd">
                          31/02/2045
                        </p>
                      </div>
                    </div>

                    <div className="max-w-sm select-none">
                      <p className="text-sm font-medium text-accentThrd">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloremque blanditiis porro omnis quaerat unde
                        fugit laudantium, totam, quos placeat magnam veniam
                        voluptatem optio et ipsum?
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
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0,
                      },
                    },
                    hover: {
                      x: -15,
                      y: 15,
                      scaleX: 1,
                      scaleY: 1,
                      backgroundColor: "rgba(74, 171, 0, 0.7)",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.95,
                      },
                    },
                  }}
                  className="absolute bottom-0 z-1 hidden h-13 w-40 rounded-sm lg:block"
                />

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Review //

// Order //
function Order() {
  return (
    <div className="order">
      <section
        id="pesan"
        className="bg-linear-to-r from-primary to-side pt-20 pb-20"
      >
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="text-center select-none">
                <h2 className="mb-10 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
                  Tertarik dengan
                  <span className="ml-2.5 bg-linear-to-r from-accentScnd to-accent bg-clip-text text-transparent">
                    Rejonik
                  </span>
                  ?
                </h2>

                <div className="text-xs font-semibold text-white md:text-sm lg:text-base">
                  <p>Anda dapat menikmati beras alami dan sehat</p>
                  <p>Segera pesan beras Rejonik untuk keluarga sehat anda</p>
                </div>
              </div>

              <div className="flex flex-col gap-5 text-center select-none">
                <p className="text-xl font-bold text-white">
                  Pesan Sekarang Melalui :
                </p>

                <div className="flex flex-row gap-5">
                  <a href="#">
                    <motion.button
                      initial={{
                        scale: 1,
                        backgroundColor: "#4AAB00",
                        borderColor: "#ffffff",
                        color: "#ffffff",
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#FFE0A1",
                        borderColor: "#4D2E00",
                        color: "#4D2E00",
                      }}
                      whileTap={{
                        scaleX: 0.9,
                        scaleY: 1.2,
                      }}
                      transition={{
                        duration: 0.1,
                        type: "spring",
                        stiffness: 150,
                        damping: 15,
                      }}
                      className="cursor-pointer rounded-full border-2 p-2 px-5 font-bold"
                    >
                      Situs Resmi
                    </motion.button>
                  </a>

                  <a href="#">
                    <motion.button
                      initial={{
                        scale: 1,
                        backgroundColor: "#EE4D2D",
                        borderColor: "#ffffff",
                        color: "#ffffff",
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#ffffff",
                        borderColor: "#EE4D2D",
                        color: "#EE4D2D",
                      }}
                      whileTap={{
                        scaleX: 0.9,
                        scaleY: 1.2,
                      }}
                      transition={{
                        duration: 0.1,
                        type: "spring",
                        stiffness: 150,
                        damping: 15,
                      }}
                      className="flex cursor-pointer items-center gap-2 rounded-full border-2 p-2 px-5 font-bold"
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
  );
}
// Order //