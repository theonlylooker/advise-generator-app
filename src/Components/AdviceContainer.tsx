import React from "react";
import divider from "../Assets/images/pattern-divider-mobile.svg";
import dice from "../Assets/images/icon-dice.svg";

const AdviceContainer = () => {
  return (
    <div className="adviceContainer">
      <h5 className="adviceContainer__title">some title</h5>{" "}
      <p className="adviceContainer__text">some text</p>
      <img
        className="adviceContainer__divider"
        src={divider}
        alt="divider button"
      />
      <div className="adviceContainer__action">
        <img
          className="adviceContainer__actionbutton"
          src={dice}
          alt="action button"
        />
      </div>
    </div>
  );
};

export default AdviceContainer;
