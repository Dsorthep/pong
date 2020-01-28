import React, { useEffect, useState } from "react";
import "./Ball.css";

export default function Ball({ pos }) {
  console.log("POS", pos);
  return (
    <div
      className="ball"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`
      }}
    />
  );
}
