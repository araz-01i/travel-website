import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/image.png";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

export const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];
function Navbar({ handleOrderPopup }) {
  
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    
  };

  return (
    <>
     <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={logoImg} alt="" className="h-16" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li className="py-4">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs" activeClassName="active">
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/best-places" activeClassName="active">
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Book Now
              </button>

              <div className="md:hidden">
                {showMenu ? (
                  <HiMenuAlt1
                    size={30}
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                  />
                ) : (
                  <HiMenuAlt3
                    size={30}
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            showMenu ? "left-0" : "-left-full"
          } fixed top-0 w-3/4 z-20 flex flex-col justify-between  px-8 pb-6 pt-16 h-full bg-white transition-all text-black first-line:shadow-md rounded-xl md:hidden`}
        >
          <div className="flex flex-col justify-start  gap-3 ">
            <div className="flex gap-3 items-center">
              <FaUserCircle size={50} />
              <div className="flex flex-col justify-center">
                <h1>Hello User</h1>
                <h4>Premum user</h4>
              </div>
            </div>
            <div className="mt-8">
              <ul className="flex flex-col gap-y-5">
                {NavbarLinks.map((data) => (
                  <li key={data.key}>
                    <Link
                      to={data.link}
                      onClick={() => {
                        setShowMenu(false);
                      }}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-green mt-64 font-bold">
            <h1>
              Made with ❤ by{" "}
              <a href="https://dilshad-ahmed.github.io/">Dilshad</a>
            </h1>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
