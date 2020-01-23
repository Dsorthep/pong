import React from "react";
import "./styles.css";
import Paddle from "./components/Paddle";

export default function App() {
  return (
    <div className="container">
      <Paddle />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Paddle isPlayerTwo />
    </div>
  );
}
