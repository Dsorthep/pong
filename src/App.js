import React, { useState, useEffect } from "react";
import "./styles.css";
import Paddle from "./components/Paddle";

export default function App() {
  const [p1PaddleY, setP1PaddleY] = useState(0);
  const [p2PaddleY, setP2PaddleY] = useState(0);

  function handleKey(e) {
    const char = e.key.toLowerCase();
    if (char === "w" || char === "s") {
      setP1PaddleY(p1PaddleY + (char === "w" ? -10 : 10));
    }
    if (char === "o" || char === "l") {
      setP2PaddleY(p2PaddleY + (char === "o" ? -10 : 10));
    }
    console.log(e);
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [p1PaddleY, p2PaddleY]);
  return (
    <div className="container">
      <Paddle paddleY={p1PaddleY} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Paddle isPlayerTwo paddleY={p2PaddleY} />
    </div>
  );
}

// // initialise canvas and context
// var container = document.getElementById('container');
// var context = canvas.getContext('2d');

// // physical variables
// var g = 0.1; // gravity
// var fac = 0.8; // velocity reduction factor per bounce
// var radius = 20; // ball radius
// var color = "#0000ff"; // ball color

// // initialise position and velocity of ball
// var x = 50;
// var y = 50;
// var vx = 2;
// var vy = 0;

// // ensure that code does not run before page has loaded
// window.onload = init;

// function init() {
// // set up a timer
//     setInterval(update, 1000/60); // 60 frames per second
// };

// function update() {
//   // update velocity
//   vy += g; // gravity

//   // update position
//   x += vx;
//   y += vy;

//   // handle bouncing
//   if (y > canvas.height - radius){
//     y = canvas.height - radius;
//     vy *= -fac;
//   }

//   // wrap around
//   if (x > canvas.width + radius){
//     x = -radius;
//   }

//   // update the ball
//   drawBall();
// };

// function drawBall() {
//     with (context){
//         clearRect(0, 0, canvas.width, canvas.height); // clear canvas
//         fillStyle = color;
//         beginPath();
//         arc(x, y, radius, 0, 2*Math.PI, true);
//         closePath();
//         fill();
//     };
// };
