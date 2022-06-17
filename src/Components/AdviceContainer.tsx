import React from "react";
import divider from "../Assets/images/pattern-divider-mobile.svg";
import dice from "../Assets/images/icon-dice.svg";
import { AdviceContainerProps } from "../types/type";

const AdviceContainer = ({ getSlip, slip }: AdviceContainerProps) => {
  return (
    <div className="adviceContainer">
      <h5 className="adviceContainer__title">Advice #{slip.id}</h5>
      <p className="adviceContainer__text">“{slip.advice}”</p>
      <img
        className="adviceContainer__divider"
        src={divider}
        alt="divider button"
      />
      <button className="adviceContainer__action" onClick={getSlip}>
        <img
          className="adviceContainer__actionbutton"
          src={dice}
          alt="action button"
        />
      </button>
    </div>
  );
};

export default AdviceContainer;
