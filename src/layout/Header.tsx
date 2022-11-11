import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
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
          <Link to="/" className="hover:underline hover:underline-offset-4">
            Anasayfa
          </Link>
          <Link to="/bmi" className="hover:underline hover:underline-offset-4">
            BMI Nedir?
          </Link>
          <Link
            to="/bmi-calculator"
            className="hover:underline hover:underline-offset-4"
          >
            BMI Hesaplama
          </Link>
          <Link
            to="/diet-list"
            className="hover:underline hover:underline-offset-4"
          >
            Diyet Listesi
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
