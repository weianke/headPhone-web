import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone4 from "../../assets/headphone3.png";

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
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
              <h1 className="text-3xl lg:text-6xl font-bold font-varela">
                {activeData.title}
              </h1>
              <p className="text-sm leading-loose text-white/80">
                {activeData.subtitle}
              </p>
              <button
                className="px-4 py-2 inline-block"
                style={{
                  backgroundColor: activeData.bgColor,
                }}
              >
                Buy and Listen
              </button>

              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white"></div>
                <p>Top Headphones for you</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>

              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((item) => {
                  return (
                    <div
                      key={item.id}
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
                  );
                })}
              </div>
            </div>
          </div>
          {/* ___Headphone Image____*/}

          <div className="flex flex-col justify-end items-center">
            <img
              src={activeData.image}
              alt=""
              className="w-[300px] md:w-[400px] xl:w-[550px]"
            />
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
