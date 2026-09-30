import { useEffect, useRef } from "react";
import { animate } from "animejs";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Order from "./components/order-section.jsx";

export default function About() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Value />
      <Story />
      <Commitment />
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
      x: [-900, 0],
      skewX: -20,
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
      <div className="h-t-bg absolute h-full w-1/2 -translate-x-50 scale-x-150 -skew-x-20 bg-tertiary/20 lg:skew-x-0" />

      <section
        id="hero"
        className="bg-[url(/about/malam_part_2.png)] bg-cover bg-center pt-90 pb-40"
      >
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="relative z-1 flex">
              <div className="flex flex-col justify-center gap-4">
                <div className="h-t-scd w-fit rounded-full bg-white p-0.5 px-3 outline-2 outline-side select-none">
                  <h1 className="font-semibold text-side">Tentang Rejonik</h1>
                </div>

                <div className="flex flex-col justify-center gap-5">
                  <div className="flex items-center gap-2">
                    <div className="h-t-deco h-20 w-1 rounded-full bg-side" />

                    <span className="h-title relative h-fit w-fit max-w-2xl text-5xl font-extrabold text-white xl:text-6xl">
                      Beras Organik Sehat & Tersertifikasi
                      <div className="h-t-aper absolute top-0 hidden h-full w-full rounded-sm bg-side lg:block" />
                    </span>
                  </div>

                  <div className="h-t-l h-1 w-1/2 rounded-full bg-tertiary" />

                  <div className="max-w-lg">
                    <p className="h-t-p font-medium text-white lg:text-slate-100">
                      Kami berdedikasi untuk memproduksi beras murni berkualitas
                      tinggi tanpa pestisida, menjamin rasa yang pulen, aman,
                      dan menyehatkan bagi seluruh keluarga.
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

// Value //
function Value() {
  return (
    <div className="value">
      <section id="nilai" className="bg-side/20 pt-36 pb-30">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-20 flex flex-col items-center justify-center select-none lg:hidden">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="mb-3 flex items-center justify-center gap-3">
                  <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                  <h3 className="text-sm font-light text-side uppercase">
                    Our Product's Value Proposition
                  </h3>
                  <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                </div>

                <h2 className="max-w-lg text-center text-3xl font-extrabold text-quaternary">
                  Mengapa Rejonik Pilihan Terbaik Anda
                </h2>

                <div className="mt-5 max-w-lg text-center text-xs lg:text-sm">
                  <p className="text-primary">
                    Ditanam secara alami tanpa pestisida berbahaya, menjaga
                    kebaikan alam untuk keluarga Anda.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:hidden">
              <div className="relative z-2 h-fit w-fit">
                <div className="max-w-lg translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                  <div className="flex flex-col items-center justify-center gap-5">
                    <div className="relative h-50 w-full overflow-hidden rounded-md bg-[url(/about/Mengapa_Pilih_Kami.png)] bg-cover bg-center">
                      <div className="absolute bottom-0 m-2 w-fit rounded-sm bg-side p-2 px-3 select-none">
                        <span className="text-xl font-bold text-white">
                          100% Organik
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 select-none">
                      <div className="flex items-center gap-5">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="5" fill="#4AAB00" />
                          <path
                            d="M6.5 12.5 L10.5 16.5 L17.5 8"
                            stroke="white"
                            stroke-width="2.5"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div className="max-w-md text-sm">
                          <p className="font-medium text-quaternary">
                            <span className="font-bold">
                              Kaya Nutrisi Esensial:
                            </span>{" "}
                            Mengandung gizi penting seperti Vitamin B6 dan Zinc
                            untuk memastikan kesehatan dan kebutuhan nutrisi
                            keluarga Anda terpenuhi dengan baik.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-5">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="5" fill="#4AAB00" />
                          <path
                            d="M6.5 12.5 L10.5 16.5 L17.5 8"
                            stroke="white"
                            stroke-width="2.5"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div className="max-w-md text-sm">
                          <p className="font-medium text-quaternary">
                            <span className="font-bold">
                              Sangat Praktis & Siap Masak:
                            </span>{" "}
                            Menjadi solusi memasak yang efisien. Beras diproses
                            sangat bersih sehingga Anda bisa langsung memasaknya
                            tanpa perlu repot mencuci lagi.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-5">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="5" fill="#4AAB00" />
                          <path
                            d="M6.5 12.5 L10.5 16.5 L17.5 8"
                            stroke="white"
                            stroke-width="2.5"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div className="max-w-md text-sm">
                          <p className="font-medium text-quaternary">
                            <span className="font-bold">
                              Garansi Kualitas & Kesegaran:
                            </span>{" "}
                            Kami berkomitmen penuh menjaga standar mutu terbaik.
                            Nikmati jaminan beras segar berkualitas prima untuk
                            setiap hidangan sehat di rumah Anda.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>

            <div className="hidden items-center justify-center lg:flex">
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="relative h-fit w-fit select-none">
                  <div className="flex h-100 w-100 overflow-hidden rounded-sm">
                    <img
                      src="/about/Mengapa_Pilih_Kami.png"
                      alt="Why choose Us?"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute bottom-0 flex w-fit -translate-x-1/5 translate-y-10 flex-col items-center justify-center rounded-sm bg-side p-3 text-center">
                    <h4 className="text-3xl font-extrabold text-white">
                      100% Organik
                    </h4>

                    <p className="max-w-xs text-sm font-medium text-white">
                      Ditanam secara alami tanpa pestisida berbahaya, menjaga
                      kebaikan alam untuk keluarga Anda.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-10">
                  <div className="flex flex-col gap-2 select-none">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-3 rounded-full bg-side" />
                      <h3 className="text-side uppercase">
                        Our Product's Value Proposition
                      </h3>
                      <div className="h-1 w-3 rounded-full bg-side" />
                    </div>

                    <div className="max-w-md">
                      <h2 className="text-4xl font-extrabold text-quaternary">
                        Mengapa Rejonik Pilihan Terbaik Anda
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5 select-none">
                    <div className="flex items-center gap-5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="5" fill="#4AAB00" />
                        <path
                          d="M6.5 12.5 L10.5 16.5 L17.5 8"
                          stroke="white"
                          stroke-width="2.5"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="max-w-md text-sm">
                        <p className="font-medium text-quaternary">
                          <span className="font-bold">
                            Kaya Nutrisi Esensial:
                          </span>{" "}
                          Mengandung gizi penting seperti Vitamin B6 dan Zinc
                          untuk memastikan kesehatan dan kebutuhan nutrisi
                          keluarga Anda terpenuhi dengan baik.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="5" fill="#4AAB00" />
                        <path
                          d="M6.5 12.5 L10.5 16.5 L17.5 8"
                          stroke="white"
                          stroke-width="2.5"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="max-w-md text-sm">
                        <p className="font-medium text-quaternary">
                          <span className="font-bold">
                            Sangat Praktis & Siap Masak:
                          </span>{" "}
                          Menjadi solusi memasak yang efisien. Beras diproses
                          sangat bersih sehingga Anda bisa langsung memasaknya
                          tanpa perlu repot mencuci lagi.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="5" fill="#4AAB00" />
                        <path
                          d="M6.5 12.5 L10.5 16.5 L17.5 8"
                          stroke="white"
                          stroke-width="2.5"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="max-w-md text-sm">
                        <p className="font-medium text-quaternary">
                          <span className="font-bold">
                            Garansi Kualitas & Kesegaran:
                          </span>{" "}
                          Kami berkomitmen penuh menjaga standar mutu terbaik.
                          Nikmati jaminan beras segar berkualitas prima untuk
                          setiap hidangan sehat di rumah Anda.
                        </p>
                      </div>
                    </div>
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
// Value //

// Story //
function Story() {
  return (
    <div className="story">
      <section id="kisah" className="pt-36 pb-30">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="flex flex-col items-center justify-center gap-7 lg:hidden">
              <div className="relative h-fit w-fit">
                <div className="max-w-lg translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                  <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-3 flex items-center justify-center gap-3">
                        <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                        <h3 className="text-xs font-light text-side uppercase">
                          Rejonik's Odyssey
                        </h3>
                        <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                      </div>

                      <h2 className="max-w-lg text-center text-2xl font-extrabold text-quaternary">
                        Perjalanan Beras Rejonik Sejak Awal Bediri
                      </h2>
                    </div>

                    <div className="h-50 w-full overflow-hidden rounded-md bg-[url(/about/Kisah_Kami_2.png)] bg-cover bg-center" />

                    <div className="flex flex-col items-center justify-center gap-5 text-justify text-sm font-medium text-quaternary select-none">
                      <p className="max-w-md">
                        Berdiri sejak 2010 di Situbondo, Kelompok Tani Bahagia
                        merintis visi mengembalikan kemurnian alam. Lebih dari
                        200 petani mitra kami kini merawat 500+ hektar lahan
                        secara gotong royong, mendedikasikan diri menanam padi
                        organik murni tanpa bahan kimia sintetis demi
                        keseimbangan ekosistem.
                      </p>
                      <p className="max-w-md">
                        Bagi kami, setiap bulir beras yang dipanen adalah wujud
                        nyata harmoni alam. Kualitas adalah janji mutlak
                        kami—memastikan setiap kemasan Beras Rejonik yang sampai
                        ke dapur Anda diproses secara higienis, menghasilkan
                        hidangan yang pulen, sehat, dan terjamin keamanannya
                        untuk keluarga.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="max-w-lg translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                  <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-3 flex items-center justify-center gap-3">
                        <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                        <h3 className="text-xs font-light text-side uppercase">
                          Quality & Taste Commitment
                        </h3>
                        <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                      </div>

                      <h2 className="max-w-lg text-center text-2xl font-extrabold text-quaternary">
                        Sajian Sempurna untuk Hidangan Sehat Keluarga
                      </h2>
                    </div>

                    <div className="h-50 w-full overflow-hidden rounded-md bg-[url(/about/Kisah_Kami_1.png)] bg-cover bg-center" />

                    <div className="flex flex-col items-center justify-center gap-5 text-justify text-sm font-medium text-quaternary select-none">
                      <p className="max-w-md">
                        Berdiri sejak 2010 di Situbondo, Kelompok Tani Bahagia
                        merintis visi mengembalikan kemurnian alam. Lebih dari
                        200 petani mitra kami kini merawat 500+ hektar lahan
                        secara gotong royong, mendedikasikan diri menanam padi
                        organik murni tanpa bahan kimia sintetis demi
                        keseimbangan ekosistem.
                      </p>
                      <p className="max-w-md">
                        Bagi kami, setiap bulir beras yang dipanen adalah wujud
                        nyata harmoni alam. Kualitas adalah janji mutlak
                        kami—memastikan setiap kemasan Beras Rejonik yang sampai
                        ke dapur Anda diproses secara higienis, menghasilkan
                        hidangan yang pulen, sehat, dan terjamin keamanannya
                        untuk keluarga.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </div>
            </div>

            <div className="hidden flex-col items-center justify-center gap-7 lg:flex">
              <div className="flex flex-row-reverse items-center justify-between gap-20">
                <div className="flex h-100 w-100 overflow-hidden rounded-sm">
                  <img
                    src="/about/Kisah_Kami_2.png"
                    alt="Why choose Us?"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center gap-10">
                  <div className="flex flex-col gap-2 select-none">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-3 rounded-full bg-side" />
                      <h3 className="text-side uppercase">Rejonik's Odyssey</h3>
                      <div className="h-1 w-3 rounded-full bg-side" />
                    </div>

                    <div className="max-w-md">
                      <h2 className="text-4xl font-extrabold text-quaternary">
                        Perjalanan Beras Rejonik Sejak Awal Bediri
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5 text-justify text-sm font-medium text-quaternary select-none">
                    <p className="max-w-md">
                      Berdiri sejak 2010 di Situbondo, Kelompok Tani Bahagia
                      merintis visi mengembalikan kemurnian alam. Lebih dari 200
                      petani mitra kami kini merawat 500+ hektar lahan secara
                      gotong royong, mendedikasikan diri menanam padi organik
                      murni tanpa bahan kimia sintetis demi keseimbangan
                      ekosistem.
                    </p>
                    <p className="max-w-md">
                      Bagi kami, setiap bulir beras yang dipanen adalah wujud
                      nyata harmoni alam. Kualitas adalah janji mutlak
                      kami—memastikan setiap kemasan Beras Rejonik yang sampai
                      ke dapur Anda diproses secara higienis, menghasilkan
                      hidangan yang pulen, sehat, dan terjamin keamanannya untuk
                      keluarga.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-20">
                <div className="flex h-100 w-100 overflow-hidden rounded-sm">
                  <img
                    src="/about/Kisah_Kami_1.png"
                    alt="Why choose Us?"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center gap-10">
                  <div className="flex flex-col gap-2 select-none">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-3 rounded-full bg-side" />
                      <h3 className="text-side uppercase">
                        Quality & Taste Commitment
                      </h3>
                      <div className="h-1 w-3 rounded-full bg-side" />
                    </div>

                    <div className="max-w-md">
                      <h2 className="text-4xl font-extrabold text-quaternary">
                        Sajian Sempurna untuk Hidangan Sehat Keluarga
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5 text-justify text-sm font-medium text-quaternary select-none">
                    <p className="max-w-md">
                      Berdiri sejak 2010 di Situbondo, Kelompok Tani Bahagia
                      merintis visi mengembalikan kemurnian alam. Lebih dari 200
                      petani mitra kami kini merawat 500+ hektar lahan secara
                      gotong royong, mendedikasikan diri menanam padi organik
                      murni tanpa bahan kimia sintetis demi keseimbangan
                      ekosistem.
                    </p>
                    <p className="max-w-md">
                      Bagi kami, setiap bulir beras yang dipanen adalah wujud
                      nyata harmoni alam. Kualitas adalah janji mutlak
                      kami—memastikan setiap kemasan Beras Rejonik yang sampai
                      ke dapur Anda diproses secara higienis, menghasilkan
                      hidangan yang pulen, sehat, dan terjamin keamanannya untuk
                      keluarga.
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
// Story //

// Commitment //
function Commitment() {
  return (
    <div className="commitment">
      <section id="komitmen" className="pt-36 pb-36">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="flex items-center justify-center">
              <div className="relative h-fit w-fit">
                <div className="max-w-2xl translate-x-3 -translate-y-3 rounded-md border-2 border-accentThrd bg-tertiary p-5 select-none">
                  <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-3 flex items-center justify-center gap-3">
                        <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                        <h3 className="text-sm font-light text-side uppercase">
                          Our Commitment & Values
                        </h3>
                        <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                      </div>

                      <h2 className="max-w-xl text-center text-3xl font-extrabold text-quaternary">
                        Nilai Inti Beras Rejonik
                      </h2>
                    </div>

                    <div className="flex w-full flex-col items-center justify-center gap-5">
                      <div className="w-full rounded-md border-2 border-primary bg-white p-5">
                        <div className="flex flex-col justify-center gap-3">
                          <h3 className="text-2xl font-extrabold text-side">
                            Kualitas Murni
                          </h3>

                          <p className="text-xs font-medium text-quaternary">
                            Kami memastikan setiap bulir beras 100% organik,
                            diproses sepenuhnya tanpa pupuk maupun pestisida
                            kimia. Memberikan nutrisi utuh dengan tekstur pulen
                            dan aroma alami yang menyempurnakan hidangan sehat
                            keluarga Anda.
                          </p>
                        </div>
                      </div>

                      <div className="w-full rounded-md border-2 border-primary bg-white p-5">
                        <div className="flex flex-col justify-center gap-3">
                          <h3 className="text-2xl font-extrabold text-side">
                            Kelestarian Alami
                          </h3>

                          <p className="text-xs font-medium text-quaternary">
                            Dedikasi kami berakar pada praktik pertanian yang
                            ramah lingkungan. Kami merawat kesuburan tanah dan
                            menjaga keseimbangan ekosistem persawahan di
                            Sumberejo agar tetap lestari untuk generasi masa
                            depan.
                          </p>
                        </div>
                      </div>

                      <div className="w-full rounded-md border-2 border-primary bg-white p-5">
                        <div className="flex flex-col justify-center gap-3">
                          <h3 className="text-2xl font-extrabold text-side">
                            Jaminan Terpercaya
                          </h3>

                          <p className="text-xs font-medium text-quaternary">
                            Melalui kemitraan erat bersama ratusan petani lokal
                            dan pengawasan mutu yang ketat, kami menghadirkan
                            transparansi dan produk bersertifikasi resmi yang
                            menjamin ketenangan hati Anda di setiap sajian.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-md bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Commitment //
