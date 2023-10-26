import React from "react";
import "./Drawing.css";

const Head = <div className="head" />;
const Body = <div className="body" />;
const Right_Arm = <div className="rightArm" />;
const Left_Arm = <div className="leftArm" />;
const Right_Leg = <div className="rightLeg" />;
const Left_Leg = <div className="leftLeg" />;

const Body_Parts = [Head, Body, Right_Arm, Left_Arm, Right_Leg, Left_Leg];

const Drawing = ({ numberOfGuesses }) => {
  return (
    <div style={{ position: "relative" }}>
      {Body_Parts.slice(0, numberOfGuesses)}
      <div className="side" />
      <div className="top" />
      <div className="middle" />
      <div className="bottom" />
    </div>
  );
};

export default Drawing;
