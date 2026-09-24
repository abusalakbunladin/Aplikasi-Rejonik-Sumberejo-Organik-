import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Order from "./components/order-section.jsx";

export default function Advantages() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Attribute />
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

    animate(heroRef.current.querySelectorAll(".h-deco"), {
      scale: [0, 1],
      delay: 700,
      duration: 500,
      ease: "outElastic(1,0.6)",
    });

    animate(heroRef.current.querySelectorAll(".h-s-t"), {
      scaleY: [0, 1],
      delay: 500,
      duration: 700,
      ease: "outElastic(1,1)",
    });

    animate(heroRef.current.querySelectorAll(".h-title"), {
      y: [-150, 0],
      delay: stagger(300, { start: 1000, from: "last" }),
      duration: 700,
      ease: "outElastic(1,1)",
    });

    animate(heroRef.current.querySelector(".h-t-img1"), {
      x: [50],
      scale: [0, 1],
      delay: 1400,
      duration: 600,
      ease: "outElastic(1,1)",

      onComplete: () => {
        animate(heroRef.current.querySelector(".h-t-img1"), {
          x: [50, 0],
          duration: 800,
          ease: "outElastic(1,0.6)",
        });
      },
    });

    animate(heroRef.current.querySelector(".h-t-img2"), {
      x: [80],
      scale: [0, 1],
      delay: 1400,
      duration: 600,
      ease: "outElastic(1,1)",

      onComplete: () => {
        animate(heroRef.current.querySelector(".h-t-img2"), {
          x: [80, 28],
          duration: 800,
          ease: "outElastic(1,0.6)",
        });
      },
    });

    animate(heroRef.current.querySelectorAll(".h-t-deco1"), {
      scale: [0, 1],
      delay: 2300,
      duration: 600,
      ease: "outElastic(1,1)",
    });

    animate(heroRef.current.querySelectorAll(".h-t-deco2"), {
      scale: [0, 1],
      delay: 2600,
      duration: 600,
      ease: "outElastic(0.9,0.7)",
    });

    animate(heroRef.current.querySelectorAll(".h-l-deco"), {
      scaleX: [0, 1],
      delay: stagger(300, { start: 2900 }),
      duration: 600,
      ease: "outElastic(0.9,0.7)",
    });
  });

  return (
    <div className="hero" ref={heroRef}>
      <section
        id="home"
        className="bg-[url(/brand/sawah-senjah.png)] bg-cover bg-center bg-no-repeat pt-90 pb-30"
      >
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-deco h-4 w-4 rounded-full bg-accentScnd" />

              <div className="h-s-t rounded-full bg-accent/50 p-1 px-3 outline-2 outline-accentScnd select-none">
                <span className="text-xl font-semibold text-white">
                  Beras Organik Premium
                </span>
              </div>

              <div className="h-deco h-4 w-4 rounded-full bg-accentScnd" />
            </div>

            <div className="flex items-center justify-center gap-4 select-none">
              <div className="relative hidden h-50 w-50 items-center rounded-full lg:flex">
                <img
                  src="/brand/wheat2.png"
                  alt="Deco"
                  width="170"
                  className="h-t-img1 relative z-1 scale-x-[-1]"
                />

                <div className="h-t-deco1 absolute left-1/2 h-30 w-30 -translate-x-1/2 rounded-full bg-side/30" />
                <div className="h-t-deco2 absolute bottom-1/2 h-15 w-15 -translate-y-10 rounded-full bg-white/20" />
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex flex-col items-center justify-center overflow-hidden text-5xl font-extrabold text-white lg:text-6xl xl:text-7xl">
                  <span className="h-title block">Nikmati di Setiap</span>
                  <span className="h-title mb-2 block">Suapannya</span>
                </div>

                <div className="h-l-deco h-1 w-60 rounded-full bg-side/50" />
                <div className="h-l-deco h-1 w-30 rounded-full bg-side/50" />
              </div>

              <div className="relative hidden h-50 w-50 items-center rounded-full lg:flex">
                <img
                  src="/brand/wheat2.png"
                  alt="Deco"
                  width="170"
                  className="h-t-img2 relative z-1"
                />

                <div className="h-t-deco1 absolute left-1/2 h-30 w-30 -translate-x-1/2 rounded-full bg-side/30" />
                <div className="h-t-deco2 absolute right-0 bottom-1/2 h-15 w-15 -translate-y-10 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Hero //

// Atribute //
function Attribute() {
  return (
    <div className="attribute">
      <section
        id="kredit"
        className="border-t-3 border-b-3 border-side bg-primary py-5"
      >
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="flex items-center justify-center gap-4">
              <div className="hidden h-1 w-15 rounded-full bg-accentScnd md:block" />

              <a
                href="https://www.flaticon.com/free-icons/wheat"
                target="_blank"
                title="wheat icons"
                className="font-bold text-white"
              >
                Wheat icons created by{" "}
                <span className="text-accent">DinosoftLabs</span> - Flaticon
              </a>

              <div className="hidden h-1 w-15 rounded-full bg-accentScnd md:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Atribute //

// Advantages //
function Content() {
  return (
    <div className="advantages">
      <section id="keunggulan" className="pt-36 mb-32 xl:mb-0">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-20 select-none">
              <div className="flex items-center justify-center gap-7">
                <div className="hidden items-center gap-3 lg:flex">
                  <div className="h-1 w-5 rounded-full bg-side" />
                  <div className="h-1 w-10 rounded-full bg-side" />
                  <div className="h-5 w-5 rounded-full bg-side" />
                </div>

                <h2 className="max-w-lg text-center text-3xl font-extrabold text-quaternary lg:max-w-xl lg:text-4xl">
                  Keunggulan Beras Rejonik
                </h2>

                <div className="hidden items-center gap-3 lg:flex">
                  <div className="h-5 w-5 rounded-full bg-side" />
                  <div className="h-1 w-10 rounded-full bg-side" />
                  <div className="h-1 w-5 rounded-full bg-side" />
                </div>
              </div>

              <div className="mt-5 text-center text-xs lg:text-sm">
                <p className="text-primary">
                  Lihat beberapa alasan mengapa beras Rejonik lebih unggul
                  daripada beras lain.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-5 xl:hidden">
              <div className="h-fit w-full max-w-2xl rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <div className="h-50 w-full md:w-50 rounded-sm bg-[url(/advantages/img/Asli-Organik.png)] bg-cover bg-center" />

                  <div className="flex flex-col gap-5">
                    <div className="flex w-fit flex-col items-center justify-center gap-1">
                      <h2 className="text-2xl font-bold text-quaternary select-none">
                        100% Organik
                      </h2>

                      <div className="h-1 w-full rounded-full bg-side" />
                    </div>

                    <div className="max-w-full md:max-w-sm text-xs font-medium text-slate-500">
                      <p>
                        Beras kami diproduksi dari varietas unggul yang ditanam
                        sepenuhnya dengan pupuk alami tanpa campuran bahan
                        kimia. Mengandung serat alami serta kaebohidrat kompleks
                        yang dicerna secara berkala, membantu menjaga tingkat
                        gula darah tetap stabil, melancarkan pencernaan, dan
                        memberikan energi berkelanjutan tanpa efek lemas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-fit w-full max-w-2xl rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <div className="h-50 w-full md:w-50 rounded-sm bg-[url(/advantages/img/Tanpa-Pestisida-Kimia.png)] bg-cover bg-center" />

                  <div className="flex flex-col gap-5">
                    <div className="flex w-fit flex-col items-center justify-center gap-1">
                      <h2 className="text-2xl font-bold text-quaternary select-none">
                        Tanpa Pestisida Kimia
                      </h2>

                      <div className="h-1 w-full rounded-full bg-side" />
                    </div>

                    <div className="max-w-full md:max-w-sm text-xs font-medium text-slate-500">
                      <p>
                        Setiap bulir dibudidayakan tanpa menyentuh pestisida,
                        herbisida, dan bahan kimia berbahaya. Kami mengandalkan
                        ekosistem hayati dan metode alami untuk mengendalikan
                        hama. Hasilnya adalah beras murni yang aman dikonsumsi
                        seluruh anggota keluarga, sekaligus menjaga kesuburan
                        tanah dan lingkungan sekitar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-fit w-full max-w-2xl rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <div className="h-50 w-full md:w-50 rounded-sm bg-[url(/advantages/img/Kemasan-Higienis.png)] bg-cover bg-center" />

                  <div className="flex flex-col gap-5">
                    <div className="flex w-fit flex-col items-center justify-center gap-1">
                      <h2 className="text-2xl font-bold text-quaternary select-none">
                        Kemasan Higienis
                      </h2>

                      <div className="h-1 w-full rounded-full bg-side" />
                    </div>

                    <div className="max-w-full md:max-w-sm text-xs font-medium text-slate-500">
                      <p>
                        Beras dikemas menggunakan teknologi vacuum sealing
                        terkini yang menjaga kesegaran, aroma, dan kelembapan
                        beras secara optimal. Proses pengemasan dilakukan secara
                        steril tanpa sentuhan tangan langsung, memastikan produk
                        beras bebas debu, kutu, maupun kontaminasi luar hingga
                        sampai ke dapur Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-fit w-full max-w-2xl rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <div className="h-50 w-full md:w-50 rounded-sm bg-[url(/advantages/img/Langsung-dari-Petani.png)] bg-cover bg-center" />

                  <div className="flex flex-col gap-5">
                    <div className="flex w-fit flex-col items-center justify-center gap-1">
                      <h2 className="text-2xl font-bold text-quaternary select-none">
                        Langsung dari Petani
                      </h2>

                      <div className="h-1 w-full rounded-full bg-side" />
                    </div>

                    <div className="max-w-full md:max-w-sm text-xs font-medium text-slate-500">
                      <p>
                        Kami bekerja sama langsung dengan kelompok petani lokal
                        Sumberejo melalui jalur distribusi yang transparan dan
                        adil. Tanpa keterlibatan tengkulakatau rantai perantara
                        yang panjang, kami memastikan petani mendapatkan
                        apresiasi harga yang layak sekaligus menjamin Anda
                        menerima beras segar hasil panen terbaru.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-fit w-full max-w-2xl rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <div className="h-50 w-full md:w-50 rounded-sm bg-[url(/advantages/img/Harga-Terjangkau.png)] bg-cover bg-center" />

                  <div className="flex flex-col gap-5">
                    <div className="flex w-fit flex-col items-center justify-center gap-1">
                      <h2 className="text-2xl font-bold text-quaternary select-none">
                        Harga Terjangkau
                      </h2>

                      <div className="h-1 w-full rounded-full bg-side" />
                    </div>

                    <div className="max-w-full md:max-w-sm text-xs font-medium text-slate-500">
                      <p>
                        Kami percaya bahwa gaya hidup sehat dan konsumsi makanan
                        organik berkualitas harus dapat diakses oleh semua
                        lapisan masyarakat. Dengan memotong rantai distribusi
                        berlebih dan mnegoptimalkan pengelolaan koperasi, kami
                        mampu menghadirkan beras organik premium dengan harga
                        yang bersahabat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-fit w-full max-w-2xl rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <div className="h-50 w-full md:w-50 rounded-sm bg-[url(/advantages/img/Pengiriman-Cepat.png)] bg-cover bg-center" />

                  <div className="flex flex-col gap-5">
                    <div className="flex w-fit flex-col items-center justify-center gap-1">
                      <h2 className="text-2xl font-bold text-quaternary select-none">
                        Pengiriman Cepat
                      </h2>

                      <div className="h-1 w-full rounded-full bg-side" />
                    </div>

                    <div className="max-w-full md:max-w-sm text-xs font-medium text-slate-500">
                      <p>
                        Sistem logistik dan perdagangan kami terintegrasi untuk
                        memastikan pesanan Anda diproses dengan sigap. Beras
                        dikemas rapi dan dikirimkan secara aman menggunakan
                        layanan ekspedisi terpercaya, memastikan pasokan beras
                        segar keluarga Anda tiba tepat waktu tanpa kendala.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex flex-col">
          <div className="relative flex flex-row-reverse items-center justify-between overflow-hidden bg-linear-to-l from-secondary/50 from-20% to-white/0 to-50% p-10 px-20">
            <div className="absolute left-1/2 -z-1 flex h-80 w-80 -translate-x-1/2 scale-150 items-center justify-center rounded-full bg-side opacity-40 select-none">
              <img src="/advantages/Organik.svg" alt="Organik" width="220" />
            </div>

            <div className="flex h-120 w-120 overflow-hidden rounded-md bg-side select-none">
              <img
                src="/advantages/img/Asli-Organik.png"
                alt="Organik"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex w-fit flex-col gap-2 select-none">
                <h2 className="text-5xl font-extrabold text-accentThrd">
                  100% Organik
                </h2>

                <div className="h-1 w-full rounded-full bg-linear-to-r from-primary from-30% to-side to-40%" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="relative z-1 max-w-xl 2xl:max-w-2xl translate-x-3 -translate-y-3 rounded-sm bg-tertiary p-3 outline-2 outline-accentThrd">
                  <p className="text-sm leading-6 text-quaternary">
                    Beras kami diproduksi dari varietas unggul yang ditanam
                    sepenuhnya dengan pupuk alami tanpa campuran bahan kimia.
                    Mengandung serat alami serta kaebohidrat kompleks yang
                    dicerna secara berkala, membantu menjaga tingkat gula darah
                    tetap stabil, melancarkan pencernaan, dan memberikan energi
                    berkelanjutan tanpa efek lemas.
                  </p>
                </div>

                <div className="absolute top-0 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>
          </div>

          <div className="relative flex flex-row items-center justify-between overflow-hidden bg-linear-to-r from-secondary/50 from-20% to-white/0 to-50% p-10 px-20">
            <div className="absolute left-1/2 -z-1 flex h-80 w-80 -translate-x-1/2 scale-150 items-center justify-center rounded-full bg-side opacity-40 select-none">
              <img
                src="/advantages/Bebas-kimia.svg"
                alt="Bebas Kimia"
                width="220"
              />
            </div>

            <div className="flex h-120 w-120 overflow-hidden rounded-md bg-side select-none">
              <img
                src="/advantages/img/Tanpa-Pestisida-Kimia.png"
                alt="Bebas Kimia"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-end gap-10">
              <div className="flex w-fit flex-col gap-2 select-none">
                <h2 className="text-5xl font-extrabold text-accentThrd">
                  Tanpa Pestisida Kimia
                </h2>

                <div className="h-1 w-full rounded-full bg-linear-to-l from-primary from-30% to-side to-40%" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="relative z-1 max-w-xl 2xl:max-w-2xl translate-x-3 -translate-y-3 rounded-sm bg-tertiary p-3 outline-2 outline-accentThrd">
                  <p className="text-sm leading-6 text-quaternary">
                    Setiap bulir dibudidayakan tanpa menyentuh pestisida,
                    herbisida, dan bahan kimia berbahaya. Kami mengandalkan
                    ekosistem hayati dan metode alami untuk mengendalikan hama.
                    Hasilnya adalah beras murni yang aman dikonsumsi seluruh
                    anggota keluarga, sekaligus menjaga kesuburan tanah dan
                    lingkungan sekitar.
                  </p>
                </div>

                <div className="absolute top-0 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>
          </div>

          <div className="relative flex flex-row-reverse items-center justify-between overflow-hidden bg-linear-to-l from-secondary/50 from-20% to-white/0 to-50% p-10 px-20">
            <div className="absolute left-1/2 -z-1 flex h-80 w-80 -translate-x-1/2 scale-150 items-center justify-center rounded-full bg-side opacity-40 select-none">
              <img src="/advantages/Higienis.png" alt="Higienis" width="220" />
            </div>

            <div className="flex h-120 w-120 overflow-hidden rounded-md bg-side select-none items-center justify-center">
              <img
                src="/advantages/img/Kemasan-Higienis.png"
                alt="Higienis"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex w-fit flex-col gap-2 select-none">
                <h2 className="text-5xl font-extrabold text-accentThrd">
                  Kemasan Higienis
                </h2>

                <div className="h-1 w-full rounded-full bg-linear-to-r from-primary from-30% to-side to-40%" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="relative z-1 max-w-xl 2xl:max-w-2xl translate-x-3 -translate-y-3 rounded-sm bg-tertiary p-3 outline-2 outline-accentThrd">
                  <p className="text-sm leading-6 text-quaternary">
                    Beras dikemas menggunakan teknologi vacuum sealing terkini
                    yang menjaga kesegaran, aroma, dan kelembapan beras secara
                    optimal. Proses pengemasan dilakukan secara steril tanpa
                    sentuhan tangan langsung, memastikan produk beras bebas
                    debu, kutu, maupun kontaminasi luar hingga sampai ke dapur
                    Anda.
                  </p>
                </div>

                <div className="absolute top-0 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>
          </div>

          <div className="relative flex flex-row items-center justify-between overflow-hidden bg-linear-to-r from-secondary/50 from-20% to-white/0 to-50% p-10 px-20">
            <div className="absolute left-1/2 -z-1 flex h-80 w-80 -translate-x-1/2 scale-150 items-center justify-center rounded-full bg-side opacity-40 select-none">
              <img
                src="/advantages/Dari-Petani.svg"
                alt="Dari Petani"
                width="220"
              />
            </div>

            <div className="flex h-120 w-120 overflow-hidden rounded-md bg-side select-none">
              <img
                src="/advantages/img/Langsung-dari-Petani.png"
                alt="Dari Petani"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-end gap-10">
              <div className="flex w-fit flex-col gap-2 select-none">
                <h2 className="text-5xl font-extrabold text-accentThrd">
                  Langsung dari Petani
                </h2>

                <div className="h-1 w-full rounded-full bg-linear-to-l from-primary from-30% to-side to-40%" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="relative z-1 max-w-xl 2xl:max-w-2xl translate-x-3 -translate-y-3 rounded-sm bg-tertiary p-3 outline-2 outline-accentThrd">
                  <p className="text-sm leading-6 text-quaternary">
                    Kami bekerja sama langsung dengan kelompok petani lokal
                    Sumberejo melalui jalur distribusi yang transparan dan adil.
                    Tanpa keterlibatan tengkulakatau rantai perantara yang
                    panjang, kami memastikan petani mendapatkan apresiasi harga
                    yang layak sekaligus menjamin Anda menerima beras segar
                    hasil panen terbaru.
                  </p>
                </div>

                <div className="absolute top-0 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>
          </div>

          <div className="relative flex flex-row-reverse items-center justify-between overflow-hidden bg-linear-to-l from-secondary/50 from-20% to-white/0 to-50% p-10 px-20">
            <div className="absolute left-1/2 -z-1 flex h-80 w-80 -translate-x-1/2 scale-150 items-center justify-center rounded-full bg-side opacity-40 select-none">
              <img
                src="/advantages/Terjangkau.svg"
                alt="Terjangkau"
                width="220"
              />
            </div>

            <div className="flex h-120 w-120 overflow-hidden rounded-md bg-side select-none">
              <img
                src="/advantages/img/Harga-Terjangkau.png"
                alt="Terjangkau"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex w-fit flex-col gap-2 select-none">
                <h2 className="text-5xl font-extrabold text-accentThrd">
                  Harga Terjangkau
                </h2>

                <div className="h-1 w-full rounded-full bg-linear-to-r from-primary from-30% to-side to-40%" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="relative z-1 max-w-xl 2xl:max-w-2xl translate-x-3 -translate-y-3 rounded-sm bg-tertiary p-3 outline-2 outline-accentThrd">
                  <p className="text-sm leading-6 text-quaternary">
                    Kami percaya bahwa gaya hidup sehat dan konsumsi makanan
                    organik berkualitas harus dapat diakses oleh semua lapisan
                    masyarakat. Dengan memotong rantai distribusi berlebih dan
                    mnegoptimalkan pengelolaan koperasi, kami mampu menghadirkan
                    beras organik premium dengan harga yang bersahabat.
                  </p>
                </div>

                <div className="absolute top-0 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>
          </div>

          <div className="relative flex flex-row items-center justify-between overflow-hidden bg-linear-to-r from-secondary/50 from-20% to-white/0 to-50% p-10 px-20">
            <div className="absolute left-1/2 -z-1 flex h-80 w-80 -translate-x-1/2 scale-150 items-center justify-center rounded-full bg-side opacity-40 select-none">
              <img
                src="/advantages/Pengiriman-Cepat.svg"
                alt="Pengiriman Cepat"
                width="220"
              />
            </div>

            <div className="flex h-120 w-120 overflow-hidden rounded-md bg-side select-none">
              <img
                src="/advantages/img/Pengiriman-Cepat.png"
                alt="Pengiriman Cepat"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-end gap-10">
              <div className="flex w-fit flex-col gap-2 select-none">
                <h2 className="text-5xl font-extrabold text-accentThrd">
                  Pengiriman Cepat
                </h2>

                <div className="h-1 w-full rounded-full bg-linear-to-l from-primary from-30% to-side to-40%" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="relative z-1 max-w-xl 2xl:max-w-2xl translate-x-3 -translate-y-3 rounded-sm bg-tertiary p-3 outline-2 outline-accentThrd">
                  <p className="text-sm leading-6 text-quaternary">
                    Sistem logistik dan perdagangan kami terintegrasi untuk
                    memastikan pesanan Anda diproses dengan sigap. Beras dikemas
                    rapi dan dikirimkan secara aman menggunakan layanan
                    ekspedisi terpercaya, memastikan pasokan beras segar
                    keluarga Anda tiba tepat waktu tanpa kendala.
                  </p>
                </div>

                <div className="absolute top-0 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Advantages //
