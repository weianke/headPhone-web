import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";

export const fadeUp = (deplay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: deplay,
      },
    },
  };
};
const ServicesData = [
  {
    id: 1,
    link: "#",
    title: "Security",
    icon: Icon1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.5,
  },
  {
    id: 2,
    link: "#",
    title: "Security",
    icon: Icon2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.8,
  },
  {
    id: 3,
    link: "#",
    title: "Security",
    icon: Icon3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 1.1,
  },
];
const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="show"
            className="text-3xl font-bold text-center pb-10"
          >
            Services
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServicesData.map((data) => (
              <UpdateFollower
                key={data.id}
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: 720,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <motion.div>
                      <img src={data.icon} alt="" />
                    </motion.div>
                  ),
                }}
              >
                <motion.div
                  variants={fadeUp(data.delay)}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col items-center justify-center p-5 max-w-[300px] max-auto shadow-lg rounde"
                >
                  <img src={data.icon} alt="" className="w-[100px] mb-4" />
                  <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">{data.title}</h1>
                    <p className="text-center text-sm text-black/75">
                      {data.description}
                    </p>
                  </div>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
