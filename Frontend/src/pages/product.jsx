import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

export default function Product() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Guide />
      <Catalogue />
      <Nutrition />
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
    animate(heroRef.current.querySelector(".h-sertify"), {
      scaleX: [0, 1],
      delay: 300,
      duration: 600,
      ease: "outElastic(1,0.7)",
    });
    animate(heroRef.current.querySelectorAll(".t-main"), {
      x: [-500, 0],
      scaleX: [0.3, 0.9, 1],
      delay: stagger(300, { start: 600 }),
      duration: 1600,
      ease: "outElastic(1,0.67)",
    });
    animate(heroRef.current.querySelector(".t-deco"), {
      scaleY: [0, 1],
      delay: 2600,
      duration: 600,
      ease: "outBounce",
    });
    animate(heroRef.current.querySelector(".h-text"), {
      scaleY: [0, 1],
      delay: 1600,
      duration: 600,
      ease: "outElastic(1,1)",
    });
    animate(heroRef.current.querySelectorAll(".h-deco1"), {
      scaleY: [1.5, 1],
      scaleX: [0, 1],
      delay: stagger(300, { start: 1200 }),
      duration: 600,
      ease: "outElastic(1,0.47)",
    });
    animate(heroRef.current.querySelectorAll(".h-deco2"), {
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: stagger(300, { start: 2000 }),
      duration: 600,
      ease: "outElastic(1,0.47)",
    });

    animate(heroRef.current.querySelector(".see-pro"), {
      scaleY: [0, 1],
      scaleX: [2, 1],
      delay: 2400,
      duration: 600,
      ease: "outElastic(1,1)",
    });
    // Title //
  });

  return (
    <div className="hero" ref={heroRef}>
      <section
        id="home"
        className="bg-primary bg-[url(/brand/padi-geming.png)] pt-90 pb-30"
      >
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="relative flex justify-start">
              <div className="relative z-2 flex flex-col">
                <div className="flex flex-col gap-5">
                  <div className="h-sertify w-fit rounded-full bg-white/20 p-0.5 px-3 outline-2 outline-white select-none">
                    <h3 className="text-sm font-medium text-white uppercase">
                      100% Tersertifikasi Organik Indonesia
                    </h3>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex gap-2">
                      <div className="t-deco h-full w-1 rounded-full bg-side" />

                      <div className="w-full max-w-2xl">
                        <div className="overflow-hidden text-5xl leading-13 font-extrabold text-white">
                          <span className="t-main block">
                            Beras Sehat Penuh Berkah
                          </span>
                          <span className="t-main block">
                            Langsung Dari Sawah
                          </span>
                          <span className="t-main block">Sumberejo</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full max-w-lg">
                      <p className="h-text text-sm font-medium text-white">
                        Koleksi varian beras organik terbaik hasil keringat para
                        petani mitra binaan di Desa Sumberejo. Tanpa Kimia,
                        serat nutrisi alami, dikemas higienis untuk kesehatan
                        keluarga Anda.
                      </p>
                    </div>
                  </div>

                  <a href="#">
                    <motion.button
                      className="see-pro cursor-pointer rounded-full bg-side p-1 px-4 font-medium text-white select-none"
                      whileHover={{
                        scale: 1.1,
                      }}
                      whileTap={{
                        scaleY: 1.3,
                        scaleX: 0.9,
                      }}
                      transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                      }}
                    >
                      Lihat Produk Unggulan
                    </motion.button>
                  </a>
                </div>
              </div>

              <div className="h-deco1 absolute top-7 left-0 hidden h-70 w-150 -translate-x-10 rounded-sm bg-primary/50 lg:block" />
              <div className="h-deco2 absolute bottom-0 hidden h-40 w-60 -translate-x-5 translate-y-10 rounded-sm bg-tertiary/30 lg:block" />
              <div className="h-deco2 absolute top-0 left-1/4 hidden h-40 w-60 translate-x-5 -translate-y-10 rounded-sm bg-tertiary/30 lg:block" />
              <div className="h-deco1 absolute top-0 hidden h-20 w-60 -translate-x-5 -translate-y-7 rounded-sm bg-side/40 lg:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Hero //

// Guide //
function Guide() {
  return (
    <div className="guide">
      <section id="panduan" className="pt-36 pb-32">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-20 select-none">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                <h3 className="text-sm font-light text-side uppercase">
                  Guide
                </h3>
                <div className="h-0.5 w-5 rounded-lg bg-side"></div>
              </div>

              <div className="flex items-center justify-center gap-7">
                <div className="hidden items-center gap-3 lg:flex">
                  <div className="h-1 w-5 rounded-full bg-side" />
                  <div className="h-1 w-10 rounded-full bg-side" />
                  <div className="h-5 w-5 rounded-full bg-side" />
                </div>

                <h2 className="max-w-lg text-center text-3xl font-extrabold text-quaternary lg:max-w-xl lg:text-5xl">
                  Panduan Memesan Beras Rejonik
                </h2>

                <div className="hidden items-center gap-3 lg:flex">
                  <div className="h-5 w-5 rounded-full bg-side" />
                  <div className="h-1 w-10 rounded-full bg-side" />
                  <div className="h-1 w-5 rounded-full bg-side" />
                </div>
              </div>

              <div className="mt-5 text-center text-xs lg:text-sm">
                <p className="text-primary">
                  Ikuti panduan berikut untuk memesan beras organik dari Rejonik
                  dengan cepat dan aman.
                </p>
              </div>
            </div>

            <div className="mt-20 flex flex-wrap items-center justify-center 2xl:flex-row 2xl:flex-nowrap 2xl:gap-1">
              <div className="w-full lg:w-1/2 2xl:w-fit">
                <div className="mx-auto my-5 flex h-50 max-w-xl flex-col gap-5 rounded-sm bg-tertiary p-7 outline-2 outline-accentThrd 2xl:mx-0 2xl:bg-transparent 2xl:outline-0">
                  <div className="flex items-center gap-5">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side select-none">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>

                    <div className="flex max-w-lg flex-col select-none">
                      <div className="text-xl font-extrabold text-quaternary">
                        <h4>Pilih Varian Beras</h4>
                      </div>

                      <div className="text-xs font-medium text-slate-500">
                        <p>Pilih varian beras seauai keinginan</p>
                      </div>
                    </div>
                  </div>

                  <div className="font-medium text-accentThrd select-none">
                    <p className="text-sm">
                      Lihat katalog beras yang kami punya dan pilih varian beras
                      yang diinginkan sesuai selera.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden h-40 w-1 rounded-full bg-accentThrd 2xl:block" />

              <div className="w-full lg:w-1/2 2xl:w-fit">
                <div className="mx-auto my-5 flex h-50 max-w-xl flex-col gap-5 rounded-sm bg-tertiary p-7 outline-2 outline-accentThrd 2xl:mx-0 2xl:bg-transparent 2xl:outline-0">
                  <div className="flex items-center gap-5">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side select-none">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>

                    <div className="flex max-w-lg flex-col select-none">
                      <div className="text-xl font-extrabold text-quaternary">
                        <h4>Tentukan Jumlah</h4>
                      </div>

                      <div className="text-xs font-medium text-slate-500">
                        <p>Atur kuantitas sesuai kebutuhan</p>
                      </div>
                    </div>
                  </div>

                  <div className="font-medium text-accentThrd select-none">
                    <p className="text-sm">
                      Tentukan jumlah kemasan yang akan dibeli, seperti 1, 2,
                      atau lebih sesuai kebutuhan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden h-40 w-1 rounded-full bg-accentThrd 2xl:block" />

              <div className="w-full lg:w-1/2 2xl:w-fit">
                <div className="mx-auto my-5 flex h-50 max-w-xl flex-col gap-5 rounded-sm bg-tertiary p-7 outline-2 outline-accentThrd 2xl:mx-0 2xl:bg-transparent 2xl:outline-0">
                  <div className="flex items-center gap-5">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side select-none">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>

                    <div className="flex max-w-lg flex-col select-none">
                      <div className="text-lg font-extrabold text-quaternary">
                        <h4>Konfirmasi Via WhatsApp</h4>
                      </div>

                      <div className="text-xs font-medium text-slate-500">
                        <p>Konfirmasi pesanan melalui WhatsApp</p>
                      </div>
                    </div>
                  </div>

                  <div className="font-medium text-accentThrd select-none">
                    <p className="text-sm">
                      Hubungi tim kami untuk konfirmasi pesanan dan memastikan
                      stok serta alamat pengiriman.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden h-40 w-1 rounded-full bg-accentThrd 2xl:block" />

              <div className="w-full lg:w-1/2 2xl:w-fit">
                <div className="mx-auto my-5 flex h-50 max-w-xl flex-col gap-5 rounded-sm bg-tertiary p-7 outline-2 outline-accentThrd 2xl:mx-0 2xl:bg-transparent 2xl:outline-0">
                  <div className="flex items-center gap-5">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side select-none">
                      <span className="text-3xl font-bold text-white">4</span>
                    </div>

                    <div className="flex max-w-lg flex-col select-none">
                      <div className="text-xl font-extrabold text-quaternary">
                        <h4>Terima di Rumah</h4>
                      </div>

                      <div className="text-xs font-medium text-slate-500">
                        <p>Beras dikirim ke rumah Anda</p>
                      </div>
                    </div>
                  </div>

                  <div className="font-medium text-accentThrd select-none">
                    <p className="text-sm">
                      Pesanan Anda akan langsung dikirim ke rumah Anda dengan
                      jasa pengiriman cepat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Guide //

// Catalogue //
function Catalogue() {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="catalogue">
      <section id="katalog" className="pt-36 pb-100">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-20 select-none">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                <h3 className="text-sm font-light text-side uppercase">
                  Catalogue
                </h3>
                <div className="h-0.5 w-5 rounded-lg bg-side"></div>
              </div>

              <div className="flex items-center justify-center gap-7">
                <div className="hidden items-center gap-3 lg:flex">
                  <div className="h-1 w-5 rounded-full bg-side" />
                  <div className="h-1 w-10 rounded-full bg-side" />
                  <div className="h-5 w-5 rounded-full bg-side" />
                </div>

                <h2 className="max-w-lg text-center text-3xl font-extrabold text-quaternary lg:max-w-xl lg:text-5xl">
                  Katalog Beras Rejonik
                </h2>

                <div className="hidden items-center gap-3 lg:flex">
                  <div className="h-5 w-5 rounded-full bg-side" />
                  <div className="h-1 w-10 rounded-full bg-side" />
                  <div className="h-1 w-5 rounded-full bg-side" />
                </div>
              </div>

              <div className="mt-5 text-center text-xs lg:text-sm">
                <p className="text-primary">
                  Pilih varian terbaik yang cocok dengan selera dan kebutuhan
                  nutrisi harian keluarga tercinta Anda.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-80 lg:flex-row lg:gap-10">
              <div className="relative">
                <motion.div
                  className="absolute -translate-x-1/2 overflow-hidden rounded-sm bg-tertiary outline-2 outline-accentThrd lg:right-0"
                  initial="rest"
                  whileHover={isLg ? "hover" : "rest"}
                  animate="rest"
                  variants={
                    isLg
                      ? {
                          rest: {
                            height: "220px",
                            padding: "0px",
                          },
                          hover: {
                            height: "300px",
                            padding: "10px",
                          },
                        }
                      : {
                          rest: {
                            height: "300px",
                            padding: "10px",
                          },
                        }
                  }
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                >
                  <motion.div
                    variants={
                      isLg
                        ? {
                            rest: {
                              borderRadius: "0px",
                            },
                            hover: {
                              borderRadius: "4px",
                            },
                          }
                        : {
                            rest: {
                              borderRadius: "4px",
                            },
                          }
                    }
                    className="relative mb-3 h-55 w-80 overflow-hidden outline-2 outline-accentThrd select-none"
                  >
                    <div className="absolute mt-2 ml-2 flex flex-row gap-2">
                      <div className="flex items-center rounded-full bg-primary p-0.5 px-3">
                        <span className="text-sm font-medium text-white">
                          Organik
                        </span>
                      </div>

                      <div className="flex items-center rounded-full bg-side p-0.5 px-3">
                        <span className="text-sm font-medium text-white">
                          Tersedia
                        </span>
                      </div>
                    </div>

                    <img
                      src="/product/Original.png"
                      alt="Original"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-1 select-none">
                      <h4 className="text-xl font-bold text-side text-shadow-lg">
                        Beras Original
                      </h4>

                      <p className="text-sm font-medium text-slate-500">1 Kg</p>
                    </div>

                    <Link>
                      <motion.button
                        initial="restBtn"
                        whileHover="hoverBtn"
                        animate="restBtn"
                        variants={{
                          restBtn: {
                            color: "#4D2E00",
                          },
                          hoverBtn: {
                            color: "#FFFFFF",
                          },
                        }}
                        className="relative cursor-pointer overflow-hidden rounded-full bg-white p-1 px-3 ring-2 ring-accentThrd select-none"
                      >
                        <span className="relative z-1 font-semibold">
                          Pesan
                        </span>

                        <motion.div
                          className="absolute top-0 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-accentThrd"
                          variants={{
                            restBtn: {
                              scale: 0,
                            },
                            hoverBtn: {
                              scale: 2.4,
                            },
                          }}
                          transition={{
                            duration: 0.1,
                          }}
                        />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  className="absolute -translate-x-1/2 overflow-hidden rounded-sm bg-tertiary outline-2 outline-accentThrd"
                  initial="rest"
                  whileHover={isLg ? "hover" : "rest"}
                  animate="rest"
                  variants={
                    isLg
                      ? {
                          rest: {
                            height: "220px",
                            padding: "0px",
                          },
                          hover: {
                            height: "300px",
                            padding: "10px",
                          },
                        }
                      : {
                          rest: {
                            height: "300px",
                            padding: "10px",
                          },
                        }
                  }
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                >
                  <motion.div
                    variants={
                      isLg
                        ? {
                            rest: {
                              borderRadius: "0px",
                            },
                            hover: {
                              borderRadius: "4px",
                            },
                          }
                        : {
                            rest: {
                              borderRadius: "4px",
                            },
                          }
                    }
                    className="relative mb-3 h-55 w-80 overflow-hidden outline-2 outline-accentThrd select-none"
                  >
                    <div className="absolute mt-2 ml-2 flex flex-row gap-2">
                      <div className="flex items-center rounded-full bg-fuchsia-400 p-0.5 px-3">
                        <span className="text-sm font-medium text-white">
                          Organik
                        </span>
                      </div>

                      <div className="flex items-center rounded-full bg-red-500 p-0.5 px-3">
                        <span className="text-sm font-medium text-white">
                          Stok Terbatas
                        </span>
                      </div>
                    </div>

                    <img
                      src="/product/Aromatik.png"
                      alt="Original"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-1 select-none">
                      <h4 className="text-xl font-bold text-fuchsia-400 text-shadow-lg">
                        Beras Aromatik
                      </h4>

                      <p className="text-sm font-medium text-slate-500">1 Kg</p>
                    </div>

                    <Link>
                      <motion.button
                        initial="restBtn"
                        whileHover="hoverBtn"
                        animate="restBtn"
                        variants={{
                          restBtn: {
                            color: "#4D2E00",
                          },
                          hoverBtn: {
                            color: "#FFFFFF",
                          },
                        }}
                        className="relative cursor-pointer overflow-hidden rounded-full bg-white p-1 px-3 ring-2 ring-accentThrd select-none"
                      >
                        <span className="relative z-1 font-semibold">
                          Pesan
                        </span>

                        <motion.div
                          className="absolute top-0 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-accentThrd"
                          variants={{
                            restBtn: {
                              scale: 0,
                            },
                            hoverBtn: {
                              scale: 2.4,
                            },
                          }}
                          transition={{
                            duration: 0.1,
                          }}
                        />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  className="absolute -translate-x-1/2 overflow-hidden rounded-sm bg-tertiary outline-2 outline-accentThrd lg:translate-x-1/2"
                  initial="rest"
                  whileHover={isLg ? "hover" : "rest"}
                  animate="rest"
                  variants={
                    isLg
                      ? {
                          rest: {
                            height: "220px",
                            padding: "0px",
                          },
                          hover: {
                            height: "300px",
                            padding: "10px",
                          },
                        }
                      : {
                          rest: {
                            height: "300px",
                            padding: "10px",
                          },
                        }
                  }
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                >
                  <motion.div
                    variants={
                      isLg
                        ? {
                            rest: {
                              borderRadius: "0px",
                            },
                            hover: {
                              borderRadius: "4px",
                            },
                          }
                        : {
                            rest: {
                              borderRadius: "4px",
                            },
                          }
                    }
                    className="relative mb-3 h-55 w-80 overflow-hidden outline-2 outline-accentThrd select-none"
                  >
                    <div className="absolute mt-2 ml-2 flex flex-row gap-2">
                      <div className="flex items-center rounded-full bg-[#691500] p-0.5 px-3">
                        <span className="text-sm font-medium text-white">
                          Organik
                        </span>
                      </div>

                      <div className="flex items-center rounded-full bg-side p-0.5 px-3">
                        <span className="text-sm font-medium text-white">
                          Tersedia
                        </span>
                      </div>
                    </div>

                    <img
                      src="/product/Merah.png"
                      alt="Original"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-1 select-none">
                      <h4 className="text-xl font-bold text-[#691500] text-shadow-lg">
                        Beras Merah
                      </h4>

                      <p className="text-sm font-medium text-slate-500">1 Kg</p>
                    </div>

                    <Link>
                      <motion.button
                        initial="restBtn"
                        whileHover="hoverBtn"
                        animate="restBtn"
                        variants={{
                          restBtn: {
                            color: "#4D2E00",
                          },
                          hoverBtn: {
                            color: "#FFFFFF",
                          },
                        }}
                        className="relative cursor-pointer overflow-hidden rounded-full bg-white p-1 px-3 ring-2 ring-accentThrd select-none"
                      >
                        <span className="relative z-1 font-semibold">
                          Pesan
                        </span>

                        <motion.div
                          className="absolute top-0 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-accentThrd"
                          variants={{
                            restBtn: {
                              scale: 0,
                            },
                            hoverBtn: {
                              scale: 2.4,
                            },
                          }}
                          transition={{
                            duration: 0.1,
                          }}
                        />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Catalogue //

// Nutrition Table //
function Nutrition() {
  return (
    <div className="nutrition">
      <section id="nutrisi" className="pt-36 pb-32">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-20 select-none">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                <h3 className="text-sm font-light text-side uppercase">
                  Nutrition Table
                </h3>
                <div className="h-0.5 w-5 rounded-lg bg-side"></div>
              </div>

              <div className="flex items-center justify-center gap-7">
                <div className="hidden items-center gap-3 lg:flex">
                  <div className="h-1 w-5 rounded-full bg-side" />
                  <div className="h-1 w-10 rounded-full bg-side" />
                  <div className="h-5 w-5 rounded-full bg-side" />
                </div>

                <h2 className="max-w-lg text-center text-3xl font-extrabold text-quaternary lg:max-w-xl lg:text-5xl">
                  Tabel Nutrisi Setiap Beras Rejonik
                </h2>

                <div className="hidden items-center gap-3 lg:flex">
                  <div className="h-5 w-5 rounded-full bg-side" />
                  <div className="h-1 w-10 rounded-full bg-side" />
                  <div className="h-1 w-5 rounded-full bg-side" />
                </div>
              </div>

              <div className="mt-5 text-center text-xs lg:text-sm">
                <p className="text-primary">
                  Anda dapat melihat kandungan nutrisi dari beras yang kami
                  jual.
                </p>
              </div>
            </div>

            <div className="mx-auto">
              <table className="mx-auto table-fixed rounded-lg overflow-hidden outline-2 outline-quaternary">
                <thead className="bg-primary text-xl font-bold text-white select-none">
                  <tr>
                    <th>Varian Beras</th>
                    <th>Kalori (Per 100g)</th>
                    <th>Kandungan Serat</th>
                    <th>Indeks Glikemik (GI)</th>
                    <th>Saran Penggunaan</th>
                    <th>Manfaat</th>
                  </tr>
                </thead>

                <tbody className="font-medium text-quaternary">
                  <tr>
                    <td>Beras Original</td>
                    <td>180 kkal</td>
                    <td>Sedang</td>
                    <td className="font-bold text-accentThrd">Sedang</td>
                    <td>Sehari-hari</td>
                    <td>Sumber energi, mudah dicerna, bebas gluten, kandungan mineral</td>
                  </tr>

                  <tr>
                    <td>Beras Merah</td>
                    <td>110 kkal</td>
                    <td>Sangat Tinggi</td>
                    <td className="font-bold text-side">Rendah</td>
                    <td>Diet</td>
                    <td>Kaya akan serat, antioksidan, menjaga kesehatan jantung, membantu menurunkan berat badan, mengontrol gula darah, melancarkan pencernaan, menangkal radikal bebas</td>
                  </tr>

                  <tr>
                    <td>Beras Aromatik</td>
                    <td>175 kkal</td>
                    <td>Sedang</td>
                    <td className="font-bold text-accentThrd">Sedang</td>
                    <td>Hidangan Spesial</td>
                    <td>Menambah nafsu makan, sumber energi, membantu pencernaan, efek menenangkan, potensi kontrol gula darah</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Nutrition Table //
