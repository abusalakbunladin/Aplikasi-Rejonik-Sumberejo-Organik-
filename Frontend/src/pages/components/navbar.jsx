import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { animate } from "animejs";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    // Navbar //
    if (navRef.current && window.innerWidth >= 1024 && !animated.current) {
      animate(navRef.current.querySelector(".nav"), {
        y: [-90, 0],
        delay: 800,
        duration: 600,
        ease: "outExpo",
      });
      animated.current = true;
    }
    // Navbar //
  })

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 850) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="navbar" ref={navRef}>
      <motion.header
        animate={isOpen ? 'open' : isScrolled ? 'scrolled' : 'closed'}
        variants={{
          closed: {backgroundColor: "rgb(255, 255, 255, 0.1)", borderColor: "rgb(255, 255, 255, 0.3)"},
          open: {backgroundColor: "#FFF9E3", borderColor: "#4D2E00"},
          scrolled: {backgroundColor: "#FFF9E3", borderColor: "#4D2E00"}
        }}
        className="nav fixed z-1000 flex h-fit w-full items-center justify-center border-b-2 border-white/50 p-2 shadow-lg backdrop-blur-xl"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between relative px-4">
            <div className={isScrolled ? '' : 'grayscale'} >
              <a href="#">
                <img src="/brand/brand-logo.png" alt="Brand" width="200" />
              </a>
            </div>

            <motion.div
              animate={isScrolled ? 'scrolled' : 'closed'}
              className="hidden lg:flex flex-row items-center gap-10 text-sm"
            >
              <Link className="w-fit" to="/">
                <motion.span
                  variants={{
                    closed: {color: "#ffffff"},
                    scrolled: {color: "#1B5200"}
                  }}
                  whileHover={{
                    color: "#4AAB00",
                  }}
                  whileTap={{
                    opacity: 0.8,
                  }}
                >
                  Beranda
                </motion.span>
              </Link>

              <Link className="w-fit" to="/produk">
                <motion.span
                  variants={{
                    closed: {color: "#ffffff"},
                    scrolled: {color: "#1B5200"}
                  }}
                  whileHover={{
                    color: "#4AAB00",
                  }}
                  whileTap={{
                    opacity: 0.8,
                  }}
                >
                  Produk
                </motion.span>
              </Link>

              <Link className="w-fit" to="/keunggulan">
                <motion.span
                  variants={{
                    closed: {color: "#ffffff"},
                    scrolled: {color: "#1B5200"}
                  }}
                  whileHover={{
                    color: "#4AAB00",
                  }}
                  whileTap={{
                    opacity: 0.8,
                  }}
                >
                  Keunggulan
                </motion.span>
              </Link>

              <Link className="w-fit" to="/tentang">
                <motion.span
                  variants={{
                    closed: {color: "#ffffff"},
                    scrolled: {color: "#1B5200"}
                  }}
                  whileHover={{
                    color: "#4AAB00",
                  }}
                  whileTap={{
                    opacity: 0.8,
                  }}
                >
                  Tentang Kami
                </motion.span>
              </Link>

              <Link className="w-fit" to="/sertifikat">
                <motion.span
                  variants={{
                    closed: {color: "#ffffff"},
                    scrolled: {color: "#1B5200"}
                  }}
                  whileHover={{
                    color: "#4AAB00",
                  }}
                  whileTap={{
                    opacity: 0.8,
                  }}
                >
                  Sertifikat
                </motion.span>
              </Link>

              <Link className="w-fit" to="/review">
                <motion.span
                  variants={{
                    closed: {color: "#ffffff"},
                    scrolled: {color: "#1B5200"}
                  }}
                  whileHover={{
                    color: "#4AAB00",
                  }}
                  whileTap={{
                    opacity: 0.8,
                  }}
                >
                  Review
                </motion.span>
              </Link>

              <Link className="mx-auto w-fit" to="/">
                <motion.button
                  className="w-full rounded-full border p-2 px-5 font-medium text-sm cursor-pointer relative overflow-hidden"
                  initial="closed"
                  animate={isScrolled ? "scrolled" : "closed"}
                  whileHover="hover"
                  variants={{
                    closed: {borderColor: "#ffffff", color: "#ffffff"},
                    scrolled: {borderColor: "#4AAB00", color: "#4AAB00"},
                    hover: {
                      borderColor: isScrolled ? '#4AAB00' : '#4AAB00',
                      color: isScrolled ? '#ffffff' : '#4AAB00'
                    }
                  }}
                >
                  Login

                  <motion.div
                    className="absolute -z-1 w-9 h-9 rounded-full top-0"
                    variants={{
                      closed: {backgroundColor: "#ffffff", scale: 0},
                      scrolled: {backgroundColor: "#4AAB00", scale: 0},
                      hover: {scale: 2.4}
                    }}
                    transition={{
                      duration: 0.07
                    }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            <div className="flex items-center gap-5 lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                animate={isOpen ? 'open' : isScrolled ? 'scrolled' : 'closed'}
                className="absolute flex flex-col gap-2 right-4 cursor-pointer"
              >
                <motion.span
                  variants={{
                    closed: {rotate: 0, y: 0},
                    open: {rotate: 45, y: 10, backgroundColor: "#4AAB00"},
                    scrolled: {backgroundColor: "#4D2E00"}
                  }}
                  className="hamburg-line bg-white"
                ></motion.span>

                <motion.span
                  variants={{
                    closed: {scaleX: 1},
                    open: {scaleX: 0},
                    scrolled: {backgroundColor: "#4D2E00"}
                  }}
                  className="hamburg-line bg-white"
                ></motion.span>

                <motion.span
                  variants={{
                    closed: {rotate: 0, y: 0},
                    open: {rotate: -45, y: -10, backgroundColor: "#4AAB00"},
                    scrolled: {backgroundColor: "#4D2E00"}
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
              y: -300
            }}
            animate={{
              y: 0
            }}
            exit={{
              y: -300
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut'
            }}
            className="fixed top-1/13 z-10 flex w-full flex-col gap-2 bg-white border-b-2 border-side shadow-lg p-4 font-medium lg:hidden"
          >
            <Link className="w-fit" to="/">
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

            <Link className="w-fit" to="/produk">
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

            <Link className="w-fit" to="/keunggulan">
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

            <Link className="w-fit" to="/tentang">
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

            <Link className="w-fit" to="/sertifikat">
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

            <Link className="w-fit" to="/review">
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

            <Link className="mx-auto w-full mt-5" to="/">
              <motion.button
                className="w-full rounded-full border-2 p-2 cursor-pointer"
                initial={{
                  color: '#ffffff',
                  backgroundColor: '#4AAB00',
                  borderColor: '#1B5200'
                }}
                whileHover={{
                  color: '#4D2E00',
                  backgroundColor: '#ffffff',
                  borderColor: '#4D2E00'
                }}
              >
                Login
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
