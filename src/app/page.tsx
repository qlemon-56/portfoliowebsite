"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { type Sketch } from "@p5-wrapper/react";
import { P5Canvas } from "@p5-wrapper/react";
import { useMouse } from "@uidotdev/usehooks";
import p5 from "p5";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";

type colorPalette = {
  bubblesA: string; //small bubbles
  bubblesB: string; // big bubbles
  foreground: string;
  background: string;
  text: string;
};

const colorSettings: colorPalette[] = [
  {
    bubblesA: "#4e5880",
    bubblesB: "#323c61",
    foreground: "#323c61",
    background: "#323c61",
    text: "#323c61",
  },
];

let rows = 30;
let cols = 30;
let diameter = 15;
let padding = 20; // Space from canvas edges

let t = 0;

const sketch: Sketch = (p5) => {
  // the sketch function is basically at the same scope as the base p5 ide so just place all the code in here
  let u = 20;
  let v = -20;

  let funPattern = (x: number, y: number, t: number) => {
    let scl = 1;
    //return p5.cos( p5.cos(scl * (x ) - t ) + 2 * p5.cos( scl *(y - t) - p5.abs(p5.sin(scl * (x) - t ) ))  );
    return p5.sin((y - 7.5) / (x - 7.5) + 5 * t);
  };

  let funRadius = (x: number) =>
    diameter * p5.abs(2 / (1 + p5.exp(-5 * x)) - 1);

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
  };

  p5.draw = () => {
    p5.background("#000000");

    let cellW = (window.innerWidth - 2 * padding) / cols;
    let cellH = (window.innerHeight - 2 * padding) / rows;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let x = i * cellW + cellW / 2 + padding;
        let y = j * cellH + cellH / 2 + padding;

        let r = funRadius(funPattern(j, i, t));
        if (funPattern(j, i, t) < 0)
          p5.fill("#4e5880"); // small bubbles
        else p5.fill("#323c61"); // big bubbles
        p5.circle(x, y, r);
      }
    }

    t += 0.003;
  };

  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};

function Canvas() {
  return <P5Canvas sketch={sketch} />;
}

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas background */}
      <div className="fixed inset-0 z-0">
        <Canvas />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="justify w-2/3 ">
          <div className="flex">
            {/* Main content */}
            <div
              id="areaone"
              className="w-3/4 overflow-hidden border-1 flex-auto text-white"
              style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
            >
              <main className="flex items-center justify-center w-full gap-12 py-16 px-12">
                <div className="w-1/3">
                  <p className="text-lg">Hey I'm</p>
                  <div>
                    <p className="text-7xl font-bold">Mark</p>
                    <p className="text-2xl">Imade</p>
                  </div>
                </div>
                <div className="w-2/3 text-base leading-relaxed">
                  I'm a 1st year student studying Electronic and Computer
                  Engineering at the University of York I'm currently working on
                  XXXX, but I'm also interested in finance and technology.
                </div>
              </main>
              <header className="w-full py-6 px-8 flex justify-between items-center border-b border-gray-200">
                <div className="w-3/4">
                  <span className="mx-4">About Me</span>
                  <span className="mx-4">Projects</span>
                </div>
                <div className="text-sm">9:18 PM</div>
              </header>
            </div>

            {/* Side panel */}
            <div
              id="areatwo"
              className="w-1/4 overflow-hidden flex-auto pl-5 ml-2 border-1"
              style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
            >
              <div className="w-full bg-amber-50">
                <span>hello</span>
              </div>
            </div>

          </div>

          <footer className="bottom-0 h-5% border-1 mt-2"
              style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
          >
            <div className="flex justify-between text-xs text-white">
              <span className="ml-5">© Mark Imade 2026</span>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mark-imade/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-transparent transition-all duration-150 ease-in-out hover:text-gray-300 hover:border-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/qlemon-56"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-transparent transition-all duration-150 ease-in-out hover:text-gray-300 hover:border-white"
                >
                  Github
                </a>
                <a
                  href="mailto:markimade01@gmail.com"
                  className="border-b-2 border-transparent transition-all duration-150 ease-in-out hover:text-gray-300 hover:border-white"
                >
                  markimade01@gmail.com
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

("https://openprocessing.org/@jcponcemath/2146438");
