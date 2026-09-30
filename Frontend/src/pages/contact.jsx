import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Order from "./components/order-section.jsx";

export default function Contact() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Content />
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

    animate(heroRef.current.querySelector(".h-t-bg"), {
      x: [-900, 10],
      delay: 500,
      duration: 900,
      ease: "outElastic(1,1)",
    });

    animate(heroRef.current.querySelector(".h-title"), {
      x: [-750, 0],
      scaleX: [0.4, 0.8, 1],
      delay: 1500,
      duration: 800,
      ease: "outElastic(1,1)",

      onComplete: () => {
        animate(heroRef.current.querySelector(".h-t-aper"), {
          scaleX: [1, 0],
          duration: 500,
          ease: "inOutElastic(1,0.77)",
        });
      },
    });

    animate(heroRef.current.querySelector(".h-t-deco"), {
      scaleY: [0, 1],
      delay: 2800,
      duration: 600,
      ease: "outBounce",
    });

    animate(heroRef.current.querySelector(".h-t-scd"), {
      scaleX: [0, 1],
      delay: 2000,
      duration: 600,
      ease: "outElastic(0.85,0.7)",
    });

    animate(heroRef.current.querySelector(".h-t-l"), {
      scaleX: [0, 1],
      delay: 2300,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(heroRef.current.querySelector(".h-t-p"), {
      x: [-700, 0],
      delay: 2900,
      duration: 700,
      ease: "outElastic(1,0.76)",
    });
  });

  return (
    <div className="hero relative h-fit" ref={heroRef}>
      <div className="h-t-bg absolute top-1/2 h-130 w-full -translate-y-1/3 scale-x-150 bg-side/40 lg:w-1/2 lg:rounded-r-full xl:-translate-x-50" />

      <section
        id="hero"
        className="bg-[url(/contact/Telepon_Merah.png)] bg-cover bg-right lg:bg-center pt-90 pb-40"
      >
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="relative z-1 flex">
              <div className="flex flex-col justify-center gap-4">
                <div className="h-t-scd w-fit rounded-full bg-tertiary/40 p-0.5 px-3 outline-2 outline-accentThrd select-none">
                  <h1 className="font-semibold text-accentThrd">
                    Hubungi Kami
                  </h1>
                </div>

                <div className="flex flex-col justify-center gap-5">
                  <div className="flex items-center gap-2">
                    <div className="h-t-deco h-20 w-1 rounded-full bg-side" />

                    <span className="h-title relative h-fit w-fit max-w-2xl text-4xl font-extrabold text-quaternary xl:text-5xl">
                      Punya Pertanyaan? Kami Ada di Sini untuk Anda
                      <div className="h-t-aper absolute top-0 hidden h-full w-full rounded-sm bg-side lg:block" />
                    </span>
                  </div>

                  <div className="h-t-l h-1 w-1/2 rounded-full bg-primary/50" />

                  <div className="max-w-lg">
                    <p className="h-t-p font-medium text-accentThrd">
                      Kami akan memberi layanan terbaik bagi pelanggan dan
                      menjamin produk berkualitas tanpa adanya masalah pada
                      produk kami.
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
// Hero //

// Content //
function Content() {
  return (
    <div className="content">
      <section id="kontak" className="pt-36 pb-36">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mb-20 flex h-fit flex-col items-center justify-center gap-5 text-center select-none lg:flex-row lg:justify-between lg:gap-10 lg:text-start">
              <div className="flex flex-col items-center justify-center lg:items-start lg:gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-2.5 rounded-full bg-side" />
                  <h3 className="text-side uppercase">Contact Us</h3>
                  <div className="h-1 w-2.5 rounded-full bg-side" />
                </div>

                <div className="w-fit max-w-2xl">
                  <h2 className="text-3xl font-extrabold text-quaternary xl:text-4xl">
                    Butuh Bantuan, Konsultasi, atau Informasi Lebih Lanjut?
                  </h2>
                </div>
              </div>

              <div className="hidden h-25 w-1 rounded-full bg-side lg:block" />

              <div className="lg:max-w-lg xl:max-w-2xl">
                <p className="text-xs font-medium text-primary lg:text-sm">
                  Kami siap membantu Anda mulai dari pertanyaan produk,
                  ketersediaan stok, kerja sama distribusi, hingga konsultasi
                  pengiriman. Pilih saluran yang paling nyaman untuk
                  berkomunikasi dengan tim kami.
                </p>
              </div>
            </div>

            <div className="mb-10 flex flex-col items-center justify-center gap-7 lg:flex-row lg:items-start">
              <div className="relative h-fit w-fit">
                <div className="max-w-sm translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                  <div className="mb-5 flex flex-col items-start justify-center gap-3">
                    <div className="flex justify-center gap-5">
                      <div className="flex h-13 w-13 items-center justify-center rounded-full bg-side">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2c-3.3 0-6 2.7-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z"
                            fill="none"
                            stroke="#FFFFFF"
                            stroke-width="1.8"
                            stroke-linejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="8"
                            r="2"
                            fill="none"
                            stroke="#FFFFFF"
                            stroke-width="1.8"
                          />
                        </svg>
                      </div>

                      <div className="flex flex-col justify-center gap-1 select-none">
                        <h4 className="text-lg font-bold text-accentThrd">
                          Kantor & Gudang
                        </h4>
                        <p className="text-xs font-medium text-side uppercase">
                          Alamat Utama
                        </p>
                      </div>
                    </div>

                    <div className="max-w-sm">
                      <p className="text-[10px] text-primary">
                        Desa Krajan Mimbaan, Kec. Panji, Kab. Situbondo, Jawa
                        Timur 68323
                      </p>
                    </div>
                  </div>

                  <table className="mb-3 w-full table-fixed overflow-hidden rounded-md bg-white outline-2 outline-primary">
                    <tbody>
                      <tr className="text-xs outline-1 outline-primary">
                        <td className="truncate p-2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c0.3-0.3 0.7-0.4 1-0.2 1.1 0.4 2.3 0.6 3.6 0.6 0.6 0 1 0.4 1 1V20c0 0.6-0.4 1-1 1C10.6 21 3 13.4 3 4c0-0.6 0.4-1 1-1h3.5c0.6 0 1 0.4 1 1 0 1.3 0.2 2.5 0.6 3.6 0.1 0.3 0 0.7-0.2 1L6.6 10.8z"
                              fill="#4AAB00"
                            />
                          </svg>
                        </td>
                        <td className="truncate p-2 font-medium text-quaternary">
                          080-5432-6468
                        </td>
                      </tr>
                      <tr className="text-xs outline-1 outline-primary">
                        <td className="truncate p-2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="2"
                              y="5"
                              width="20"
                              height="14"
                              rx="2"
                              fill="none"
                              stroke="#4AAB00"
                              stroke-width="1.8"
                            />
                            <path
                              d="M3 6.5l9 6.5 9-6.5"
                              fill="none"
                              stroke="#4AAB00"
                              stroke-width="1.8"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </td>
                        <td className="truncate p-2 font-medium text-quaternary">
                          berasrejonik@gmail.com
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mb-3 text-center select-none">
                    <p className="font-medium text-side uppercase">
                      Jam Operasional
                    </p>
                  </div>

                  <table className="w-full table-auto overflow-hidden rounded-md bg-white outline-2 outline-primary">
                    <tbody>
                      <tr className="text-right text-xs outline-1 outline-primary">
                        <td className="truncate p-2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              fill="none"
                              stroke="#4AAB00"
                              stroke-width="1.8"
                            />
                            <path
                              d="M12 7v5l3.5 2"
                              fill="none"
                              stroke="#4AAB00"
                              stroke-width="1.8"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </td>
                        <td className="truncate p-2 font-medium text-quaternary">
                          Senin - Jumat, 08.00 - 17.00 WIB
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="max-w-sm translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                  <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col items-start justify-center gap-3">
                      <div className="flex justify-center gap-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-side">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="2"
                              y="5"
                              width="20"
                              height="14"
                              rx="2"
                              fill="none"
                              stroke="#FFFFFF"
                              stroke-width="1.8"
                            />
                            <path
                              d="M3 6.5l9 6.5 9-6.5"
                              fill="none"
                              stroke="#FFFFFF"
                              stroke-width="1.8"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>

                        <div className="flex flex-col justify-center gap-1 select-none">
                          <h4 className="text-lg font-bold text-accentThrd">
                            Kirim Pesan
                          </h4>

                          <p className="text-xs text-side uppercase">
                            Contact Form
                          </p>
                        </div>
                      </div>

                      <div className="max-w-sm select-none">
                        <p className="text-[10px] font-medium text-primary">
                          Isi form di bawah ini untuk pertanyaan produk,
                          ketersediaan stok, kerja sama, atau kebutuhan
                          informasi lainnya. Tim kami akan merespons Anda
                          secepatnya melalui email atau telepon.
                        </p>
                      </div>
                    </div>

                    <div className="text-2xl font-black text-yellow-600 select-none">
                      Waiting for the Backend
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>

            <div className="mx-auto mb-7 flex max-w-200 flex-col items-center justify-center gap-10">
              <div className="relative h-fit w-full">
                <div className="w-full translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                  <div className="flex flex-col items-start justify-center gap-5">
                    <h4 className="text-2xl font-extrabold text-accentThrd select-none">
                      Informasi Tambahan
                    </h4>

                    <div className="flex flex-col items-start justify-center gap-5">
                      <table className="w-full table-fixed overflow-hidden rounded-md bg-white outline-2 outline-primary">
                        <tbody>
                          <tr className="outline-1 outline-primary">
                            <td className="flex flex-row items-center gap-2 p-2 px-3 select-none">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="2"
                                  y="5"
                                  width="20"
                                  height="14"
                                  rx="2"
                                  fill="none"
                                  stroke="#4AAB00"
                                  stroke-width="1.8"
                                />
                                <path
                                  d="M3 6.5l9 6.5 9-6.5"
                                  fill="none"
                                  stroke="#4AAB00"
                                  stroke-width="1.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <span className="font-bold text-accentThrd">
                                Respon Email
                              </span>
                            </td>
                            <td className="p-2 px-3">
                              <span className="text-xs font-medium text-quaternary">
                                Respon akan dikirm sekitar 1 - 2 hari kerja
                              </span>
                            </td>
                          </tr>
                          <tr className="outline-1 outline-primary">
                            <td className="flex flex-row items-center gap-2 p-2 px-3 select-none">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c0.3-0.3 0.7-0.4 1-0.2 1.1 0.4 2.3 0.6 3.6 0.6 0.6 0 1 0.4 1 1V20c0 0.6-0.4 1-1 1C10.6 21 3 13.4 3 4c0-0.6 0.4-1 1-1h3.5c0.6 0 1 0.4 1 1 0 1.3 0.2 2.5 0.6 3.6 0.1 0.3 0 0.7-0.2 1L6.6 10.8z"
                                  fill="#4AAB00"
                                />
                              </svg>
                              <span className="font-bold text-accentThrd">
                                Prioritas
                              </span>
                            </td>
                            <td className="p-2 px-3">
                              <span className="text-xs font-medium text-quaternary">
                                Pertanyaan stok dan pengiriman dirpioritaskan
                              </span>
                            </td>
                          </tr>
                          <tr className="outline-1 outline-primary">
                            <td className="flex flex-row items-center gap-2 p-2 px-3 select-none">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 2c-3.3 0-6 2.7-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z"
                                  fill="none"
                                  stroke="#4AAB00"
                                  stroke-width="1.8"
                                  stroke-linejoin="round"
                                />
                                <circle
                                  cx="12"
                                  cy="8"
                                  r="2"
                                  fill="none"
                                  stroke="#4AAB00"
                                  stroke-width="1.8"
                                />
                              </svg>
                              <span className="font-bold text-accentThrd">
                                Kunjungan
                              </span>
                            </td>
                            <td className="p-2 px-3">
                              <span className="text-xs font-medium text-quaternary">
                                Kunjungan ke kantor & gudang disarankan setelah
                                konfirmasi
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>

            <div className="mx-auto flex max-w-200 flex-col items-center justify-center gap-10">
              <div className="relative h-fit w-full">
                <div className="w-full translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                  <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex w-full flex-col items-start justify-center gap-5 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex flex-col gap-3">
                        <h4 className="text-2xl font-extrabold text-accentThrd select-none">
                          Butuh bantuan cepat?
                        </h4>

                        <div className="max-w-md">
                          <p className="text-xs font-medium text-primary">
                            Jika Anda membutuhkan informasi produk, stok,
                            pengiriman, atau kebutuhan khusus, hubungi tim kami
                            langsung melalui nomor atau email di atas. Kami akan
                            membantu Anda menemukan solusi yang tepat.
                          </p>
                        </div>
                      </div>

                      <div className="mx-auto flex items-center justify-center gap-3 select-none">
                        <div>
                          <motion.button
                            className="relative cursor-pointer overflow-hidden rounded-full border p-2 px-4"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            variants={{
                              rest: {
                                color: "#4AAB00",
                                borderColor: "#4AAB00",
                                backgroundColor: "#FFFFFF",
                              },
                              hover: {
                                color: "#FFFFFF",
                              },
                            }}
                            transition={{
                              duration: 0.1,
                            }}
                          >
                            <span className="relative z-1 font-semibold">
                              Telepon
                            </span>

                            <motion.div
                              variants={{
                                rest: { scale: 0 },
                                hover: { scale: 2.4 },
                              }}
                              transition={{
                                duration: 0.1,
                              }}
                              className="absolute top-0 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-side"
                            />
                          </motion.button>
                        </div>

                        <div>
                          <motion.button
                            className="relative cursor-pointer overflow-hidden rounded-full border p-2 px-4"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            variants={{
                              rest: {
                                color: "#FFFFFF",
                                borderColor: "#4AAB00",
                                backgroundColor: "#4AAB00",
                              },
                              hover: {
                                color: "#4AAB00",
                              },
                            }}
                            transition={{
                              duration: 0.1,
                            }}
                          >
                            <span className="relative z-1 font-semibold">
                              Email
                            </span>

                            <motion.div
                              variants={{
                                rest: { scale: 0 },
                                hover: { scale: 2.4 },
                              }}
                              transition={{
                                duration: 0.1,
                              }}
                              className="absolute top-0 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-white"
                            />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    <div className="items-strecth flex w-full flex-col justify-center gap-5 md:flex-row">
                      <div className="mx-auto flex w-full max-w-65 flex-col justify-between rounded-md bg-white p-4 outline-2 outline-primary md:mx-0">
                        <div className="mb-5 flex items-center gap-5 select-none">
                          <div className="flex h-13 w-13 items-center justify-center rounded-full bg-side">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c0.3-0.3 0.7-0.4 1-0.2 1.1 0.4 2.3 0.6 3.6 0.6 0.6 0 1 0.4 1 1V20c0 0.6-0.4 1-1 1C10.6 21 3 13.4 3 4c0-0.6 0.4-1 1-1h3.5c0.6 0 1 0.4 1 1 0 1.3 0.2 2.5 0.6 3.6 0.1 0.3 0 0.7-0.2 1L6.6 10.8z"
                                fill="#FFFFFF"
                              />
                            </svg>
                          </div>

                          <h4 className="text-2xl font-extrabold text-accentThrd">
                            Telepon
                          </h4>
                        </div>

                        <div className="w-full rounded-md bg-tertiary p-2 text-center outline-2 outline-accentThrd">
                          <p className="font-bold text-side">080-5432-6468</p>
                        </div>
                      </div>

                      <div className="mx-auto flex w-full max-w-65 flex-col justify-between rounded-md bg-white p-4 outline-2 outline-primary md:mx-0">
                        <div className="mb-5 flex items-center gap-5 select-none">
                          <div className="flex h-13 w-13 items-center justify-center rounded-full bg-side">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="2"
                                y="5"
                                width="20"
                                height="14"
                                rx="2"
                                fill="none"
                                stroke="#FFFFFF"
                                stroke-width="1.8"
                              />
                              <path
                                d="M3 6.5l9 6.5 9-6.5"
                                fill="none"
                                stroke="#FFFFFF"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>

                          <h4 className="text-2xl font-extrabold text-accentThrd">
                            Email
                          </h4>
                        </div>

                        <div className="w-full rounded-md bg-tertiary p-2 text-center outline-2 outline-accentThrd">
                          <p className="font-bold text-side">
                            berasrejonik@gamil.com
                          </p>
                        </div>
                      </div>

                      <div className="mx-auto flex w-full max-w-65 flex-col justify-between rounded-md bg-white p-4 outline-2 outline-primary md:mx-0">
                        <div className="mb-5 flex items-center gap-5 select-none">
                          <div className="flex h-13 w-13 items-center justify-center rounded-full bg-side">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2c-3.3 0-6 2.7-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z"
                                fill="none"
                                stroke="#FFFFFF"
                                stroke-width="1.8"
                                stroke-linejoin="round"
                              />
                              <circle
                                cx="12"
                                cy="8"
                                r="2"
                                fill="none"
                                stroke="#FFFFFF"
                                stroke-width="1.8"
                              />
                            </svg>
                          </div>

                          <h4 className="text-2xl font-extrabold text-accentThrd">
                            Lokasi
                          </h4>
                        </div>

                        <div className="w-full rounded-md bg-tertiary p-2 text-justify outline-2 outline-accentThrd">
                          <p className="mx-auto text-xs font-bold text-side">
                            Desa Krajan Mimbaan, Kec. Panji, Kab. Situbondo,
                            Jawa Timur 68323
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Content //
