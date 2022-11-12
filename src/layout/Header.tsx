import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  let activeClassName = "underline underline-offset-4";

  return (
    <header className="w-full h-[100px] bg-gray-100">
      <div className="max-w-7xl h-full mx-auto flex items-center justify-between px-5">
        <div>
          <Link to="/">
            <img
              src={require("../assets/images/logo.png")}
              alt="logo"
              width={130}
            />
          </Link>
        </div>

        <nav className="md:flex md:flex-row md:items-center md:gap-x-8 md:font-semibold md:text-lg flex flex-col font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Anasayfa
          </NavLink>
          <NavLink
            to="/bmi"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            BMI Nedir?
          </NavLink>
          <NavLink
            to="/bmi-calculator"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            BMI Hesaplama
          </NavLink>
          <NavLink
            to="/diet-list"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Diyet Listesi
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
