import React, { useEffect, useState } from "react";
import { count } from "../redux/Action";
import myStore from "../redux/Store";
import { useSelector } from "react-redux";
import './inputcomp.css'

export default function Inputcomp() {
  const [value, setValue] = useState(0);
  const { number, setnumber } = useSelector((data) => data);

  useEffect(() => {
    myStore.dispatch(count(value, setValue));
  }, [value]);

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <h1>{number}</h1>
      <div className="buttons"><button
        onClick={() => {
          setnumber(number + 1);
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          setnumber(number - 1);
        }}
      >
        Decreament
      </button>
      <button
        onClick={() => {
          setnumber(0);
        }}
      >
        Reset
      </button></div>
    </div>
  );
}
