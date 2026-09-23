import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Produk", path: "/produk" },
    { name: "Keunggulan", path: "/keunggulan" },
    { name: "Tentang Kami", path: "/tentang" },
    { name: "Sertifikat", path: "/sertifikat" },
    { name: "Review", path: "/review" },
  ];
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleBrandClick = () => {
    if (window.location.pathname === "/") {
      window.location.reload();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
      <motion.header
        animate={isOpen ? "open" : isScrolled ? "scrolled" : "closed"}
        variants={{
          closed: {
            backgroundColor: "rgb(255, 255, 255, 0.1)",
            borderColor: "rgb(255, 255, 255, 0.3)",
          },
          open: { backgroundColor: "#FFF9E3", borderColor: "#4D2E00" },
          scrolled: { backgroundColor: "#FFF9E3", borderColor: "#4D2E00" },
        }}
        className="nav fixed z-1000 flex h-fit w-full items-center justify-center border-b-2 border-white/50 p-2 shadow-lg backdrop-blur-xl"
      >
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between px-4">
            <div className={isScrolled ? "" : "grayscale"}>
              <Link to="/" onClick={handleBrandClick}>
                <img src="/brand/brand-logo.png" alt="Brand" width="200" />
              </Link>
            </div>

            <motion.div
              animate={isScrolled ? "scrolled" : "closed"}
              className="hidden flex-row items-center gap-10 text-sm lg:flex"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    className="w-fit"
                    to={item.path}
                    onClick={handleNavClick}
                  >
                    <motion.span
                      variants={{
                        closed: { color: isActive ? "#4AAB00" : "#ffffff" },
                        scrolled: { color: isActive ? "#1B5200" : "#1B5200" },
                      }}
                      whileHover={{
                        color: "#4AAB00",
                      }}
                      whileTap={{
                        opacity: 0.8,
                      }}
                    >
                      {item.name}
                    </motion.span>

                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`-bottom-1 mx-auto mt-1 h-0.5 w-4 rounded-full ${isScrolled ? "bg-primary" : "bg-side"}`}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 100,
                          damping: 10
                        }}
                      />
                    )}
                  </Link>
                );
              })}

              <Link className="mx-auto w-fit" to="/">
                <motion.button
                  className="relative w-full cursor-pointer overflow-hidden rounded-full border p-2 px-5 text-sm font-medium"
                  initial="closed"
                  animate={isScrolled ? "scrolled" : "closed"}
                  whileHover="hover"
                  variants={{
                    closed: { borderColor: "#ffffff", color: "#ffffff" },
                    scrolled: { borderColor: "#4AAB00", color: "#4AAB00" },
                    hover: {
                      borderColor: isScrolled ? "#4AAB00" : "#4AAB00",
                      color: isScrolled ? "#ffffff" : "#4AAB00",
                    },
                  }}
                >
                  Login Admin
                  <motion.div
                    className="absolute top-0 left-1/2 -z-1 h-9 w-9 -translate-x-1/2 rounded-full"
                    variants={{
                      closed: { backgroundColor: "#ffffff", scale: 0 },
                      scrolled: { backgroundColor: "#4AAB00", scale: 0 },
                      hover: { scale: 3.4 },
                    }}
                    transition={{
                      duration: 0.07,
                    }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            <div className="flex items-center gap-5 lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                animate={isOpen ? "open" : isScrolled ? "scrolled" : "closed"}
                className="absolute right-4 flex cursor-pointer flex-col gap-2"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 10, backgroundColor: "#4AAB00" },
                    scrolled: { backgroundColor: "#4D2E00" },
                  }}
                  className="hamburg-line bg-white"
                ></motion.span>

                <motion.span
                  variants={{
                    closed: { scaleX: 1 },
                    open: { scaleX: 0 },
                    scrolled: { backgroundColor: "#4D2E00" },
                  }}
                  className="hamburg-line bg-white"
                ></motion.span>

                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -10, backgroundColor: "#4AAB00" },
                    scrolled: { backgroundColor: "#4D2E00" },
                  }}
                  className="hamburg-line bg-white"
                ></motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              y: -300,
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: -300,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="fixed top-1/13 z-10 flex w-full flex-col gap-2 border-b-2 border-side bg-white p-4 font-medium shadow-lg lg:hidden"
          >
            <Link className="w-fit" to="/" onClick={handleNavClick}>
              <motion.span
                className="text-side lg:text-white"
                whileHover={{
                  color: "#1B5200",
                }}
                whileTap={{
                  opacity: 0.8,
                }}
              >
                Beranda
              </motion.span>
            </Link>

            <Link className="w-fit" to="/produk" onClick={handleNavClick}>
              <motion.span
                className="text-side lg:text-white"
                whileHover={{
                  color: "#1B5200",
                }}
                whileTap={{
                  opacity: 0.8,
                }}
              >
                Produk
              </motion.span>
            </Link>

            <Link className="w-fit" to="/keunggulan" onClick={handleNavClick}>
              <motion.span
                className="text-side lg:text-white"
                whileHover={{
                  color: "#1B5200",
                }}
                whileTap={{
                  opacity: 0.8,
                }}
              >
                Keunggulan
              </motion.span>
            </Link>

            <Link className="w-fit" to="/tentang" onClick={handleNavClick}>
              <motion.span
                className="text-side lg:text-white"
                whileHover={{
                  color: "#1B5200",
                }}
                whileTap={{
                  opacity: 0.8,
                }}
              >
                Tentang Kami
              </motion.span>
            </Link>

            <Link className="w-fit" to="/sertifikat" onClick={handleNavClick}>
              <motion.span
                className="text-side lg:text-white"
                whileHover={{
                  color: "#1B5200",
                }}
                whileTap={{
                  opacity: 0.8,
                }}
              >
                Sertifikat
              </motion.span>
            </Link>

            <Link className="w-fit" to="/review" onClick={handleNavClick}>
              <motion.span
                className="text-side lg:text-white"
                whileHover={{
                  color: "#1B5200",
                }}
                whileTap={{
                  opacity: 0.8,
                }}
              >
                Review
              </motion.span>
            </Link>

            <Link className="mx-auto mt-5 w-full" to="/">
              <motion.button
                className="w-full cursor-pointer rounded-full border-2 p-2"
                initial={{
                  color: "#ffffff",
                  backgroundColor: "#4AAB00",
                  borderColor: "#1B5200",
                }}
                whileHover={{
                  color: "#4D2E00",
                  backgroundColor: "#ffffff",
                  borderColor: "#4D2E00",
                }}
              >
                Login Admin
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
