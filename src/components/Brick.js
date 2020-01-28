import React from "react";

export default function Brick({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "20px",
        height: "20px",
        background: "white",
        borderRadius: "4px",
        border: "3px solid gray",
        ...style
      }}
    />
  );
}
