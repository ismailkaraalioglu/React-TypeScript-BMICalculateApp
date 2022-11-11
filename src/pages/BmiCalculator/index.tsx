import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { changeUser } from "../../redux/bmi/bmiSlice";

import Form from "../../components/Form";
import { Link } from "react-router-dom";

const BmiCalculator: React.FC = () => {
  const {
    calculatorCompleted,
    user: { userBmi, userName, category },
  } = useAppSelector((state) => state.bmi);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeUser());
  };

  return (
    <main className="w-[400px] mx-auto flex justify-center px-8 py-28 mt-10 border shadow rounded-xl">
      <div className="text-center w-full">
        <h1 className="font-extrabold text-2xl mb-10">
          Vücut Kitle İndeksi(BMI) Hesaplama
        </h1>
        {!calculatorCompleted && <Form />}
        {calculatorCompleted && (
          <>
            <div className="w-full h-3 mt-10 bg-gradient-to-r from-cyan-500 via-yellow-500 to-rose-700 rounded-full"></div>
            <input
              type="range"
              min="0"
              max="35"
              className="appearance-none w-full"
              value={userBmi}
            />
            <p className="font-semibold italic text-lg mt-5">
              {userName} Vücut Kitle İndeksin <br /> {userBmi} BMI ({category})
            </p>
            <Link
              to="/diet-list"
              className="btn btn-outline mt-8"
              onClick={handleClick}
            >
              Diyet Programına Gidin
            </Link>
            <button className="btn btn-outline mt-3" onClick={handleClick}>
              Tekrar Hesapla
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default BmiCalculator;
