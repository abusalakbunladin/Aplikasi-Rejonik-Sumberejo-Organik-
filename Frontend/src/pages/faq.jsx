import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Order from "./components/order-section.jsx";

export default function FAQ() {
  return (
    <div className="app">
      <Navbar />
      <Content />
      <Questions />
      <Order />
      <Footer />
    </div>
  );
}

// Content //
function Content() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState("order");

  const orderRef = useRef(null);
  const productRef = useRef(null);
  const infoRef = useRef(null);

  const handleBtnClick = (tabId, elementRef) => {
    setActiveTab(tabId);

    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="content">
      <section id="faq" className="pt-50 pb-36">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-10 flex flex-col items-center justify-center gap-3 select-none lg:items-start">
              <div className="rounded-full border-2 border-accentThrd bg-tertiary p-0.5 px-3">
                <h4 className="font-bold text-side">Latest FAQ's</h4>
              </div>

              <div className="max-w-2xl text-3xl lg:max-w-full lg:text-4xl xl:text-6xl">
                <h2 className="font-extrabold text-primary">
                  Temukan Jawaban untuk Pemesanan, Pengiriman, Produk, dan
                  Informasi Umum
                </h2>
              </div>
            </div>

            <div className="mb-20 lg:hidden flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <button
                className="relative h-fit w-fit cursor-pointer"
                onClick={() => handleBtnClick("order", orderRef)}
              >
                <div
                  className={`flex items-center justify-center gap-2 rounded-sm p-1.5 px-3 ring-2 transition-all ${
                    activeTab === "order"
                      ? "translate-x-2 -translate-y-2 bg-white ring-side"
                      : "bg-tertiary ring-accentThrd"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7v10l10 5 10-5V7L12 2z"
                      fill="#D98C3D"
                      stroke="#B8752E"
                      stroke-width="0.5"
                    />
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#E8A85C" />
                    <path d="M2 7l10 5v10L2 17V7z" fill="#C97D33" />
                    <path d="M22 7l-10 5v10l10-5V7z" fill="#B8752E" />
                    <path
                      d="M7 4.5l10 5"
                      stroke="#8B5A2B"
                      stroke-width="0.8"
                      fill="none"
                    />
                  </svg>

                  <span
                    className={`font-semibold transition-colors ${
                      activeTab === "order" ? "text-side" : "text-primary"
                    }`}
                  >
                    Pemesanan & Pengiriman
                  </span>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </button>

              <button
                className="relative h-fit w-fit cursor-pointer"
                onClick={() => handleBtnClick("product", productRef)}
              >
                <div
                  className={`flex items-center justify-center gap-2 rounded-sm p-1.5 px-3 ring-2 transition-all ${
                    activeTab === "product"
                      ? "translate-x-2 -translate-y-2 bg-white ring-side"
                      : "bg-tertiary ring-accentThrd"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21V9.5"
                      stroke="#1B5200"
                      stroke-width="1.4"
                      stroke-linecap="round"
                    />

                    <path
                      d="M12 17c-2.2-0.3-3.8 0.6-4.3 2.2-0.2 0.6 0.2 1.1 0.8 0.9 1.7-0.5 3-1.7 3.5-3.1z"
                      fill="#EBD700"
                    />
                    <path
                      d="M12 17c2.2-0.3 3.8 0.6 4.3 2.2 0.2 0.6-0.2 1.1-0.8 0.9-1.7-0.5-3-1.7-3.5-3.1z"
                      fill="#EBD700"
                    />

                    <path
                      d="M12 13.3c-2-0.5-3.6 0.2-4.2 1.7-0.3 0.6 0.1 1.1 0.7 1 1.7-0.3 3.1-1.4 3.5-2.7z"
                      fill="#EBD700"
                    />
                    <path
                      d="M12 13.3c2-0.5 3.6 0.2 4.2 1.7 0.3 0.6-0.1 1.1-0.7 1-1.7-0.3-3.1-1.4-3.5-2.7z"
                      fill="#EBD700"
                    />

                    <path
                      d="M12 9.8c-1.8-0.6-3.3-0.1-4 1.2-0.3 0.6 0 1.1 0.6 1.1 1.6-0.1 3-1 3.4-2.3z"
                      fill="#EBD700"
                    />
                    <path
                      d="M12 9.8c1.8-0.6 3.3-0.1 4 1.2 0.3 0.6 0 1.1-0.6 1.1-1.6-0.1-3-1-3.4-2.3z"
                      fill="#EBD700"
                    />

                    <path
                      d="M12 9.5c-0.9-1.5-0.8-3-0.1-4.1 0.4-0.6 1-0.6 1.3 0 0.8 1.3 0.7 2.8-0.2 4.1-0.3 0.4-0.7 0.4-1 0z"
                      fill="#FFE273"
                    />
                  </svg>

                  <span
                    className={`font-semibold transition-colors ${
                      activeTab === "product" ? "text-side" : "text-primary"
                    }`}
                  >
                    Produk & Kualitas
                  </span>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </button>

              <button
                className="relative h-fit w-fit cursor-pointer"
                onClick={() => handleBtnClick("info", infoRef)}
              >
                <div
                  className={`flex items-center justify-center gap-2 rounded-sm p-1.5 px-3 ring-2 transition-all ${
                    activeTab === "info"
                      ? "translate-x-2 -translate-y-2 bg-white ring-side"
                      : "bg-tertiary ring-accentThrd"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" fill="#3B82C4" />
                    <circle cx="12" cy="7.5" r="1.3" fill="white" />
                    <rect
                      x="10.8"
                      y="10.5"
                      width="2.4"
                      height="7"
                      rx="1.2"
                      fill="white"
                    />
                  </svg>

                  <span
                    className={`font-semibold transition-colors ${
                      activeTab === "info" ? "text-side" : "text-primary"
                    }`}
                  >
                    Informasi Umum
                  </span>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </button>
            </div>

            <div className="flex flex-col items-start justify-center gap-10 lg:flex-row">
              <aside className="sticky top-50 hidden h-fit w-100 lg:block">
                <div className="translate-x-3 -translate-y-3 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                  <h4 className="mb-5 text-3xl font-bold text-primary">
                    Kategori FAQ
                  </h4>

                  <div className="flex flex-col items-center justify-center gap-3">
                    <button
                      className="relative h-fit w-full cursor-pointer"
                      onClick={() => handleBtnClick("order", orderRef)}
                    >
                      <div
                        className={`flex items-center justify-center gap-2 rounded-sm p-1.5 px-3 ring-2 transition-all ${
                          activeTab === "order"
                            ? "scale-105 bg-side ring-white"
                            : "bg-white ring-primary"
                        }`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2L2 7v10l10 5 10-5V7L12 2z"
                            fill="#D98C3D"
                            stroke="#B8752E"
                            stroke-width="0.5"
                          />
                          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#E8A85C" />
                          <path d="M2 7l10 5v10L2 17V7z" fill="#C97D33" />
                          <path d="M22 7l-10 5v10l10-5V7z" fill="#B8752E" />
                          <path
                            d="M7 4.5l10 5"
                            stroke="#8B5A2B"
                            stroke-width="0.8"
                            fill="none"
                          />
                        </svg>

                        <span
                          className={`font-semibold transition-colors ${
                            activeTab === "order"
                              ? "text-white"
                              : "text-primary"
                          }`}
                        >
                          Pemesanan & Pengiriman
                        </span>
                      </div>
                    </button>

                    <button
                      className="relative h-fit w-full cursor-pointer"
                      onClick={() => handleBtnClick("product", productRef)}
                    >
                      <div
                        className={`flex items-center justify-center gap-2 rounded-sm p-1.5 px-3 ring-2 transition-all ${
                          activeTab === "product"
                            ? "scale-105 bg-side ring-white"
                            : "bg-white ring-primary"
                        }`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 21V9.5"
                            stroke="#1B5200"
                            stroke-width="1.4"
                            stroke-linecap="round"
                          />

                          <path
                            d="M12 17c-2.2-0.3-3.8 0.6-4.3 2.2-0.2 0.6 0.2 1.1 0.8 0.9 1.7-0.5 3-1.7 3.5-3.1z"
                            fill="#EBD700"
                          />
                          <path
                            d="M12 17c2.2-0.3 3.8 0.6 4.3 2.2 0.2 0.6-0.2 1.1-0.8 0.9-1.7-0.5-3-1.7-3.5-3.1z"
                            fill="#EBD700"
                          />

                          <path
                            d="M12 13.3c-2-0.5-3.6 0.2-4.2 1.7-0.3 0.6 0.1 1.1 0.7 1 1.7-0.3 3.1-1.4 3.5-2.7z"
                            fill="#EBD700"
                          />
                          <path
                            d="M12 13.3c2-0.5 3.6 0.2 4.2 1.7 0.3 0.6-0.1 1.1-0.7 1-1.7-0.3-3.1-1.4-3.5-2.7z"
                            fill="#EBD700"
                          />

                          <path
                            d="M12 9.8c-1.8-0.6-3.3-0.1-4 1.2-0.3 0.6 0 1.1 0.6 1.1 1.6-0.1 3-1 3.4-2.3z"
                            fill="#EBD700"
                          />
                          <path
                            d="M12 9.8c1.8-0.6 3.3-0.1 4 1.2 0.3 0.6 0 1.1-0.6 1.1-1.6-0.1-3-1-3.4-2.3z"
                            fill="#EBD700"
                          />

                          <path
                            d="M12 9.5c-0.9-1.5-0.8-3-0.1-4.1 0.4-0.6 1-0.6 1.3 0 0.8 1.3 0.7 2.8-0.2 4.1-0.3 0.4-0.7 0.4-1 0z"
                            fill="#FFE273"
                          />
                        </svg>

                        <span
                          className={`font-semibold transition-colors ${
                            activeTab === "product"
                              ? "text-white"
                              : "text-primary"
                          }`}
                        >
                          Produk & Kualitas
                        </span>
                      </div>
                    </button>

                    <button
                      className="relative h-fit w-full cursor-pointer"
                      onClick={() => handleBtnClick("info", infoRef)}
                    >
                      <div
                        className={`flex items-center justify-center gap-2 rounded-sm p-1.5 px-3 ring-2 transition-all ${
                          activeTab === "info"
                            ? "scale-105 bg-side ring-white"
                            : "bg-white ring-primary"
                        }`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="10" fill="#3B82C4" />
                          <circle cx="12" cy="7.5" r="1.3" fill="white" />
                          <rect
                            x="10.8"
                            y="10.5"
                            width="2.4"
                            height="7"
                            rx="1.2"
                            fill="white"
                          />
                        </svg>

                        <span
                          className={`font-semibold transition-colors ${
                            activeTab === "info" ? "text-white" : "text-primary"
                          }`}
                        >
                          Informasi Umum
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
              </aside>

              <main className="flex w-full flex-col gap-10">
                <section ref={orderRef} className="scroll-mt-50">
                  <div className="mb-5 flex w-fit flex-col justify-center select-none">
                    <div className="mb-1 flex items-center gap-3">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L2 7v10l10 5 10-5V7L12 2z"
                          fill="#D98C3D"
                          stroke="#B8752E"
                          stroke-width="0.5"
                        />
                        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#E8A85C" />
                        <path d="M2 7l10 5v10L2 17V7z" fill="#C97D33" />
                        <path d="M22 7l-10 5v10l10-5V7z" fill="#B8752E" />
                        <path
                          d="M7 4.5l10 5"
                          stroke="#8B5A2B"
                          stroke-width="0.8"
                          fill="none"
                        />
                      </svg>

                      <span className="text-2xl font-extrabold text-quaternary lg:text-3xl">
                        Pemesanan & Pengiriman
                      </span>
                    </div>

                    <div className="h-1 w-full rounded-full bg-primary" />
                  </div>

                  <div className="flex w-full flex-col items-center justify-center gap-5">
                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Bagaimana cara memesan beras organik Rejonik?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(1)}
                            animate={openIndex === 1 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 1 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Anda bisa memesan melalui website kami, WhatsApp,
                              atau marketplace resmi (Shopee). Pilih varian
                              produk, masukkan ke keranjang, dan selesaikan
                              pembayaran.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>

                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Berapa lama waktu pengiriman pesanan?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(2)}
                            animate={openIndex === 2 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 2 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Pengiriman dalam kota memakan waktu 1-2 hari
                              kerja. Luar kota 3-5 hari kerja. Untuk luar Jawa,
                              estimasi 5-7 hari kerja tergantung lokasi dan
                              ekspedisi.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>

                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Apakah ada minimum pemesanan?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(3)}
                            animate={openIndex === 3 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 3 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Tidak ada minimum order untuk pembelian online.
                              Namun untuk pemesanan grosir/bulk (di atas 50kg),
                              silakan hubungi tim penjualan kami untuk harga
                              spesial.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>

                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Metode pembayaran apa saja yang tersedia?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(4)}
                            animate={openIndex === 4 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 4 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Kami menerima transfer bank (BCA, BRI, Mandiri,
                              BNI), e-wallet (GoPay, OVO, Dana, ShopeePay), dan
                              pembayaran via marketplace.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>

                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Bagaimana cara melacak status pesanan saya?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(5)}
                            animate={openIndex === 5 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 5 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Setelah pesanan dikirim, Anda akan menerima nomor
                              resi via Web kami. Gunakan nomor resi tersebut
                              untuk tracking di website ekspedisi terkait.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>
                  </div>
                </section>

                <section ref={productRef} className="scroll-mt-50">
                  <div className="mb-5 flex w-fit flex-col justify-center select-none">
                    <div className="mb-1 flex items-center gap-3">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21V9.5"
                          stroke="#1B5200"
                          stroke-width="1.4"
                          stroke-linecap="round"
                        />

                        <path
                          d="M12 17c-2.2-0.3-3.8 0.6-4.3 2.2-0.2 0.6 0.2 1.1 0.8 0.9 1.7-0.5 3-1.7 3.5-3.1z"
                          fill="#EBD700"
                        />
                        <path
                          d="M12 17c2.2-0.3 3.8 0.6 4.3 2.2 0.2 0.6-0.2 1.1-0.8 0.9-1.7-0.5-3-1.7-3.5-3.1z"
                          fill="#EBD700"
                        />

                        <path
                          d="M12 13.3c-2-0.5-3.6 0.2-4.2 1.7-0.3 0.6 0.1 1.1 0.7 1 1.7-0.3 3.1-1.4 3.5-2.7z"
                          fill="#EBD700"
                        />
                        <path
                          d="M12 13.3c2-0.5 3.6 0.2 4.2 1.7 0.3 0.6-0.1 1.1-0.7 1-1.7-0.3-3.1-1.4-3.5-2.7z"
                          fill="#EBD700"
                        />

                        <path
                          d="M12 9.8c-1.8-0.6-3.3-0.1-4 1.2-0.3 0.6 0 1.1 0.6 1.1 1.6-0.1 3-1 3.4-2.3z"
                          fill="#EBD700"
                        />
                        <path
                          d="M12 9.8c1.8-0.6 3.3-0.1 4 1.2 0.3 0.6 0 1.1-0.6 1.1-1.6-0.1-3-1-3.4-2.3z"
                          fill="#EBD700"
                        />

                        <path
                          d="M12 9.5c-0.9-1.5-0.8-3-0.1-4.1 0.4-0.6 1-0.6 1.3 0 0.8 1.3 0.7 2.8-0.2 4.1-0.3 0.4-0.7 0.4-1 0z"
                          fill="#FFE273"
                        />
                      </svg>

                      <span className="text-2xl font-extrabold text-quaternary lg:text-3xl">
                        Produk & Kualitas
                      </span>
                    </div>

                    <div className="h-1 w-full rounded-full bg-primary" />
                  </div>

                  <div className="flex w-full flex-col items-center justify-center gap-5">
                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Apa perbedaan beras organik dengan beras biasa?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(6)}
                            animate={openIndex === 6 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 6 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Beras organik Rejonik ditanam tanpa pestisida
                              kimia, pupuk sintetis, atau bahan kimia berbahaya.
                              Proses budidaya menggunakan sistem pertanian
                              organik bersertifikat SNI.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>

                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Apakah beras Rejonik memiliki sertifikasi resmi?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(7)}
                            animate={openIndex === 7 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 7 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Ya, produk kami memiliki sertifikasi organik dari
                              LSO (Lembaga Sertifikasi Organik), sertifikat SNI,
                              sertifikat Halal MUI, dan izin BPOM.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>

                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Berapa lama masa simpan beras Rejonik?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(8)}
                            animate={openIndex === 8 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 8 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Beras Rejonik memiliki masa simpan 6-12 bulan jika
                              disimpan di tempat kering, sejuk, dan tertutup
                              rapat. Hindari paparan sinar matahari langsung.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>
                  </div>
                </section>

                <section ref={infoRef} className="scroll-mt-50">
                  <div className="mb-5 flex w-fit flex-col justify-center select-none">
                    <div className="mb-1 flex items-center gap-3">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" fill="#3B82C4" />
                        <circle cx="12" cy="7.5" r="1.3" fill="white" />
                        <rect
                          x="10.8"
                          y="10.5"
                          width="2.4"
                          height="7"
                          rx="1.2"
                          fill="white"
                        />
                      </svg>

                      <span className="text-2xl font-extrabold text-quaternary lg:text-3xl">
                        Informasi Umum
                      </span>
                    </div>

                    <div className="h-1 w-full rounded-full bg-primary" />
                  </div>

                  <div className="flex w-full flex-col items-center justify-center gap-5">
                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Jam operasional layanan pelanggan?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(9)}
                            animate={openIndex === 9 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 9 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Customer service kami aktif Senin-Jumat pukul
                              08.00-17.00 WIB and Sabtu pukul 08.00-12.00 WIB.
                              Di luar jam tersebut, silakan tinggalkan pesan via
                              WhatsApp.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>

                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Bagaimana jika saya kehilangan informasi pesanan
                              atau nomor pesanan?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(10)}
                            animate={openIndex === 10 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 10 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Silakan masukkan nomor WhatsApp yang digunakan
                              saat melakukan pemesanan untuk menemukan kembali
                              informasi pesanan Anda, termasuk nomor pesanan,
                              detail produk, total pembayaran, alamat
                              pengiriman, dan status pesanan.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>

                    <div className="relative h-fit w-full">
                      <div className="h-fit translate-x-2 -translate-y-2 rounded-sm border-2 border-accentThrd bg-tertiary p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex h-fit items-center gap-3 select-none">
                            <div className="h-5 w-1 rounded-full bg-side" />

                            <span className="text-lg font-bold text-quaternary">
                              Dimana lokasi sawah dan pabrik pengolahan Rejonik?
                            </span>
                          </div>

                          <motion.button
                            className="h-fit w-fit cursor-pointer"
                            onClick={() => toggleFaq(11)}
                            animate={openIndex === 11 ? "open" : "closed"}
                          >
                            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-side/50">
                              <motion.div
                                className="absolute top-1/2 left-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                variants={{
                                  closed: {
                                    scaleY: 1,
                                  },
                                  open: {
                                    scaleY: 0,
                                  },
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            </div>
                          </motion.button>
                        </div>

                        {openIndex === 11 && (
                          <div className="mt-4 h-fit w-full rounded-sm bg-white p-2 text-justify outline-2 outline-primary">
                            <p className="text-sm font-medium text-accentThrd">
                              Sawah kami berlokasi di Desa Sumberejo, Kecamatan
                              Panji, Kabupaten Situbondo, Timur. Pabrik
                              pengolahan berada di area yang sama untuk menjaga
                              kesegaran produk.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-0 -z-1 h-full w-full rounded-sm bg-primary" />
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Content //

// Questions //
function Questions() {
  return (
    <div className="order">
      <section
        id="pesan"
        className="bg-linear-to-l from-primary/60 to-side/60 pt-20 pb-20"
      >
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="text-center select-none">
                <h2 className="mb-10 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
                  Masih ada pertanyaan yang belum dijawab?
                </h2>

                <div className="text-xs font-semibold text-white md:text-sm lg:text-base">
                  <p>
                    Tim kami akan siap membantu menjawab pertanyaan Anda yang
                    masih belum dijawab oleh kami.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 text-center select-none">
                <div className="flex flex-row gap-5">
                  <Link to="/">
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
                      className="cursor-pointer rounded-full border-2 p-2 px-5 font-bold"
                    >
                      <span>Hubungi Kami</span>
                    </motion.button>
                  </Link>

                  <Link>
                    <motion.button
                      initial={{
                        scale: 1,
                        backgroundColor: "#25D366",
                        borderColor: "#ffffff",
                        color: "#ffffff",
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#ffffff",
                        borderColor: "#25D366",
                        color: "#25D366",
                      }}
                      whileTap={{
                        scaleX: 0.9,
                        scaleY: 1.2,
                      }}
                      className="flex cursor-pointer items-center gap-2 rounded-full border-2 p-2 px-5 font-bold"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>WhatsApp</title>
                        <path
                          fill="currentColor"
                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                        />
                      </svg>
                      <span>Hubungi Via WhatsApp</span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// Questions //
