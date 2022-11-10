import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-zinc-200">
      <div className="max-w-7xl h-[100px] mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              src={require("../assets/images/logo.png")}
              alt="logo"
              width={130}
            />
          </Link>
        </div>

        <nav className="flex items-center gap-x-8 font-semibold text-lg">
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
            to="/diet-listesi"
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
