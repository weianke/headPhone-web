/**
 * 头部
 */
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="bg-brandDark text-white py-6 font-varela">
        <nav className="container flex justify-between items-center">
          {/* 头部左侧logo */}
          <div>
            <a href="@" className="text-xl font-bold uppercase">
              Playing /{" "}
              <span className="font-extralight text-white/70">Market</span>
            </a>
          </div>
          {/* 头部中间menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block text-sm py-2 px-3 uppercase hover:bg-brandLight/5"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <button className="text-xl ps-14">
                <SlEarphones />
              </button>
            </ul>
          </div>
          {/* 头部右侧mobile */}
          <div className="md:hidden">
            <MdMenu className="text-4xl " />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
