import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Order from "./components/order-section.jsx";
import { title } from "motion/react-client";

export default function Certificate() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Title />
      <Rpath />
      <Why />
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
      <div className="h-t-bg absolute h-full w-1/2 -translate-x-50 scale-x-150 -skew-x-20 bg-white/40 lg:skew-x-0" />

      <section
        id="hero"
        className="bg-[url(/brand/Sertifikasi-polos.png)] bg-cover bg-center pt-90 pb-40"
      >
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="relative z-1 flex">
              <div className="flex flex-col justify-center gap-4">
                <div className="h-t-scd w-fit rounded-full bg-tertiary/40 p-0.5 px-3 outline-2 outline-accentThrd select-none">
                  <h1 className="font-semibold text-accentThrd">
                    Sertifikasi Rejonik
                  </h1>
                </div>

                <div className="flex flex-col justify-center gap-5">
                  <div className="flex items-center gap-2">
                    <div className="h-t-deco h-12 w-1 rounded-full bg-side" />

                    <span className="h-title relative h-fit w-fit text-5xl font-extrabold text-quaternary xl:text-6xl">
                      Sertifikasi & Jaminan Mutu
                      <div className="h-t-aper absolute top-0 hidden h-full w-full rounded-sm bg-side lg:block" />
                    </span>
                  </div>

                  <div className="h-t-l h-1 w-1/2 rounded-full bg-primary/50" />

                  <div className="max-w-lg">
                    <p className="h-t-p font-medium text-white lg:text-slate-500">
                      Setiap beras Rejonik telah melalui proses sertifikasi
                      resmi dari Lembaga terpacaya untuk memastikan kualitas,
                      keamanan, dan keaslian produk organik kami.
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

// Title //
function Title() {
  return (
    <div className="title">
      <section id="title" className="py-10">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="flex h-fit flex-col items-center justify-center gap-10 text-center lg:flex-row lg:justify-between lg:text-start">
              <div className="flex flex-col items-center justify-center gap-2 lg:items-start lg:justify-start">
                <div className="flex items-center gap-2 select-none">
                  <div className="h-2 w-2 rounded-full bg-side lg:h-1" />

                  <h3 className="text-side uppercase">Certificate</h3>

                  <div className="h-2 w-2 rounded-full bg-side lg:h-1" />
                </div>

                <div className="select-none">
                  <h2 className="text-3xl font-extrabold text-quaternary">
                    Sertifikat yang dimiliki Rejonik
                  </h2>
                </div>
              </div>

              <div className="hidden h-15 w-1 rounded-full bg-side lg:block" />

              <div className="max-w-md text-xs select-none lg:max-w-xl">
                <p className="font-medium text-primary">
                  Rejonik memiliki halaman khusus untuk tempat dimana pengunjung
                  dapat melihat sertifikat yang dimiliki oleh Rejonik. Terdapat
                  jenis jaminan, nomor dokumen, masa berlaku, dan Lembaga
                  penerbit tanpa membuka dokumen sama sekali.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Title //

// R.Path //
function Rpath() {
  return (
    <div className="rpath">
      <section id="rpath" className="pt-36 pb-30">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-20 flex flex-col items-center justify-center select-none">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="mb-3 flex items-center justify-center gap-3">
                  <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                  <h3 className="text-sm font-light text-side uppercase">
                    Reading Flow
                  </h3>
                  <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                </div>

                <div className="flex gap-7">
                  <div className="hidden items-center gap-3 lg:flex">
                    <div className="h-1 w-5 rounded-full bg-side" />
                    <div className="h-1 w-10 rounded-full bg-side" />
                    <div className="h-5 w-5 rounded-full bg-side" />
                  </div>

                  <h2 className="max-w-lg text-center text-3xl font-extrabold text-quaternary lg:max-w-xl lg:text-4xl">
                    Cara Membaca Halaman Sertifikat
                  </h2>

                  <div className="hidden items-center gap-3 lg:flex">
                    <div className="h-5 w-5 rounded-full bg-side" />
                    <div className="h-1 w-10 rounded-full bg-side" />
                    <div className="h-1 w-5 rounded-full bg-side" />
                  </div>
                </div>
              </div>

              <div className="mt-5 max-w-lg text-center text-xs lg:text-sm">
                <p className="text-primary">
                  Berikut alur membaca halaman sertifikat supaya Anda tidak
                  terasa sedang membaca halaman dokumen yang padat.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-7 lg:flex-row lg:gap-0">
              <div className="relative h-fit w-fit">
                <div className="flex h-50 w-full max-w-xs translate-x-3 -translate-y-3 flex-col items-start justify-center gap-4 rounded-sm bg-tertiary p-4 outline-2 outline-accentThrd lg:h-auto lg:translate-x-0 lg:translate-y-0 lg:items-center lg:bg-transparent lg:outline-0">
                  <div className="flex flex-row items-center justify-center gap-5 select-none lg:flex-col lg:gap-2">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side select-none">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>

                    <h4 className="text-lg font-extrabold text-accentThrd">
                      Kenali Sertifikat
                    </h4>
                  </div>

                  <div className="max-w-md select-none lg:text-center">
                    <p className="text-sm font-medium text-quaternary">
                      Lihat semua jenis sertifikat yang dimiliki oleh Rejonik.
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary lg:hidden" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="flex h-50 w-full max-w-xs translate-x-3 -translate-y-3 flex-col items-start justify-center gap-4 rounded-sm bg-tertiary p-4 outline-2 outline-accentThrd lg:h-auto lg:translate-x-0 lg:translate-y-0 lg:items-center lg:bg-transparent lg:outline-0">
                  <div className="flex flex-row items-center justify-center gap-5 select-none lg:flex-col lg:gap-2">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side select-none">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>

                    <h4 className="text-lg font-extrabold text-accentThrd">
                      Pilih Sertifikat
                    </h4>
                  </div>

                  <div className="max-w-md select-none lg:text-center">
                    <p className="text-sm font-medium text-quaternary">
                      Pilih sertifikat yang ingin dilihat lebih lengkap.
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary lg:hidden" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="flex h-50 w-full max-w-xs translate-x-3 -translate-y-3 flex-col items-start justify-center gap-4 rounded-sm bg-tertiary p-4 outline-2 outline-accentThrd lg:h-auto lg:translate-x-0 lg:translate-y-0 lg:items-center lg:bg-transparent lg:outline-0">
                  <div className="flex flex-row items-center justify-center gap-5 select-none lg:flex-col lg:gap-2">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side select-none">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>

                    <h4 className="text-lg font-extrabold text-accentThrd">
                      Periksa Dokumen
                    </h4>
                  </div>

                  <div className="max-w-md select-none lg:text-center">
                    <p className="text-sm font-medium text-quaternary">
                      Periksa dari nomor, lembaga, masa berlaku, dan gambar yang
                      tertara pada sertifikat.
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary lg:hidden" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="flex h-50 w-full max-w-xs translate-x-3 -translate-y-3 flex-col items-start justify-center gap-4 rounded-sm bg-tertiary p-4 outline-2 outline-accentThrd lg:h-auto lg:translate-x-0 lg:translate-y-0 lg:items-center lg:bg-transparent lg:outline-0">
                  <div className="flex flex-row items-center justify-center gap-5 select-none lg:flex-col lg:gap-2">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side select-none">
                      <span className="text-3xl font-bold text-white">4</span>
                    </div>

                    <h4 className="text-lg font-extrabold text-accentThrd">
                      Verifikasi
                    </h4>
                  </div>

                  <div className="max-w-md select-none lg:text-center">
                    <p className="text-sm font-medium text-quaternary">
                      Verifikasi semua sertifikat untuk memastikan keasliannya
                      disetiap sertifikat yang ada.
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// R.Path //

// Why //
function Why() {
  return (
    <div className="why">
      <section id="mengapa" className="pt-36 pb-32">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-20 flex flex-col items-center justify-center select-none">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="mb-3 flex items-center justify-center gap-3">
                  <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                  <h3 className="text-sm font-light text-side uppercase">
                    Why was it published?
                  </h3>
                  <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                </div>

                <div className="flex gap-7">
                  <div className="hidden items-center gap-3 lg:flex">
                    <div className="h-1 w-5 rounded-full bg-side" />
                    <div className="h-1 w-10 rounded-full bg-side" />
                    <div className="h-5 w-5 rounded-full bg-side" />
                  </div>

                  <h2 className="max-w-lg text-center text-3xl font-extrabold text-quaternary lg:max-w-xl lg:text-4xl">
                    Informasi Penting Dalam Satu Pandangan
                  </h2>

                  <div className="hidden items-center gap-3 lg:flex">
                    <div className="h-5 w-5 rounded-full bg-side" />
                    <div className="h-1 w-10 rounded-full bg-side" />
                    <div className="h-1 w-5 rounded-full bg-side" />
                  </div>
                </div>
              </div>

              <div className="mt-5 max-w-lg text-center text-xs lg:text-sm">
                <p className="text-primary">
                  Bagian ini bisa menjadi penghubung antara sertifikasi dan
                  kepercayaan Anda sebagai konsumen.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-7 lg:flex-row">
              <div className="relative h-fit w-fit">
                <div className="h-60 w-full max-w-xs translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5 select-none">
                  <div className="flex flex-col items-center justify-center gap-7">
                    <div className="flex flex-col items-center justify-center gap-5">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30 52 L45 67 L72 35"
                            stroke="white"
                            stroke-width="8"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

                      <h4 className="font-extrabold text-accentThrd">
                        Informasi Ringkas
                      </h4>
                    </div>

                    <div className="max-w-xs text-center font-medium">
                      <p className="text-sm text-quaternary">
                        Semua informasi ditampilkan lengkap dangan versi yang
                        lebih ringkas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="h-60 w-full max-w-xs translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5 select-none">
                  <div className="flex flex-col items-center justify-center gap-7">
                    <div className="flex flex-col items-center justify-center gap-5">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30 52 L45 67 L72 35"
                            stroke="white"
                            stroke-width="8"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

                      <h4 className="font-extrabold text-accentThrd">
                        Validasi Terjamin
                      </h4>
                    </div>

                    <div className="max-w-xs text-center font-medium">
                      <p className="text-sm text-quaternary">
                        Keaslian sertifikat sudah terjamin dan Anda tidak perlu
                        ragu atas keasliannya.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </div>

              <div className="relative h-fit w-fit">
                <div className="h-60 w-full max-w-xs translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5 select-none">
                  <div className="flex flex-col items-center justify-center gap-7">
                    <div className="flex flex-col items-center justify-center gap-5">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30 52 L45 67 L72 35"
                            stroke="white"
                            stroke-width="8"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

                      <h4 className="font-extrabold text-accentThrd">
                        Beras Berkualitas Tinggi Terjamin
                      </h4>
                    </div>

                    <div className="max-w-xs text-center font-medium">
                      <p className="text-sm text-quaternary">
                        Beras Rejonik sudah dijamin bebas bahan kimia berbahaya
                        dan berkualitas tinggi.
                      </p>
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
// Why //

// Certificate //
function Content() {
  const certificatesData = [
    {
      id: 1,
      title: "Certificate 1",
      icon: "/img/LittleRio.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione.",
      noCert: "ID0042000001857220121",
      expired: "12 Des 2045",
      lembaga: "LSO-ORGANIK Indonesia",
      kategori: "Produk Pertanian Organik",
      status: "Terverifikasi",
      image: "/img/imagetest.jpeg",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Certificate 2",
      icon: "/img/LittleRio.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione.",
      noCert: "ID0042000001857220122",
      expired: "15 Jan 2046",
      lembaga: "Kementan RI",
      kategori: "Keamanan Pangan",
      status: "Terverifikasi",
      image: "/img/imagetest.jpeg",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Certificate 3",
      icon: "/img/LittleRio.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione.",
      noCert: "ID0042000001857220123",
      expired: "20 Feb 2047",
      lembaga: "SUCOFINDO",
      kategori: "Sistem Manajemen Mutu",
      status: "Terverifikasi",
      image: "/img/imagetest.jpeg",
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Certificate 4",
      icon: "/img/LittleRio.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione.",
      noCert: "ID0042000001857220124",
      expired: "10 Mar 2048",
      lembaga: "Laboratorium Pengujian Mutu",
      kategori: "Uji Laboratorium",
      status: "Terverifikasi",
      image: "/img/imagetest.jpeg",
      downloadUrl: "#",
    },
  ];

  const [selectedCert, setSelectedCert] = useState(certificatesData[0]);

  const handleSelectedCert = (cert) => {
    setSelectedCert(cert);

    const detailSection = document.getElementById("detail-sertifikat");
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="certificate">
      <section id="sertifikat" className="pt-36 pb-32">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-20 flex flex-col items-center justify-center select-none">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="mb-3 flex items-center justify-center gap-3">
                  <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                  <h3 className="text-sm font-light text-side uppercase">
                    Product Certificate
                  </h3>
                  <div className="h-0.5 w-5 rounded-lg bg-side"></div>
                </div>

                <div className="flex gap-7">
                  <div className="hidden items-center gap-3 lg:flex">
                    <div className="h-1 w-5 rounded-full bg-side" />
                    <div className="h-1 w-10 rounded-full bg-side" />
                    <div className="h-5 w-5 rounded-full bg-side" />
                  </div>

                  <h2 className="max-w-lg text-center text-3xl font-extrabold text-quaternary lg:max-w-xl lg:text-4xl">
                    Sertifikat yang Dimiliki Oleh Rejonik
                  </h2>

                  <div className="hidden items-center gap-3 lg:flex">
                    <div className="h-5 w-5 rounded-full bg-side" />
                    <div className="h-1 w-10 rounded-full bg-side" />
                    <div className="h-1 w-5 rounded-full bg-side" />
                  </div>
                </div>
              </div>

              <div className="mt-5 max-w-lg text-center text-xs lg:text-sm">
                <p className="text-primary">
                  Kami memperlihatkan sertifikat yang dimiliki produk kami untuk
                  membuktikan kami menghadirkan beras organik terbaik.
                </p>
              </div>
            </div>

            <div className="mb-10 grid grid-cols-1 justify-items-center gap-7 lg:grid-cols-2 2xl:hidden 2xl:grid-cols-4">
              {certificatesData.map((cert) => {
                const isActive = selectedCert.id === cert.id;
                return (
                  <div key={cert.id} className="relative h-fit w-fit">
                    <div
                      className={`h-105 w-80 translate-x-3 -translate-y-3 rounded-sm border-2 bg-tertiary p-5 ${
                        isActive
                          ? "border-side ring-2 ring-side"
                          : "border-accentThrd"
                      }`}
                    >
                      <div className="flex flex-col items-center justify-between gap-6">
                        <div className="flex flex-col items-center justify-center gap-5 select-none">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-side">
                            <img src={cert.icon} alt={cert.title} />
                          </div>

                          <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-bold text-accentThrd">
                              {cert.title}
                            </h3>

                            <p className="text-xs font-medium text-quaternary">
                              {cert.description}
                            </p>
                          </div>
                        </div>

                        <div className="h-0.5 w-full rounded-full bg-quaternary" />

                        <div className="w-full">
                          <table className="mx-auto w-full table-fixed overflow-hidden rounded-md bg-white outline-2 outline-primary select-none">
                            <tbody className="text-[10px] font-semibold">
                              <tr className="outline-1 outline-primary">
                                <td className="p-2 px-5 text-accentThrd">
                                  Nomor Sertifikat
                                </td>
                                <td className="p-2 px-5 font-normal text-quaternary">
                                  {cert.noCert}
                                </td>
                              </tr>
                              <tr className="outline-1 outline-primary">
                                <td className="p-2 px-5 text-accentThrd">
                                  Berlaku Hingga
                                </td>
                                <td className="p-2 px-5 font-normal text-quaternary">
                                  {cert.expired}
                                </td>
                              </tr>
                              <tr className="outline-1 outline-primary">
                                <td className="p-2 px-5 text-accentThrd">
                                  Nomor Sertifikat
                                </td>
                                <td className="p-2 px-5 font-normal text-quaternary">
                                  ORG-2026-001928
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleSelectedCert(cert)}
                          className="w-full cursor-pointer"
                        >
                          <motion.div
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            variants={{
                              rest: {
                                color: "#FFFFFF",
                                backgroundColor: "#4AAB00",
                              },
                              hover: {
                                color: "#4AAB00",
                                backgroundColor: "#FFFFFF",
                              },
                            }}
                            whileTap={{
                              opacity: 0.8,
                            }}
                            className="flex w-full items-center justify-center gap-1 rounded-full p-2 outline outline-side select-none"
                          >
                            <span>Lihat Detail</span>

                            <motion.svg
                              variants={{
                                rest: { x: 0 },
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
                              aria-hidden="true"
                            >
                              <path d="m9 18 6-6-6-6"></path>
                            </motion.svg>
                          </motion.div>
                        </button>
                      </div>
                    </div>

                    <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                  </div>
                );
              })}
            </div>

            <div className="mb-10 flex items-center justify-center gap-5 text-center select-none 2xl:hidden">
              <div className="hidden h-0.5 w-full rounded-full bg-quaternary lg:block" />
              <div className="w-full max-w-sm">
                <h2 className="text-3xl font-bold text-quaternary">
                  Detail Setifikat
                </h2>
              </div>
              <div className="hidden h-0.5 w-full rounded-full bg-quaternary lg:block" />
            </div>

            <div className="flex flex-row items-center justify-center gap-5">
              <div className="hidden grid-cols-2 justify-items-center gap-10 2xl:grid">
                {certificatesData.map((cert) => {
                  const isActive = selectedCert.id === cert.id;
                  return (
                    <div key={cert.id} className="relative h-fit w-fit">
                      <div
                        className={`h w-80 rounded-sm border-2 bg-tertiary p-5 transition-all ${
                          isActive
                            ? "border-side ring-2 ring-side scale-105 translate-x-0 translate-y-0"
                            : "border-accentThrd translate-x-3 -translate-y-3"
                        }`}
                      >
                        <div className="flex flex-col items-center justify-center gap-6">
                          <div className="flex flex-col items-center justify-center gap-5 select-none">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-side">
                              <img src={cert.icon} alt={cert.title} />
                            </div>

                            <div className="flex flex-col gap-1">
                              <h3 className="text-xl font-bold text-accentThrd">
                                {cert.title}
                              </h3>

                              <p className="text-xs font-medium text-quaternary">
                                {cert.description}
                              </p>
                            </div>
                          </div>

                          <div className="h-0.5 w-full rounded-full bg-quaternary" />

                          <button
                            type="button"
                            onClick={() => handleSelectedCert(cert)}
                            className="w-full cursor-pointer"
                          >
                            <motion.div
                              initial="rest"
                              whileHover="hover"
                              animate="rest"
                              variants={{
                                rest: {
                                  color: "#FFFFFF",
                                  backgroundColor: "#4AAB00",
                                },
                                hover: {
                                  color: "#4AAB00",
                                  backgroundColor: "#FFFFFF",
                                },
                              }}
                              whileTap={{
                                opacity: 0.8,
                              }}
                              className="flex w-full items-center justify-center gap-1 rounded-full p-2 outline outline-side select-none"
                            >
                              <span>Lihat Detail</span>

                              <motion.svg
                                variants={{
                                  rest: { x: 0 },
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
                                aria-hidden="true"
                              >
                                <path d="m9 18 6-6-6-6"></path>
                              </motion.svg>
                            </motion.div>
                          </button>
                        </div>
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>
                  );
                })}
              </div>

              <div className="mx-auto flex overflow-x-auto rounded-sm outline-2 outline-accentThrd lg:w-fit">
                <div className="mx-auto h-fit max-w-3xl">
                  <div className="h-170 w-full rounded-sm bg-tertiary p-5">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="flex w-full items-center gap-5">
                        <div className="flex h-30 w-30 items-center justify-center rounded-full bg-side/40 outline-2 outline-accentThrd">
                          <div className="flex h-15 w-15 items-center justify-center rounded-full bg-side">
                            <svg
                              width="100"
                              height="100"
                              viewBox="0 0 100 100"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M30 52 L45 67 L72 35"
                                stroke="white"
                                stroke-width="8"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center select-none">
                          <h4 className="text-sm text-side uppercase">
                            Original Certificate
                          </h4>
                          <div className="flex w-fit flex-col">
                            <h3 className="text-4xl font-bold text-accentThrd">
                              {selectedCert.title}
                            </h3>

                            <div className="h-1 w-full rounded-full bg-side" />
                          </div>
                        </div>
                      </div>

                      <div className="flex w-full justify-center gap-5">
                        <div className="w-full">
                          <table className="w-full table-fixed overflow-hidden rounded-md bg-white outline-2 outline-primary select-none">
                            <tbody className="text-xs">
                              <tr className="outline outline-primary">
                                <td className="p-2 px-5 font-bold text-accentThrd">
                                  Nomor Sertifikat
                                </td>
                                <td className="p-2 px-5 text-quaternary">
                                  {selectedCert.noCert}
                                </td>
                              </tr>
                              <tr className="outline outline-primary">
                                <td className="p-2 px-5 font-bold text-accentThrd">
                                  Lembaga
                                </td>
                                <td className="p-2 px-5 text-quaternary">
                                  {selectedCert.lembaga}
                                </td>
                              </tr>
                              <tr className="outline outline-primary">
                                <td className="p-2 px-5 font-bold text-accentThrd">
                                  Status
                                </td>
                                <td className="flex items-center gap-2 p-2 px-5 text-side">
                                  <div className="h-2 w-2 rounded-full bg-side" />

                                  <span>{selectedCert.status}</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="w-full">
                          <table className="w-full table-fixed overflow-hidden rounded-md bg-white outline-2 outline-primary select-none">
                            <tbody className="text-xs">
                              <tr className="outline outline-primary">
                                <td className="p-2 px-5 font-bold text-accentThrd">
                                  Berlaku Hingga
                                </td>
                                <td className="p-2 px-5 text-quaternary">
                                  {selectedCert.expired}
                                </td>
                              </tr>
                              <tr className="outline outline-primary">
                                <td className="p-2 px-5 font-bold text-accentThrd">
                                  Kategori
                                </td>
                                <td className="p-2 px-5 text-quaternary">
                                  {selectedCert.kategori}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="flex w-full justify-center gap-10 rounded-md bg-white p-5 outline-2 outline-primary">
                        <div className="h-80 w-80 overflow-hidden rounded-md bg-tertiary p-2 outline-2 outline-accentThrd select-none">
                          <img
                            src="/img/imagetest.jpeg"
                            alt="Sertifikat"
                            className="rounded-md"
                          />
                        </div>
                        <div className="flex h-fit w-80 flex-col gap-5 overflow-hidden rounded-md bg-tertiary p-4 outline-2 outline-accentThrd select-none">
                          <span className="font-bold text-accentThrd">
                            Download Dokumen
                          </span>

                          <a href="" className="w-full">
                            <motion.button
                              initial={{
                                color: "#FFFFFF",
                                backgroundColor: "#4AAB00",
                              }}
                              whileHover={{
                                color: "#4AAB00",
                                backgroundColor: "#FFFFFF",
                              }}
                              whileTap={{
                                opacity: 0.8,
                              }}
                              className="w-full rounded-full p-2 outline outline-side"
                            >
                              Unduh
                            </motion.button>
                          </a>
                        </div>
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
// Certificate //
