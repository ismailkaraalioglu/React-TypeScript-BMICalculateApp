import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../layout/Header"

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
