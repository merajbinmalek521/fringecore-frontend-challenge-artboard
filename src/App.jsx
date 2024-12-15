import React, { useRef, useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="toolbar">
        <button id="drawing">Pen</button>
        <button id="eraser">Erase</button>
      </div>
      <canvas id="board"></canvas>
    </div>
  );
}

const board = document.querySelector("#board");
const context = board.getContext("2d");
let color = "black";
let lineSize = 5;

window.addEventListener("load", () => {
  board.height = window.innerHeight();
  board.Width = window.innerWidth();

  // drawing = false;
  let drawing = document.querySelector("#drawing");
  drawing.addEventListener("click", () => {
    color = color;
  })
  const startDrawing = (i) => {
    drawing = true;
    draw(i);
  }
  const stopDrawing = () => {
    drawing = false;
    context.beginPath();
  }
  
  const draw = (i) => {
    if(!drawing) return;

    context.lineWidth = lineSize;
    context.lineCap = "round";
    context.strokeStyle = color;

    context.lineTo(i.clientX, i.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(i.clientX, i.clientY);
  }
  board.addEventListener("mousedown", startDrawing);
  board.addEventListener("mouseup", stopDrawing);
  board.addEventListener("mousemove", draw);

})

const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
  color = "white";
})


export default App;
