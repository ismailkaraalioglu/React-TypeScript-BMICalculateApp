import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setUserBmi } from "../redux/bmi/bmiSlice";

interface UserState {
  userName: string;
  userWeight: number;
  userHeight: number;
}

const initialState: UserState = {
  userName: "",
  userWeight: 0,
  userHeight: 0,
};

const Form: React.FC = () => {
  const [user, setUser] = useState<UserState>(initialState);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { userName, userWeight, userHeight } = user;
    e.preventDefault();
    if (!userName || !userWeight || !userHeight) return;
    const calculator = userWeight / (userHeight / 100) ** 2;
    const userBmi = Number(calculator.toFixed(1));
    dispatch(
      setUserBmi({ user: { userName, userWeight, userHeight, userBmi } })
    );
    setUser(initialState);
  };

  return (
    <form className="flex flex-col items-start" onSubmit={handleSubmit}>
      <label htmlFor="userName" className="mb-1">
        İsminiz
      </label>
      <input
        className="w-full p-4 rounded-xl outline-none border shadow"
        id="userName"
        name="userName"
        type="text"
        value={user.userName}
        onChange={handleChange}
      />
      <label htmlFor="height" className="mt-5 mb-1">
        Boyunuz (cm)
      </label>
      <input
        className="w-full p-4 rounded-xl outline-none border shadow"
        id="height"
        name="userHeight"
        type="number"
        value={user.userHeight}
        onChange={handleChange}
      />
      <label htmlFor="weight" className="mt-5 mb-1">
        Kilonuz (kg)
      </label>
      <input
        className="w-full p-4 rounded-xl outline-none border shadow"
        id="weight"
        name="userWeight"
        type="number"
        value={user.userWeight}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-outline mt-8 mx-auto">
        Hesapla
      </button>
    </form>
  );
};

export default Form;
