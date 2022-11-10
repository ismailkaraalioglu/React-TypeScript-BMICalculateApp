import React from "react";

const Home: React.FC = () => {
  return (
    <main className="pt-10 text-center">
      <h1 className="font-extrabold text-3xl mb-10 leading-10">
        Vücut Kitle Indeksi(BMI) Hesaplama <br /> Aracına Hoşgeldiniz.
      </h1>

      <img
        src={require("../../assets/images/main.png")}
        alt="main"
        width={900}
        className="mx-auto"
      />
    </main>
  );
};

export default Home;
