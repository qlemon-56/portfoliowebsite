"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { type Sketch } from "@p5-wrapper/react";
import { P5Canvas } from "@p5-wrapper/react";
import { useMouse } from "@uidotdev/usehooks";
import p5 from "p5";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

type colorPalette = {
  bubblesA: string; //small bubbles
  bubblesB: string; // big bubbles
  foreground: string;
  background: string;
  textMain: string;
  textSecondary: string;
};

const colorSettings = {
  themeA: {
    bubblesA: "#4e5880",
    bubblesB: "#323c61",
    foreground: "#ffffff",
    background: "#080808",
    textMain: "#6981d6",
    textSecondary: "#f2f5ff",
  },
};

// drawing variables
let rows = 10;
let cols = 10;
// circle diameters
let diameter = 50;

// Space from canvas edges
let padding = 10;
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
    p5.background(colorSettings.themeA.background);

    let cellW = (window.innerWidth - 2 * padding) / cols;
    let cellH = (window.innerHeight - 2 * padding) / rows;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let x = i * cellW + cellW / 2 + padding;
        let y = j * cellH + cellH / 2 + padding;

        let r = funRadius(funPattern(j, i, t));
        if (funPattern(j, i, t) < 0)
          p5.fill(colorSettings.themeA.bubblesA); // small bubbles
        else p5.fill(colorSettings.themeA.bubblesB); // big bubbles
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

type MainContentProps = {
  currentState: number;
};

function MainContent({ currentState }: MainContentProps) {
  if (currentState == 1) {
    return (
      <div className="w-2/3 text-base leading-relaxed">
        I'm a 1st year student studying Electronic and Computer Engineering at
        the University of York I'm currently working on XXXX, but I'm also
        interested in finance and technology.
      </div>
    );
  } else if (currentState == 2) {
    return (
      <div className="w-2/3 text-base leading-relaxed">
        Projects
      </div>
    );
  } else if (currentState == 3) {
    return (
      <div className="w-2/3 text-base leading-relaxed">
        Archive
      </div>
    );
  }

  return <></>;
}

type NavBarProps = {
  currentState: number;
  setCurrentState: (state: number) => void;
};

function NavBar({ currentState, setCurrentState }: NavBarProps) {
  const navItems = [
    { label: "About me", state: 1 },
    { label: "Projects", state: 2 },
    { label: "Archive", state: 3 },
  ];

  return (
    <div className="w-full flex space-x-5 pl-5 items-center border-gray-200">
      {navItems.map((item) => (
        <h1
          key={item.state}
          onClick={() => setCurrentState(item.state)}
          className={`cursor-pointer transition-all ease-in-out duration-150 p-2 ${
            currentState === item.state
              ? "opacity-100 border-b-3"
              : "hover:opacity-60"
          }`}
        >
          {item.label}
        </h1>
      ))}
    </div>
  );
}
/*
<FlickeringGrid
            className="fixed inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color="#60A5FA"
            maxOpacity={0.8}
            flickerChance={0.1}
            height={window.innerHeight}
            width={window.innerWidth}
          />
*/

export default function Home() {
  const [currentState, setCurrentState] = useState(1);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas background */}

      {/* Content overlay */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center"
        style={{ color: colorSettings.themeA.textMain }}
      >
        <div className="w-2/3 h-3/4">
          {/*Main AREA*/}
          <div className="flex">
            {/* Main content */}

            <main
              className="w-3/4 overflow-hidden border-1 flex-auto opacity-95"
              style={{ backgroundColor: colorSettings.themeA.foreground }}
            >
              <div className="flex items-center w-full">
                <p className="text-lg pl-5 pt-5">
                  Mark
                  <br />
                  Imade
                </p>
              </div>
              <div className="h-100 p-5">
                <MainContent currentState={currentState} />
              </div>
              {/* Nav Bar */}
              <NavBar
                currentState={currentState}
                setCurrentState={setCurrentState}
              />
            </main>

            {/* Side panel */}
            <div
              id="areatwo"
              className="w-1/4 overflow-hidden flex-auto pl-5 ml-2 border-1"
            >
              <div className="w-full pt-2">
                <span
                  className=""
                  style={{ color: colorSettings.themeA.textMain }}
                >
                  interests
                </span>
                <div style={{ color: colorSettings.themeA.textSecondary }}>
                  <a
                    href="https://www.google.com"
                    className="transition-all ease-in-out duration-150 hover:text-myBlue"
                  >
                    books
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.google.com"
                    className="transition-all ease-in-out duration-150 hover:text-myBlue"
                  >
                    podcasts
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.google.com"
                    className="transition-all ease-in-out duration-150 hover:text-myBlue"
                  >
                    writing
                  </a>{" "}
                  <br />
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER AREA */}
          <footer
            className="bottom-0 h-5% border-1 mt-2"
            style={{
              backgroundColor: colorSettings.themeA.foreground,
              color: colorSettings.themeA.textMain,
            }}
          >
            <div className="flex justify-between text-xs">
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
