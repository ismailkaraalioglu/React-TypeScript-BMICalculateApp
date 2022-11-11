import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Home/Layout";
import Home from "./pages/Home/Home";
import Bmi from "./pages/Bmi";
import BmiCalculator from "./pages/BmiCalculator";
import DietLists from "./pages/DietLists";
import Page404 from "./pages/Page404";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bmi" element={<Bmi />} />
        <Route path="bmi-calculator" element={<BmiCalculator />} />
        <Route path="diet-list" element={<DietLists />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
