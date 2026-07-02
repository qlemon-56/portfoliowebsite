"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Shader,
  FlowingGradient,
  FilmGrain,
} from "shaders/react";

type colorPalette = {
  textMain: string;
  textSecondary: string;
  primaryAccent: string;
  secondaryAccent: string;
  deepBackground: string;
  tertiaryAccent: string;
};

const colorSettings = {
  themeA: {
    textMain: "#6981d6",
    textSecondary: "#f2f5ff",
    primaryAccent: "#2C5EAD",
    secondaryAccent: "#1591DC",
    deepBackground: "#4BB8FA",
    tertiaryAccent: "#C4E2F5",
  },
};

type MainContentProps = {
  currentState: number;
};

function MainContent({ currentState }: MainContentProps) {
  if (currentState == 1) {
    return (
      <div className="w-2/3 text-base leading-relaxed">
        I'm a 1st year student studying Electronic and Computer Engineering at
        the University of York I'm currently working on ____
      </div>
    );
  } else if (currentState == 2) {
    return (
      <div className="w-2/3 text-base leading-relaxed">
        <div className="border-t-1 border-b-1 h-40 mt-2 pt-2 ">
          <h4 className="font-bold">Model To Market</h4>
          <p className="h-20">Trading hackathon where I built a Z score mean reversion bot</p>
          <span>
            <div className="font-extralight">
              Python - MT5 API - Claude Agents
            </div>
          </span>
        </div>
      </div>
    );
  } else if (currentState == 3) {
    return (
      <div className="w-2/3 text-base leading-relaxed">
        <div>Me @AI Engine's Model to Market Hackathon</div>
        <div>Me @Deutsche Bank</div>
        <div>Me @Manchester Formula Fusion 2026</div>
        <div>Me @Silverstone - FSUK 2026</div>

      </div>
    );
  }

  return <></>;
}

function Project() {

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

export default function Home() {
  const [currentState, setCurrentState] = useState(1);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas background */}
      <div className="fixed z-0 inset-0">
        <Shader className="w-full h-full">
          <FilmGrain strength={0.1} animated={true}>
            <FlowingGradient
              colorA={colorSettings.themeA.deepBackground}
              colorB={colorSettings.themeA.primaryAccent}
              colorC={colorSettings.themeA.secondaryAccent}
              colorD={colorSettings.themeA.tertiaryAccent}
              speed={0.5}
              distortion={0.2}
            />
          </FilmGrain>
        </Shader>
      </div>
      {/* Content overlay */}
      <div className="relative min-h-screen flex flex-col items-center justify-center" style={{color: colorSettings.themeA.textSecondary  }}>
        <div className="w-2/3 h-3/4">
          {/*Main AREA*/}
          <div className="flex">
            {/* Main content */}

            <div
              id="areaone"
              className="w-3/4 overflow-hidden border-1 flex-auto"
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
            </div>

            {/* Side panel */}
            <div
              id="areatwo"
              className="w-1/4 overflow-hidden flex-auto pl-5 ml-2 border-1"
            >
              <div className="w-full pt-2">
                <span
                  
                >
                  interests
                </span>
                <div style={{ color: colorSettings.themeA.textSecondary }}>
                  <a
                    href="https://www.google.com"
                    className="transition-all ease-in-out duration-150 hover:text-myGold"
                  >
                    books
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.google.com"
                    className="transition-all ease-in-out duration-150 hover:text-myGold"
                  >
                    podcasts
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.google.com"
                    className="transition-all ease-in-out duration-150 hover:text-myGold"
                  >
                    creators
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
              color: colorSettings.themeA.textSecondary,
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
                  href="./Resume_Imade%20Mark.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-transparent transition-all duration-150 ease-in-out hover:text-gray-300 hover:border-white"
                >
                  Resume
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
