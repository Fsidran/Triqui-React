import { useContext } from "react";
import React from "react";
import { SharedValueContext } from "../SharedValueContext";

const Register = () => {
  const { victoryX } = useContext(SharedValueContext);
  const { victoryO } = useContext(SharedValueContext);
  return (
    <div className="reg">
      <p>
        Numero de victorias del pirata <strong>X</strong> = {victoryX}
      </p>
      <br />
      <p>
        Numero de victorias del pirata <strong>O</strong> = {victoryO}
      </p>
    </div>
  );
};

export default Register;
