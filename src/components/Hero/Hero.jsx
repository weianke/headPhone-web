import Headphone1 from "../../assets/images/headphone.png";

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    price: "$199",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
];
const Hero = () => {
  return (
    <>
      <section className="bg-brandDark text-white">
        <div className="container grid grid-cols-1 md:grid-cols-1 min-h-[700px]">
          {/* ___Headphone Info____*/}

          {/* ___hEInfo____*/}
          {/* ___Brand Info____*/}
        </div>
      </section>
    </>
  );
};

export default Hero;
