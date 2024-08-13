import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone4 from "../../assets/headphone3.png";

const fadeUp = (deplay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: deplay,
        duration: 0.5,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    subtitle:
      "Wireless Headphones, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless",
    subtitle:
      "Wireless Headphones, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$199",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone4,
    title: "Headphones Wireless",
    subtitle:
      "Wireless Headphones, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$199",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    modal: "Modal Brown",
    bgColor: "#5d818c",
  },
];
const Hero = () => {
  const [activeData, setActiveData] = useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* ___Headphone Info____*/}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: "difference",
                  scale: 10,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {activeData.title}
                  </motion.h1>
                </AnimatePresence>
              </UpdateFollower>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: activeData.bgColor,
                  zIndex: 999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: "difference",
                  scale: 10,
                  backgroundElement: (
                    <div>
                      <img src={activeData.image} alt="" />
                    </div>
                  ),
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="px-4 py-2 inline-block"
                    style={{
                      backgroundColor: activeData.bgColor,
                    }}
                  >
                    Buy and Listen
                  </motion.button>
                </AnimatePresence>
              </UpdateFollower>

              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white"></div>
                <p>Top Headphones for you</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>

              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((item) => {
                  return (
                    <UpdateFollower
                      key={item.id}
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 999,
                        followSpeed: 0.5,
                        rotate: -720,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        onClick={() => handleActiveData(item)}
                        className="grid grid-cols-2 place-items-center cursor-pointer"
                      >
                        <div>
                          <img src={item.image} alt="" className="w-[200px]" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-base font-bold">{item.price}</p>
                          <p className="text-xs font-normal text-wrap">
                            {item.modal}
                          </p>
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>
          {/* ___Headphone Image____*/}

          <div className="flex flex-col justify-end items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 100,
                  transition: {
                    duration: 0.2,
                  },
                }}
                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                src={activeData.image}
                alt=""
                className="w-[300px] md:w-[400px] xl:w-[550px]"
              />
            </AnimatePresence>
          </div>
          {/* ___Brand Info____*/}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
